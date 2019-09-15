import React from "react"
import styled from "styled-components"

import Header from "../components/Header"
import ProductInfo from "../components/ProductInfo"
import ContentOptions from "../components/ContentOptions"

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

class Contents extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Page>
          <ProductInfo
            title="Never worry about your favorite things."
            subtitle="Always on the safe side with the contents insurance from matiive."
            price="Starting at 7,50€ per month."
            about="Protects all your favorite stuff."
            info1="Damage caused by fire "
            info2="Damage due to burglary"
            info3="Damage caused by tap water"
            info4=" Individually expandable"
            image="/contents.png"
          />

          <div>
            <Title>
              Our contents insurnace at a glance. <br />
              Excellent protection. Suitable for you.
            </Title>
            <ContentOptions />
          </div>
        </Page>
      </div>
    )
  }
}

export default Contents
