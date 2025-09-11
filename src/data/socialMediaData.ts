import facebook from "@assets/images/icons/facebook.png";
import insta from "@assets/images/icons/instagram.png";
import twitter from "@assets/images/icons/twitter.png";

type TSocialMedia = {
  id: number;
  href: string;
  src: string;
  alt: string;
};

const socialMedia: TSocialMedia[] = [
  { id: 1, href: "https://facebook.com", src: facebook, alt: "Facebook" },
  { id: 2, href: "https://instagram.com", src: insta, alt: "Instagram" },
  { id: 3, href: "https://twitter.com", src: twitter, alt: "Twitter" },
];

export default socialMedia;
