import React from "react"
import styled from "styled-components"

import TarifOption from "./TarifOption"

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
  flex-wrap: wrap;
`

class CarOptions extends React.Component {
  render() {
    return (
      <Container>
        <TarifOption
          image="/contents-basic.png"
          title="Economy Class"
          subtitle="matiive basic"
          row1="€ 100 Mio. coverage"
          row2="Theft"
          price="17,50 €"
          linkparameter="option=contents-basic&display-nudge=true&nudge-option=false"
        />
        <TarifOption
          image="/contents-comfort.png"
          title="Business Class"
          subtitle="matiive comfort"
          row1="€ 100 Mio. coverage"
          row2="Theft"
          row3="Collision with animals"
          row4="Glass breakage"
          row5="Exchange of lock mechanism"
          price="21,60 €"
          linkparameter="option=contents-comfort&display-nudge=true&nudge-option=false"
        />

        <TarifOption
          image="/contents-top.png"
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
          linkparameter="option=contents-top&display-nudge=true&nudge-option=true"
        />
      </Container>
    )
  }
}

export default CarOptions
