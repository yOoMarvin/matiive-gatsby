import React from "react"
import styled from "styled-components"

import Header from "../components/Header"
import ProductInfo from "../components/ProductInfo"

import CarOptions from "../components/CarOptions"

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

class Car extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Page>
          <ProductInfo
            title="Covered to stay mobile."
            subtitle="Always on the safe side with the car insurance from matiive."
            price="Starting at 7,50€ per month."
            about="Protects you and your car in any case."
            info1="24/7 help in case of damage "
            info2="Fast claims process"
            info3="Excellent network of partner garages"
            info4="High customer satisfaction"
            image="/car.png"
          />

          <div>
            <Title>
              Our car insurnace at a glance. <br />
              Excellent protection. Suitable for you.
            </Title>
            <CarOptions />
          </div>
        </Page>
      </div>
    )
  }
}

export default Car
