import { useRef, useState } from "react";
import { CrossIcon } from "../../icons/CrossIcon"
import { Button } from "./Button"
import { Input } from "./Input";
import { BACKEND_URL } from "../../config";
import axios from "axios";

interface CreateContentModalProps {
    open: boolean;
    onClose: () => void;
}

enum ContentType {
    Youtube = "Youtube",
    Twitter = "Twitter",
    Notes = "Notes"
}

export const CreateContentModal = ({open, onClose}: CreateContentModalProps) => {
    const titleRef = useRef<HTMLInputElement>(); 
    const linkRef = useRef<HTMLInputElement>(); 
    const [type, setType] = useState(ContentType.Notes);

    async function addcontent() {
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;

        await axios.post(`${BACKEND_URL}/api/v1/content`, {
            title,
            link,
            type,
        }, {
            headers: {
                "token": localStorage.getItem("token")
            }
            
        })

        onClose();
    }
    return <div>
        {open && <div>
            <div className="w-screen h-screen bg-slate-500 opacity-60 fixed top-0 left-0">
            </div>
            <div className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center">
                <div className="bg-white p-6 w-1/2 md:w-1/3 max-h-full rounded-md">
                    <div className="flex justify-center items-center">
                        <div className="flex-grow lg:text-2xl text-lg text-center">
                            New Content Details
                        </div>
                        <div className="flex-shrink">
                            <div className="cursor-pointer" onClick={onClose}>
                                <CrossIcon className="hover:bg-slate-100 rounded-sm" />
                            </div>
                        </div>
                    </div>
                    <span className="text-black">Title</span>
                    <Input reference={titleRef} placeholder={"Title"} />
                    <span className="text-black">Link/Notes</span>
                    <TextArea reference={linkRef} placeholder={"Link/Notes"} />
                    <span className="text-black">Source</span>
                    <div className="bg-purple-200 p-1 mb-5 text-purple-500 rounded-lg">
                        <div className="flex h-10 justify-between">
                            <Button text="Youtube" size="lg" className="w-1/3 flex justify-center" 
                                variant={type === ContentType.Youtube ?
                                "Primary" : "Secondary"} onClick={() => {
                                    setType(ContentType.Youtube)
                                }} 
                            />
                            <Button text="Twitter" size="lg" className="w-1/3 flex justify-center" 
                                variant={type === ContentType.Twitter ?
                                "Primary" : "Secondary"} onClick={() => {
                                    setType(ContentType.Twitter)
                                }} 
                            />
                            <Button text="Notes" size="lg" className="w-1/3 flex justify-center" 
                                variant={type === ContentType.Notes ?
                                "Primary" : "Secondary"} onClick={() => {
                                    setType(ContentType.Notes)
                                }} 
                            />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <Button onClick={addcontent} variant="Primary" size="lg" text="Submit" fullWidth={true} />
                    </div>
                </div>
            </div>
        </div>}    
    </div>
}


const TextArea = ({ placeholder, reference }: {
    placeholder: string;
    reference?: any;
}) => {
    return <div className="py-2">
        <textarea ref={reference} placeholder={placeholder} className="p-2 w-full border rounded" rows={4}></textarea>
    </div>
}