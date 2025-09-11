
import { TSocialMedia } from "@types";
import { Link } from "react-router-dom";

function SocialMedia({ href, alt, src }: TSocialMedia) {
  return (
    <Link to={href} className="me-3">
      <img src={src} alt={alt} />
    </Link>
  );
}

export default SocialMedia;
