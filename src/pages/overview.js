import React from "react"
import styled from "styled-components"

import Header from "../components/Header"
import OverviewOption from "../components/OverviewOption"

const Content = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

class Overview extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Content>
          <OverviewOption
            background="/liability-dark.png"
            link="/liability"
            title="Liability"
            text="Always on the safe side with the liability insurance from matiive. Protects you when you accidentally harm a thing or person."
          />
          <OverviewOption
            background="/contents-dark.png"
            link="/contents"
            title="Contents"
            text="Dangers such as fire or a burst pipe can cause considerable harm to your belongings. Protect your property with matiive home insurance."
          />
        </Content>
      </div>
    )
  }
}

export default Overview
