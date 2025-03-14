import axios from "axios";
import { Button } from "../components/ui/Button"
import { Input } from "../components/ui/Input"
import { BACKEND_URL } from "../config";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export const SignIn = () => {
    const usernameRef = useRef<HTMLInputElement>(); 
    const passwordRef = useRef<HTMLInputElement>(); 
    const navigate = useNavigate();

    async function signin() {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        console.log(usernameRef.current);

        const response = await axios.post(BACKEND_URL+"/api/v1/signin", {
            username,
            password
        })

        const jwt = response.data.token;
        localStorage.setItem("token", jwt);
        navigate("/dashboard");
    }

    return <div className="h-screen w-screen bg-gray-100 flex justify-center items-center">
        <div className="bg-white rounded-xl border max-w-96 h-64 p-9">
            <Input reference={usernameRef} placeholder="Username" />
            <Input reference={passwordRef} placeholder="Password" />

            <div className="pt-6">
                <Button onClick={signin} variant="Primary" size="lg" text="Submit" fullWidth={true} />
            </div>
        </div>
    </div>
}