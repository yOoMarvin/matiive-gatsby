import React from "react"
import styled from "styled-components"

import Header from "../components/Header"
import ProductInfo from "../components/ProductInfo"
import LiabilityOptions from "../components/LiabilityOptions"
import LiabilityData from "../components/LiabilityData"

const Page = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 15px;
  padding-left: 15px;
`
const Title = styled.h1`
  font-size: 36px;
  text-align: center;
  margin: 3em 0 1em 0;
`

class Liability extends React.Component {
  constructor() {
    super()
    this.state = {
      person: "family",
      living: "property",
    }
  }
  myCallback = dataFromChild => {
    this.setState(dataFromChild)
  }
  render() {
    return (
      <div>
        <Header />
        <Page>
          <ProductInfo
            title="Covered. For all cases."
            subtitle="Always on the safe side with the liability insurance from matiive."
            price="Starting at 3,50€ per month."
            about="Protects you when you accidentally harm a thing or person."
            info1="Up to € 50 million coverage "
            info2="Key loss included"
            info3="Worldwide protection"
            info4="Fast help with excellent support and customer service"
            image="/liability.png"
          />
          <div>
            <Title>
              Our private liability insurnace at a glance. <br />
              Excellent protection. Suitable for you.
            </Title>
            <LiabilityData callbackFromParent={this.myCallback} />
            <h4 style={{ textAlign: "center", marginBottom: "2em" }}>
              Based on your data, our algorithms will give a recommendation for
              your best coverage
            </h4>
            <LiabilityOptions userData={this.state} ref="liability-options" />
          </div>
        </Page>
      </div>
    )
  }
}

export default Liability
