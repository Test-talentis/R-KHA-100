
import { TQuickLinks } from '@types'
import QuikLink from './QuikLink'
import { Heading } from '@components/ui'


type TQuikLinkProps = {
    quiklinkData: TQuickLinks[]
}

function QuikLinks({quiklinkData}: TQuikLinkProps) {
  const displayQuikLinks = quiklinkData.map(quiklink => {
    return <QuikLink key={quiklink.text} {...quiklink}/>
  })
   
  return <div>
    <Heading title='Quiklinks' level={5}/>
   <ul>
   {displayQuikLinks}
   </ul>
  </div>
}

export default QuikLinks