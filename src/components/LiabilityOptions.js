import React from "react"
import styled from "styled-components"

import TarifOption from "./TarifOption"

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

class LiabilityOptions extends React.Component {
  render() {
    return (
      <Container>
        <div>Services </div>
        <TarifOption />
        <TarifOption />
        <TarifOption />
      </Container>
    )
  }
}

export default LiabilityOptions
