import { HeroSection, ProductSection, InfoServices, BestSellerSection } from '@components/Common'
import { Container } from 'react-bootstrap' 
function HomePage() {

  return (
    <Container>
      <HeroSection/>
      <InfoServices/>
      <ProductSection/>
      <BestSellerSection/>
    </Container>
  )
}

export default HomePage