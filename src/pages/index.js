import React from "react"
import styled from "styled-components"

import Header from "../components/Header"

const Content = styled.div`
  padding: 15px;
`
const Left = styled.div`
  float: left;
  width: 50%;
`
const Right = styled.div`
  float: right;
  margin-right: 10%;
`
const Title = styled.h1`
  font-size: 3em;
`
const Text = styled.p`
  font-size: 18px;
`
const TitleImage = styled.img`
  border-radius: 13px;
  width: 440px;
`

class Index extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Content>
          <Left>
            <Title>Insurance as you imagine it.</Title>
            <Text>
              You wonder why insurance must be so complicated? We too! Matiive
              is your first fully digital insurance that really makes your life
              easier!
            </Text>
          </Left>
          <Right>
            <TitleImage src={"titleimage.png"} alt="Title Image" />
          </Right>
        </Content>
      </div>
    )
  }
}

export default Index
