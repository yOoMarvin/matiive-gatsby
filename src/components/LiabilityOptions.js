import React from "react"
import styled from "styled-components"

import TarifOption from "./TarifOption"
import LiabilityNudge from "./LiabilityNudge"

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
  flex-wrap: wrap;
  padding: 1em;
`
const Nudge = styled.div`
  display: flex;
  flex-direction: column;
`
class LiabilityOptions extends React.Component {
  render() {
    console.log(this.props.userData)
    return (
      <Container>
        <Nudge>
          {this.props.userData.person === "single" ? <LiabilityNudge /> : null}
          <TarifOption
            image="/liability-basic.png"
            title="Economy Class"
            subtitle="matiive basic"
            row1="Insurance Sum € 5 Mio."
            row2="Loss of private keys - 20.000€"
            row3="Construction work - 50.000€"
            row4="Deposit payment abroad - 50.000€"
            price="3,50 €"
            linkparameter="option=liability-basic&nudge=true"
          />
        </Nudge>
        <Nudge>
          <TarifOption
            image="/liability-comfort.png"
            title="Business Class"
            subtitle="matiive comfort"
            row1="Insurance Sum € 15 Mio."
            row2="Loss of private keys - 30.000€"
            row3="Construction work - 100.000€"
            row4="Deposit payment abroad - 100.000€"
            row5="co-insured children - 15.000€"
            price="4,70 €"
            linkparameter="option=liability-comfort&nudge=true"
          />
        </Nudge>
        <Nudge>
          {this.props.userData.person === "family" ? <LiabilityNudge /> : null}
          <TarifOption
            image="/liability-top.png"
            title="First Class"
            subtitle="matiive top"
            row1="Insurance Sum € 50 Mio."
            row2="Loss of private keys - 50.000€"
            row3="Construction work - 150.000€"
            row4="Deposit payment abroad - 150.000€"
            row5="co-insured children - 50.000€"
            row6="Damage to foreign things - 30.000€"
            price="6,20 €"
            linkparameter="option=liability-top&nudge=true"
          />
        </Nudge>
      </Container>
    )
  }
}

export default LiabilityOptions
