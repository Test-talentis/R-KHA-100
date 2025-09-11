import { actGetCategory } from "@store/category/categorySlice";
import { useAppDispatch, useAppSelector } from "@store/hooks"
import { useEffect } from "react";

const useCategories = () => {
    const dispatch = useAppDispatch();
    const {category, status, error} = useAppSelector(state => state.categories); 

    useEffect(() => {
        const promise = dispatch(actGetCategory());

        return (() => {
            promise.abort();
        })
    },[dispatch])
    return {category, status, error};
}

export default useCategories