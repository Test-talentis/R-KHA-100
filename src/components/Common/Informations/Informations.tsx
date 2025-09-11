
import { Heading } from '@components/ui';
import { TContactInfo, TSocialMedia } from '@types';
import ContactInfo from './ContactInfo';
import SocialMedias from './SocialMedia/SocialMedias';



type TInformationProps = {
    contactInfoData : TContactInfo,
    socialMediaData: TSocialMedia[]

}

function Informations({contactInfoData, socialMediaData} : TInformationProps) {
  return (
    <div>
        <Heading title='Information' level={5}/>
        <ContactInfo {...contactInfoData}/>
        <SocialMedias socialMediaProps={socialMediaData} />
    </div>
  )
}

export default Informations