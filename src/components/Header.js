import React from "react"
import styled from "styled-components"
import { redirectTo } from "@reach/router"

const Title = styled.h1`
  color: red;
  padding: 8px;
`

class Header extends React.Component {
  render() {
    return (
      <div>
        <Title>matiive insurance</Title>
      </div>
    )
  }
}

export default Header
