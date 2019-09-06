import React from "react"
import styled from "styled-components"

import Header from "../components/Header"
import ProductInfo from "../components/ProductInfo"

class Contents extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <ProductInfo
          title="So you never have to worry about your favorite things again."
          subtitle="Always on the safe side with the contents insurance from matiive."
          price="Starting at 7,50€ per month."
          about="Dangers such as fire or a burst pipe can cause considerable harm to your belongings. Protect your property with matiive home insurance."
          info1="Damage caused by fire "
          info2="Damage due to burglary"
          info3="Damage caused by tap water"
          info4=" Individually expandable"
          image="/contents.png"
        />
      </div>
    )
  }
}

export default Contents
