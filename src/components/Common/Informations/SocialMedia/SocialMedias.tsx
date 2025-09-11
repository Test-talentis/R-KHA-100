
import { TSocialMedia } from "@types";
import Castumlink from "../../Castumlink/Castumlink";
import SocialMedia from "./SocialMedia";

type TSocialMediaProps = {
  socialMediaProps: TSocialMedia[];
};

function SocialMedias({ socialMediaProps }: TSocialMediaProps) {
  return (
    <Castumlink
      data={socialMediaProps}
      renderData={(item) => <SocialMedia key={item.id} {...item} />}
    />
  );
}

export default SocialMedias;
