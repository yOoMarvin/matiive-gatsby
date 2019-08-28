import React from "react"
import styled from "styled-components"

const MyHeader = styled.header`
  z-index: 5;
  padding-top: 16px;
  margin-bottom: 64px;
`
const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-left: auto;
  margin-right: auto;
`
const Left = styled.div`
  float: left;
`
const Title = styled.a`
  margin 0;
  line-hight: 16px;
  text-decoration: none;
  font-size: 1.5em;
  font-weight: bold;
  color: #3C414B;
`
const Right = styled.div`
  float: right;
  padding-top: 8px;
  margin-right: 10%;
`
const HeaderLink = styled.a`
  padding-right: 15px;
  padding-left: 15px;
  text-decoration: none;
`

class Header extends React.Component {
  render() {
    return (
      <MyHeader>
        <Container>
          <Left>
            <Title href="/">matiive</Title>
          </Left>
          <Right>
            <HeaderLink href="/liability">Liability</HeaderLink>
            <HeaderLink href="/contents">Contents</HeaderLink>
            <HeaderLink href="/bike">Bike</HeaderLink>
            <HeaderLink href="/cyber">Cyber</HeaderLink>
          </Right>
        </Container>
      </MyHeader>
    )
  }
}

export default Header
