import React from "react"
import styled from "styled-components"

const Container = styled.div`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: #0c81f6;
  border-radius: 30px;
  padding: 1em;
  text-align: center;
  margin-bottom: 2em;

  border: 8px solid #0c81f6;
  -webkit-border-radius: 30px;
  -moz-border-radius: 30px;
  -webkit-box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  &:after {
    content: " ";
    position: relative;
    width: 0;
    height: 0;
    left: 0.2em;
    top: 4em;
    border: 39px solid transparent;
    border-top-color: #0c81f6;
    border-bottom: 0;
  }
`

const Title = styled.h1`
  color: white;
  font-size: 2em;
  line-height: 0px;
`
const Description = styled.div`
  color: white;
`
class LiabilityNudge extends React.Component {
  render() {
    return (
      <Container>
        <Title>🎯 It's a match!</Title>
        <Description>
          Based on your information, <br />
          this is the best fare for you!
        </Description>
      </Container>
    )
  }
}

export default LiabilityNudge
