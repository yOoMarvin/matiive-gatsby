import React from "react"
import styled from "styled-components"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import MaterialIcon from "../components/MaterialIcon"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  border-radius: 3px;
  border: 2px solid #c4c4c4;
  padding: 1em 1em 1.5em 1em;
  width: 22em;
  margin-bottom: 3em;

  @media (max-width: 440px) {
    width: 15em;
  }
`
const Title = styled.h3`
  line-height: 0;
  padding-bottom: 0;
  margin-bottom: 0;
`
const Description = styled.div`
  margin-left: 1em;
`
const TopRow = styled.div``
const DarkRow = styled.div`
  border-top: 1px solid #c4c4c4;
  border-bottom: 1px solid #c4c4c4;
  background-color: #f2f2f2;
  padding: 1em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`
const LightRow = styled.div`
  padding: 1em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`
const Price = styled.div`
  margin-top: 1em;
  font-weight: bold;
  font-size: 24px;
  display: flex;
  flex-direction: column;
  text-align: center;
  bottom: 0;
`
const Button = styled.button`
  background-color: #0c81f6;
  border-radius: 8px;
  padding: 50px;
  padding-top: 10px;
  padding-bottom: 10px;
  border: none;
  color: white;
  font-size: 14px;
  margin: 1em 1em 0em 1em;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  &:hover {
    cursor: pointer;
  }
`

class TarifOption extends React.Component {
  render() {
    return (
      <Container>
        <TopRow>
          <img src={this.props.image} alt="option" />
          <Title>{this.props.title}</Title>
          <p>{this.props.subtitle}</p>
        </TopRow>

        {this.props.row1 ? (
          <LightRow>
            <MaterialIcon icon="check" size="20px" color="#0C81F6" />
            <Description>{this.props.row1}</Description>
          </LightRow>
        ) : (
          <LightRow>
            <MaterialIcon icon="check" size="20px" color="white" />
            <Description> </Description>
          </LightRow>
        )}

        {this.props.row2 ? (
          <LightRow>
            <MaterialIcon icon="check" size="20px" color="#0C81F6" />
            <Description>{this.props.row2}</Description>
          </LightRow>
        ) : (
          <LightRow>
            <MaterialIcon icon="check" size="20px" color="white" />
            <Description> </Description>
          </LightRow>
        )}

        {this.props.row3 ? (
          <LightRow>
            <MaterialIcon icon="check" size="20px" color="#0C81F6" />
            <Description>{this.props.row3}</Description>
          </LightRow>
        ) : (
          <LightRow>
            <MaterialIcon icon="check" size="20px" color="white" />
            <Description> </Description>
          </LightRow>
        )}

        {this.props.row4 ? (
          <LightRow>
            <MaterialIcon icon="check" size="20px" color="#0C81F6" />
            <Description>{this.props.row4}</Description>
          </LightRow>
        ) : (
          <LightRow>
            <MaterialIcon icon="check" size="20px" color="white" />
            <Description> </Description>
          </LightRow>
        )}

        {this.props.row5 ? (
          <LightRow>
            <MaterialIcon icon="check" size="20px" color="#0C81F6" />
            <Description>{this.props.row5}</Description>
          </LightRow>
        ) : (
          <LightRow>
            <MaterialIcon icon="check" size="20px" color="white" />
            <Description> </Description>
          </LightRow>
        )}

        {this.props.row6 ? (
          <LightRow>
            <MaterialIcon icon="check" size="20px" color="#0C81F6" />
            <Description>{this.props.row6}</Description>
          </LightRow>
        ) : (
          <LightRow>
            <MaterialIcon icon="check" size="20px" color="white" />
            <Description> </Description>
          </LightRow>
        )}

        {this.props.row7 ? (
          <LightRow>
            <MaterialIcon icon="check" size="20px" color="#0C81F6" />
            <Description>{this.props.row7}</Description>
          </LightRow>
        ) : (
          <LightRow>
            <MaterialIcon icon="check" size="20px" color="white" />
            <Description> </Description>
          </LightRow>
        )}

        <Price>
          {this.props.price} <span style={{ fontSize: "10px" }}>per month</span>
        </Price>
        <OutboundLink href={"/final?" + this.props.linkparameter}>
          <Button>Finish now</Button>
        </OutboundLink>
      </Container>
    )
  }
}

export default TarifOption
