import { useCallback, useContext, useState } from "react";
import { AuthContext } from "../../context-provider/context/auth.context.js";

export const useChat = () => {
    const [isOnline, setStatus] = useState(false);
    const [waitResponse, setWaitResponse] = useState(false);
    const [messageStatus, setStatusResponse] = useState('');
    const [objectResponse, setObjectResponse] = useState(null);
    const [message, setMessage] = useState("");

    const context = useContext(AuthContext);
    const socket = context.socket;

    socket.addEventListener("open", (event) => {
        setStatus(true);
    });

    socket.addEventListener("message", (event) => {
        const response = JSON.parse(event.data);
        console.log(response);

        if(!response?.status){
            setWaitResponse(false);
            setStatusResponse('Error');
        }

        if(response.status === "Success"){
            setStatusResponse(response.status);
            setWaitResponse(false);
            setObjectResponse(response.message);
            setMessage(response.message.text);
        }else{
            setStatusResponse('Error')
        }
    });
    
    const sendMessage = useCallback(( message ) => {
        setWaitResponse(true);

        const payload = JSON.stringify({
            action: "sendMessage",
            message
        });
        context.socket.send(payload);
        
    }, [context.socket]);

    const getObjectResponseAI = useCallback(() => {
        return objectResponse;
    }, [objectResponse]);

    return {
        isOnline,
        messageStatus,
        waitResponse,
        message,
        sendMessage,
        getObjectResponseAI
    }
}