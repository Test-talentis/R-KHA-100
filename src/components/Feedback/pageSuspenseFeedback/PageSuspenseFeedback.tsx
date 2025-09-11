import React, {Suspense} from "react"
import LottieHandler from "../LottieHandler/LottieHandler"

type TPageSuspenseFeedback = {
    children: React.ReactNode
}

function PageSuspenseFeedback({children}: TPageSuspenseFeedback) {
  return (
    <Suspense fallback={<LottieHandler type="loading" message="Loading..."/>}>
      {children}
    </Suspense>
  )
}

export default PageSuspenseFeedback