import React from "react"
import styled from "styled-components"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import CookieConsent, { Cookies } from "react-cookie-consent"

import Header from "../components/Header"
import MaterialIcon from "../components/MaterialIcon"

const Content = styled.div`
  padding: 15px;
`
const Left = styled.div`
  float: left;
  width: 50%;
`
const Right = styled.div`
  float: right;
  margin-right: 10%;
`
const Title = styled.h1`
  font-size: 3em;
`
const Text = styled.p`
  font-size: 18px;
`
const DetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 20px;
  margin-top: 30px;
`
const DetailTextContainer = styled.div`
  margin-left: 10px;
`
const DetailTitle = styled.p`
  font-size: 14px;
  color: #3c414b;
  font-weight: bold;
  line-height: 0px;
`
const DetailText = styled.p`
  font-size: 12px;
  line-height: 8px;
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
  margin-top: 50px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

class Index extends React.Component {
  render() {
    return (
      <div>
        <CookieConsent
          location="bottom"
          buttonText="Okay"
          buttonStyle={{
            backgroundColor: "#0C81F6",
            color: "white",
            fontSize: "14px",
            borderRadius: "3px",
          }}
        >
          By using this website you agree that cookies are used to increase user
          experience <span role="img">🍪</span>
          <a href="/disclaimer">Find out more.</a>
        </CookieConsent>
        <Header />
        <Content>
          <Left>
            <Title>Insurance as you imagine it.</Title>
            <Text>
              You wonder why insurance must be so complicated? We too! Matiive
              is your first fully digital insurance that really makes your life
              easier!
            </Text>
            <Left>
              <DetailContainer>
                <MaterialIcon icon="assignment_turned_in" size="40px" />
                <DetailTextContainer>
                  <DetailTitle>Excellent coverage</DetailTitle>
                  <DetailText>Outstanding rated tarif options</DetailText>
                </DetailTextContainer>
              </DetailContainer>
              <DetailContainer>
                <MaterialIcon icon="account_balance_wallet" size="40px" />
                <DetailTextContainer>
                  <DetailTitle>High savings potential</DetailTitle>
                  <DetailText>Cheap fees</DetailText>
                </DetailTextContainer>
              </DetailContainer>
            </Left>
            <Right>
              <DetailContainer>
                <MaterialIcon icon="access_time" size="40px" />
                <DetailTextContainer>
                  <DetailTitle>Maximum time savings</DetailTitle>
                  <DetailText>100% digital services</DetailText>
                </DetailTextContainer>
              </DetailContainer>
              <DetailContainer>
                <MaterialIcon icon="account_balance" size="40px" />
                <DetailTextContainer>
                  <DetailTitle>Stable fees</DetailTitle>
                  <DetailText>Future proof calculation</DetailText>
                </DetailTextContainer>
              </DetailContainer>
            </Right>
            <OutboundLink href="/overview">
              <Button>Discover now!</Button>
            </OutboundLink>
          </Left>
          <Right>
            <img src={"titleimage.png"} alt="Title Image" />
          </Right>
        </Content>
      </div>
    )
  }
}

export default Index
