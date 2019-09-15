import React from "react"
import styled from "styled-components"

import TarifOption from "./TarifOption"
import ContentNudge from "./ContentNudge"

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
  flex-wrap: wrap;
`
const Nudge = styled.div`
  display: flex;
  flex-direction: column;
`

class ContentOptions extends React.Component {
  render() {
    return (
      <Container>
        <TarifOption
          image="/contents-basic.png"
          title="Economy Class"
          subtitle="matiive basic"
          row1="Elementary damages"
          row2="Burglary and robbery"
          price="7,50 €"
          linkparameter="option=contents-basic&nudge=false"
        />
        <TarifOption
          image="/contents-comfort.png"
          title="Business Class"
          subtitle="matiive comfort"
          row1="Elementary damages"
          row2="Burglary and robbery"
          row3="Overvoltage damage"
          row4="Bicycle theft up to 500 €"
          price="9,70 €"
          linkparameter="option=contents-comfort&nudge=false"
        />
        <Nudge>
          {
            //<ContentNudge />
          }

          <TarifOption
            image="/contents-top.png"
            title="First Class"
            subtitle="matiive top"
            row1="Elementary damages"
            row2="Burglary and robbery"
            row3="Overvoltage damage"
            row4="Bicycle theft up to 1000 €"
            row5="Costs for data recovery up to 2500 €"
            row6="Simple theft up to 2000 €"
            row7="Fraud in online banking up to 1000 €"
            price="14,20 €"
            linkparameter="option=contents-top&nudge=false"
          />
        </Nudge>
      </Container>
    )
  }
}

export default ContentOptions
