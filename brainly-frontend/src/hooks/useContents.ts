import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";

export const useContents = () => {
    const [contents, setContents] = useState([]);

    function getContents() {
        axios.get(`${BACKEND_URL}/api/v1/contents`, {
            headers: {
                "token": localStorage.getItem("token")
            }
        }).then((response) => {
            setContents(response.data.contents)
        })
    }

    useEffect(() => {
        getContents();
    }, []);
    return { contents, getContents };
}