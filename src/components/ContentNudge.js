import React from "react"
import styled from "styled-components"

const Container = styled.div`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: #3c414b;
  border-radius: 12px;
  padding: 1em;
  text-align: center;
  width: 10em;
  height: 7em !important;
`
const Title = styled.h1`
  color: white;
  font-size: 48px;
  line-height: 0px;
`
const Description = styled.div`
  color: white;
`
class ContentNudge extends React.Component {
  render() {
    return (
      <Container>
        <Title>💡86%</Title>
        <Description>Of all users have opted for the top rate</Description>
      </Container>
    )
  }
}

export default ContentNudge
