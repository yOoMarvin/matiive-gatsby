import React from "react"
import styled from "styled-components"

import TarifOption from "./TarifOption"
import Testimonial from "./Testimonial"

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
  flex-wrap: wrap;
`
const Testimonials = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
`

class CarOptions extends React.Component {
  render() {
    return (
      <div>
        <Testimonials>
          <Testimonial
            description="I am so glad that I had the extra support. I stopped in the middle of a country road and I can tell you: Without the support of matiive, I would certainly still be there today!"
            avatar="/paul.png"
            avatarName="Paul, 32"
          />
          <Testimonial
            description="Sometimes it is just so annoying to discuss with workshops and to take care of everything. Thanks to the great partner garages everything went smoothly and I saved a lot of time and frustration"
            avatar="/lena.png"
            avatarName="Lena, 27"
          />
          <Testimonial
            description="My car was stolen when I was shopping. Since I live outside the city I am very dependent on the car. With the support of matiive I was able to quickly get a rental car and handle the entire story quickly"
            avatar="/luise.png"
            avatarName="Luise, 29"
          />
        </Testimonials>
        <Container>
          <TarifOption
            image="/liability-basic.png"
            title="Economy Class"
            subtitle="matiive basic"
            row1="€ 100 Mio. coverage"
            row2="Theft"
            price="17,50 €"
            linkparameter="option=car-basic&display-nudge=true&nudge-option=false"
          />
          <TarifOption
            image="/liability-comfort.png"
            title="Business Class"
            subtitle="matiive comfort"
            row1="€ 100 Mio. coverage"
            row2="Theft"
            row3="Collision with animals"
            row4="Glass breakage"
            row5="Exchange of lock mechanism"
            price="21,60 €"
            linkparameter="option=car-comfort&display-nudge=true&nudge-option=false"
          />

          <TarifOption
            image="/liability-top.png"
            title="First Class"
            subtitle="matiive top"
            row1="€ 100 Mio. coverage"
            row2="Theft"
            row3="Collision with animals"
            row4="Glass breakage"
            row5="Exchange of lock mechanism"
            row6="Elementary damages"
            row7="Coverage of additional parts"
            price="38,20 €"
            linkparameter="option=car-top&display-nudge=true&nudge-option=true"
          />
        </Container>
      </div>
    )
  }
}

export default CarOptions
