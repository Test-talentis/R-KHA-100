import { zodResolver } from "@hookform/resolvers/zod";
import { actLogin } from "@store/Auth/authSlice";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { singInSchema, singInType } from "@validation/SingInSchema";
import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import {resetUi} from "@store/Auth/authSlice"
const useLogin = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {status, error, accessToken} = useAppSelector(state => state.auth);
    const {
        handleSubmit,
        register, 
        formState: {errors}
    } = useForm<singInType>({
        resolver: zodResolver(singInSchema),
        mode: "onBlur"
    })

    useEffect(() => {
       return () => {
        dispatch(resetUi())
       }
    },[dispatch])

    const submitForm : SubmitHandler<singInType> = async (data) => {
        if(searchParams.get("message")) {
            setSearchParams("");
        }
        const {email, password} = data;
        dispatch(actLogin({email, password}))
        .unwrap()
        .then(() => {
            navigate("/");
        })  
    }

    return {status,error, errors, accessToken ,handleSubmit, register, submitForm, searchParams}
}

export default useLogin;