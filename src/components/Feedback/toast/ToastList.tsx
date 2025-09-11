import { AnimatePresence, motion } from "motion/react";

import { deleteToast } from "@store/toast/toastSlice";
import ToastItem from "./ToastItem";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import styles from "./style.module.css";

const { toastList } = styles;

function ToastList() {
  const { records } = useAppSelector((state) => state.toast);

  const dispatch = useAppDispatch();
  const handleDeleteToast = (id: string) => {
    dispatch(deleteToast(id));
  };

  const renderRecords = records?.map((item) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      layout>
      <ToastItem
        key={item.id}
        record={item}
        deleleteToast={handleDeleteToast}
      />
    </motion.div>
  ));
  return (
    <div className={toastList}>
      <AnimatePresence>{renderRecords}</AnimatePresence>
    </div>
  );
}

export default ToastList;
