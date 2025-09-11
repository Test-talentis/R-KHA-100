import img1 from "@assets/images/img-1.jpg";
import img2 from "@assets/images/img-2.jpg";

import styles from "./style.module.css";
import { Button, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Heading, Typographie } from "@components/ui";
const {
  hero_section,
  hero_left,
  hero_title,
  hero_desc,
  hero_right,
  hero_images,
  hero_img_left,
  hero_img_right,
  hero_left_isAnimated,
  hero_img_left_isAnimated,
  hero_left_right_isAnimated,
} = styles;
function HeroSection() {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  return (
    <Container>
      <div
        className={`d-flex align-items-center justify-content-between ${hero_section}`}>
        <div
          className={`${hero_left} ${isAnimated ? hero_left_isAnimated : ""}`}>
          <Heading title="Welcome" level={4}/>
          <Typographie
            propCss={hero_desc}
            text="Welcome, this is our website. You can find all gender clothes."
          />
          <Button
            variant="none"
            style={{ color: "#fff", backgroundColor: "#03346E" }}
            size="lg"
            className="mt-5">
            Shop Now
          </Button>
        </div>
        <div className={`${hero_right} `}>
          <div
            className={`${hero_images} d-flex justify-content-between gap-4`}>
            <img
              className={`${hero_img_left} ${
                isAnimated ? hero_img_left_isAnimated : ""
              }`}
              src={img1}
              alt=""
            />
            <img
              className={`${hero_img_right} ${
                isAnimated ? hero_left_right_isAnimated : ""
              } `}
              src={img2}
              alt=""
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default HeroSection;
