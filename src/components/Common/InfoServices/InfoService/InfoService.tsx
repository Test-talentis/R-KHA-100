import React from "react";
import styles from "./style.module.css";
import Heading from "@components/ui/Heading/Heading";
import { Typographie } from "@components/ui";
import { TInfoService } from "@types";

const { info_service } = styles;

type TInfoServiceProps = {
  data: TInfoService[];
};

function InfoService({ data }: TInfoServiceProps) {
  const displayServices = data.map((item) => {
    const { iconService, subTitle, title } = item;
    return (
      <div className="d-flex align-items-center gap-3 mb-3">
       <img src={iconService} alt={title}/>
        <div className="">
          <Heading title={title} level={5} />
          <Typographie text={subTitle} style={{ color: "#ADADAD" }} />
        </div>
      </div>
    );
  });
  return <>{displayServices}</>;
}

export default InfoService;
