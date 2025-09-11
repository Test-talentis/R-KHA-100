import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { singUpSchema, singUpType } from "@validation/SingUpSchema";
import { SubmitHandler, useForm } from "react-hook-form";
import useEmailAvailablCheck from "./useEmailAvailabalCheck";
import { actRegister } from "@store/Auth/authSlice";
import { useNavigate } from "react-router-dom";

const useRegister = () => {
  const dsipatch = useAppDispatch();
  const navigate = useNavigate();
  const { user, accessToken, status, error } = useAppSelector(
    (state) => state.auth
  );
  const {
    statusAvailablEmail,
    entredEmail,
    checkEmailAvailable,
    resetCheckEmailAvailable,
  } = useEmailAvailablCheck();
  
  const {
    handleSubmit,
    register,
    trigger,
    getFieldState,
    formState: { errors },
  } = useForm<singUpType>({
    resolver: zodResolver(singUpSchema),
    mode: "onBlur",
  });


  

  const onBlurCheckEmailAvailable = async (
    e: React.FocusEvent<HTMLInputElement>
  ) => {
    await trigger("email");
    const { isDirty, invalid } = getFieldState("email");
    console.log(
      `isDirty: ${isDirty}  / invalid: ${invalid} / entredEmail: ${
        entredEmail !== e.target.value
      }`
    );
    if (isDirty && !invalid && entredEmail !== e.target.value) {
      checkEmailAvailable(e.target.value);
    }
    if (isDirty && invalid && entredEmail) {
      resetCheckEmailAvailable();
    }
  };

  const submitFormRegister: SubmitHandler<singUpType> = async (data) => {
    dsipatch(actRegister(data))
      .unwrap()
      .then(() => {
        navigate("/login?message=account_created");
      })
      .catch((error) => console.log(error));
  };

  return {
    user,
    accessToken,
    status,
    error,
    register,
    handleSubmit,
    errors,
    statusAvailablEmail,
    entredEmail,
    onBlurCheckEmailAvailable,
    submitFormRegister
  };
};

export default useRegister;
