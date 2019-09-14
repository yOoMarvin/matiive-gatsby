import React from "react"
import styled from "styled-components"

import TarifOption from "./TarifOption"
import ContentNudge from "./ContentNudge"

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
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
        />
        <TarifOption
          image="/contents-comfort.png"
          title="Economy Class"
          subtitle="matiive basic"
          row1="Elementary damages"
          row2="Burglary and robbery"
          row3="Overvoltage damage"
          row4="Bicycle theft up to 500 €"
          price="9,70 €"
        />
        <TarifOption
          image="/contents-top.png"
          title="Economy Class"
          subtitle="matiive basic"
          row1="Elementary damages"
          row2="Burglary and robbery"
          row3="Overvoltage damage"
          row4="Bicycle theft up to 1000 €"
          row5="Costs for data recovery up to 2500 €"
          row6="Simple theft up to 2000 €"
          row7="Fraud in online banking up to 1000 €"
          price="14,20 €"
        />
        <ContentNudge />
      </Container>
    )
  }
}

export default ContentOptions
