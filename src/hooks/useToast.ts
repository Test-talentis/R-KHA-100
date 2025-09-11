import { useAppDispatch } from "@store/hooks";
import { deleteToast, stopDelayapperance } from "@store/toast/toastSlice";
import { useEffect, useState } from "react";

type TToast = {
  id?: string,
  delayapperance?: boolean
}

const useToast = ({id, delayapperance}:TToast) => {
  const dispatch = useAppDispatch();
  const [progressBarIndecator, setProgressBarIndecator] = useState(0);
  const [pauseProgressBarIndecator, setPausProgressBarIndecator] = useState(false);


  const progressBarScale = 100;
  const duration = 4000;
  const intervalTime = duration / progressBarScale;

  const pauseProgressBarIndecatorHandler = () => {
    setPausProgressBarIndecator(prev => !prev);
  }

  // Start Timer 
  useEffect(() => {
    if(delayapperance) return;
    const idInterval = setInterval(() => {
      setProgressBarIndecator((prev) => {
        if (prev <= progressBarScale && !pauseProgressBarIndecator) {
          return prev + 1;
        }
        return prev;
      });
    }, intervalTime);

    return () => clearInterval(idInterval);
  }, [intervalTime, delayapperance, pauseProgressBarIndecator]);

  // close Toas when the progresse Bar 100%
  useEffect(() => {
    if(progressBarIndecator === progressBarScale) {
        dispatch(deleteToast(id))
    }
  },[progressBarIndecator, dispatch, id])

  useEffect(() => {
    if(delayapperance) {
      const setTimer = setTimeout(() => {
        dispatch(stopDelayapperance(id))
      }, 1000);

      return () => clearTimeout(setTimer);
    }
  },[delayapperance, id, dispatch])

  return {progressBarIndecator, intervalTime, pauseProgressBarIndecatorHandler}
};

export default useToast;
