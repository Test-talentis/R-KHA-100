import { TToast } from "@types";
import styles from "./style.module.css";
import useToast from "@hooks/useToast";

const { toastItem } = styles;

type TToastItemProps = {
  record: TToast;
  deleleteToast: (id: string) => void;
};

function ToastItem({ record, deleleteToast }: TToastItemProps) {
  const {
    progressBarIndecator,
    intervalTime,
    pauseProgressBarIndecatorHandler,
  } = useToast({ id: record.id, delayapperance: record.delayApperance });

  if (record.delayApperance) return;

  return (
    <div
      className={`${toastItem} alert alert-${record.type}`}
      onMouseEnter={pauseProgressBarIndecatorHandler}
      onMouseLeave={pauseProgressBarIndecatorHandler}>
      <h5>{record.title ? record.title : record.type}</h5>
      <p>{record.message}</p>
      <button
        type="button"
        className="btn-close"
        onClick={() => deleleteToast(record.id as string)}></button>
      <span
        className="placeholder "
        style={{
          width: `${progressBarIndecator}%`,
          transition: `width ${intervalTime} linear`,
        }}></span>
    </div>
  );
}

export default ToastItem;
