import { useCallback, useEffect, useState } from "react";

const useAnimated = () => {
    const [isAnimated, setIsAnimated] = useState(false);
    useEffect(() => {
        const debounce = setTimeout(() => {
          setIsAnimated(true);
        }, 500);
    
        return () => {
          clearTimeout(debounce);
        };
      }, [isAnimated]);

      const handelAnimation = useCallback(() => {
        setIsAnimated(false);
      }, []);

      return {isAnimated, handelAnimation}
}

export default useAnimated