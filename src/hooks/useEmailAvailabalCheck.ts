import axios from "axios";
import { useState } from "react";

type TStatus = "idle" | "checking" | "available" | "notAvailable" | "failed";


const useEmailAvailablCheck = () => {
        const [statusAvailablEmail, setStatusAvailablEmail] = useState<TStatus>("idle");
        const [entredEmail, setEntredEmail] = useState<null | string>(null);

        const checkEmailAvailable = async(email:string) => {
            setEntredEmail(email);
            setStatusAvailablEmail("checking");
                try {
                    const response = await axios.get(`/users?email=${email}`);
                if(!response.data.length) {
                    setStatusAvailablEmail("available");
                } else {
                    setStatusAvailablEmail("notAvailable")
                }
                } catch (error) {
                    setStatusAvailablEmail("failed");
                }
        }

        const resetCheckEmailAvailable = () => {
            setStatusAvailablEmail("idle");
            setEntredEmail(null);
        }

        return {statusAvailablEmail, entredEmail,  checkEmailAvailable, resetCheckEmailAvailable}
}

export default useEmailAvailablCheck;