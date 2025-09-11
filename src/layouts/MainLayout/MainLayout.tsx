import { Footer, Header } from "@components/Common";

import { Outlet } from "react-router-dom";
import styles from "./style.module.css";
import { ToastList } from "@components/Feedback";


const { wrapper } = styles;

function MainLayout() {
 
  return (
    <>
      <Header />
      <div className={wrapper}>
        <Outlet />
      </div>
      <ToastList/>
      <Footer/>
    </>
  );
}

export default MainLayout;
