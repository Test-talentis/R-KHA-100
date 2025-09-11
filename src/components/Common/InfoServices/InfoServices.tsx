
import InfoService from "./InfoService/InfoService";
import styles from "./style.module.css";
import serviceData from "@data/serviceData";



function InfoServices() {
  
  return (
    <div className="d-flex align-items-center justify-content-around pt-5 pb-5 mt-5 flex-wrap">
      <InfoService data={serviceData} />
    </div>
  )
}

export default InfoServices