import React from "react"
import styled from "styled-components"

import Header from "../components/Header"
import ProductInfo from "../components/ProductInfo"

class Liability extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <ProductInfo
          title="Covered. For all cases."
          subtitle="Always on the safe side with the liability insurance from matiive."
          price="Starting at 3,50€ per month."
          about="Protects you when you accidentally harm a thing or person."
          info1="Up to € 50 million coverage "
          info2="Key loss included"
          info3="Worldwide protection"
          info4="Up to € 50 million coverage"
          image="liability.png"
        />
      </div>
    )
  }
}

export default Liability
