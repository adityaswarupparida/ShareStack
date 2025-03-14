import { useRef } from "react"
import { Button } from "../components/ui/Button"
import { Input } from "../components/ui/Input"
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
    const usernameRef = useRef<HTMLInputElement>(); 
    const passwordRef = useRef<HTMLInputElement>(); 
    const navigate = useNavigate();

    async function signup() {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        console.log(usernameRef.current);

        await axios.post(BACKEND_URL+"/api/v1/signup", {
            username,
            password
        })

        navigate("/signin");
        alert("Hurrayy! You are signed up!!")
    }

    return <div className="h-screen w-screen bg-gray-100 flex justify-center items-center">
        <div className="bg-white rounded-xl border max-w-96 h-64 p-9">
            <Input reference={usernameRef} placeholder="Username" />
            <Input reference={passwordRef} placeholder="Password" />

            <div className="pt-6">
                <Button onClick={signup} variant="Primary" size="lg" text="Submit" fullWidth={true} />
            </div>
        </div>
    </div>
}