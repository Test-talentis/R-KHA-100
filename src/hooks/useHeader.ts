import { resetAuth } from "@store/Auth/authSlice";
import { useAppDispatch, useAppSelector } from "@store/hooks"


const useHeader = () => {
    const {accessToken, user, status, error} = useAppSelector(state => state.auth);
    const dispatch = useAppDispatch();

   const handelLogout = () => {
    dispatch(resetAuth());
   }

    return {accessToken, user, status, error, handelLogout}
}

export default useHeader;