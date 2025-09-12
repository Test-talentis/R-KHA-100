import { List } from '@components/ui'
import { TContactInfo } from '@types'


import Phone from "@assets/svg/phone.svg?react";
import Email from "@assets/svg/envlope.svg?react";

function ContactInfo({email, phone}: TContactInfo) {
  //ddjhdjhlkjdkdjmizojzihzokjekjekjekjekeddkdkdkkddkdkdkddkdkfkfkfkfkffkfkdfdfdffddfdfsjjsjsjslksksksssksjkhshsjkkddssssss
  return (
    <ul>
        <List title={phone}  icon={<Phone title='phone'/>}/>
        <List title={email} icon={<Email title='email'/>} />
    </ul>
  )
}

export default ContactInfo