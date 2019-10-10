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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const Left = styled.div``
const Title = styled.a`
  margin 0;
  line-hight: 16px;
  text-decoration: none;
  font-size: 1.5em;
  font-weight: bold;
  color: #3C414B;
`
const Right = styled.div`
  padding-top: 8px;
`
const HeaderLink = styled.a`
  padding-right: 15px;
  padding-left: 15px;
  text-decoration: none;
  &:hover {
    color: #3c414b;
  }
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
            <HeaderLink href="/car">Car</HeaderLink>
          </Right>
        </Container>
      </MyHeader>
    )
  }
}

export default Header
