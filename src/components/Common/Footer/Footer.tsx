import { Col, Container, Row } from "react-bootstrap";
import { Heading, Input } from "@components/ui";
import { CategorieList, QuikLinks } from "@components/Common";
import { useAppSelector } from "@store/hooks";
import Envlope from "@assets/svg/envlope.svg?react";
const { footer, footer_left, footer_input, footer_right } = styles;
import styles from "./styles.module.css";
import quickLinks from "@data/quicklinks";
import Informations from "../Informations/Informations";
import contactInfoData from "@data/contactInfo";
import socialMediaData from "@data/socialMediaData";

const quiklinkData = quickLinks;

function Fotter() {
  const { category } = useAppSelector((state) => state.categories);

  return (
    <div className={footer}>
      <Container>
        <Row>
          <Col md={4} xs={12}>
            <div className={footer_left}>
              <Heading
                title="Sing up for our news letter 
                  to recieve speacial offeres"
                level={1}
              />
              <div className={footer_input}>
                <Input type="text" placeHolder="Enter your Email" />
                <Envlope title="envlope" />
              </div>
            </div>
          </Col>
          <Col md={7} xs={12}>
            <div className={footer_right}>
              <CategorieList categories={category} />
              <QuikLinks quiklinkData={quiklinkData} />
              <Informations
                contactInfoData={contactInfoData}
                socialMediaData={socialMediaData}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Fotter;
