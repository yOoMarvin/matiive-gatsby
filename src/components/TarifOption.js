import React from "react"
import styled from "styled-components"

import MaterialIcon from "../components/MaterialIcon"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  border-radius: 3px;
  border: 1px solid #c4c4c4;
  padding: 1em 0 1em 0;
`
const Title = styled.h3`
  line-height: 0;
  padding-bottom: 0;
  margin-bottom: 0;
`
const TopRow = styled.div`
  margin-bottom: 1em;
`
const DarkRow = styled.div`
  border-top: 1px solid #c4c4c4;
  border-bottom: 1px solid #c4c4c4;
  background-color: #f2f2f2;
  padding: 1em;
`
const LightRow = styled.div`
  padding: 1em;
`
const Price = styled.div`
  margin-top: 1em;
  font-weight: bold;
  font-size: 24px;
`
const Button = styled.button`
  background-color: #0c81f6;
  border-radius: 8px;
  padding: 50px;
  padding-top: 10px;
  padding-bottom: 10px;
  border: none;
  color: white;
  font-size: 14px;
  margin: 1em 1em 0em 1em;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  &:hover {
    cursor: pointer;
  }
`

class TarifOption extends React.Component {
  render() {
    return (
      <Container>
        <TopRow>
          <img src="/contents-basic.png" alt="contents basic" />
          <Title>Economy Class</Title>
          <p>matiive basic</p>
          <MaterialIcon icon="check_circle" size="30px" />
        </TopRow>
        <DarkRow>1000 €</DarkRow>
        <LightRow> 1000 €</LightRow>
        <DarkRow>
          1000 € <br /> but there might be a problem
        </DarkRow>
        <LightRow>-</LightRow>
        <DarkRow>-</DarkRow>
        <Price>7,50 €</Price>
        <Button>Finish now.</Button>
      </Container>
    )
  }
}

export default TarifOption
