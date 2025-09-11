
import check from "@assets/images/icons/check.png";
import delivery from "@assets/images/icons/delivery-box.png";
import wallet from "@assets/images/icons/wallet.png";
import { TInfoService } from "@types";

 

const infoServices: TInfoService[] = [
    {
        iconService : delivery,
        title: "Standard shiping",
        subTitle: "Free shiping"
    },
    {
        iconService : check,
        title: "Special discounts",
        subTitle: "Guarantad saving"
    },
    {
        iconService : wallet,
        title: "Buyers protection",
        subTitle: "Secure payments"
    }
]

export default infoServices