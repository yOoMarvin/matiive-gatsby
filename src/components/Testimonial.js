import React from "react"
import styled from "styled-components"

const Container = styled.div`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: #3c414b;
  border-radius: 30px;
  padding: 1em;
  text-align: center;
  margin-bottom: 2em;
  margin-left: 2em;
  margin-right: 2em;
  width: 15em;
  text-align: justify;

  border: 8px solid #3c414b;
  -webkit-border-radius: 30px;
  -moz-border-radius: 30px;
  -webkit-box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const Avatar = styled.img``
const AvatarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
const Name = styled.h1`
  font-size: 21px;
  color: white;
  margin-left: 2em;
`
const Description = styled.p`
  color: white;
`
class Testimonial extends React.Component {
  render() {
    return (
      <Container>
        <AvatarContainer>
          <Avatar src={this.props.avatar} />
          <Name>{this.props.avatarName}</Name>
        </AvatarContainer>
        <Description>{this.props.description}</Description>
      </Container>
    )
  }
}

export default Testimonial
