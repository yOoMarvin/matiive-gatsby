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
        <Container>
          <TarifOption
            image="/liability-basic.png"
            title="Economy Class"
            subtitle="matiive basic"
            row1="€ 100 Mio. coverage"
            row2="Theft"
            price="17,50 €"
            linkparameter="option=car-basic&nudge=false"
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
            linkparameter="option=car-comfort&nudge=false"
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
            linkparameter="option=car-top&nudge=false"
          />
        </Container>
      </div>
    )
  }
}

export default CarOptions
