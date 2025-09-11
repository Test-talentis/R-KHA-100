import error from "@assets/Lottie/error.json";
import firstLoading from "@assets/Lottie/firstLoading.json";
import loading from '@assets/Lottie/loading.json';
import notFound from "@assets/Lottie/noteFound.json";
import shopCart from "@assets/Lottie/shop-cart.json";
import shopCartEmpty from "@assets/Lottie/shopCartEmpty.json";
import success from "@assets/Lottie/success.json";
import Lottie from 'lottie-react';

const lottieFilMap = {
    error,
    firstLoading,
    loading,
    notFound,
    shopCart,
    shopCartEmpty,
    success
}

type TLottieHandlerProps = {
    type: keyof typeof lottieFilMap;
    message?: string
}


function LottieHandler({type, message}: TLottieHandlerProps) {
  const lottie = lottieFilMap[type];
  const messageStyle = type === "error" ? {fontSize:"19px", color:"red"} : {fontSize:"19px"} 
  return (
    <div className='d-flex flex-column align-items-center'>
        <Lottie animationData={lottie} style={{width:"200px",  marginBottom:"10px" }} />
        {message && <h3 style={messageStyle}>{message}</h3>}
    </div>
  )
}

export default LottieHandler