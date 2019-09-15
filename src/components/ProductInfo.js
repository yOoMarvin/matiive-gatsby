import React from "react"
import styled from "styled-components"

import MaterialIcon from "../components/MaterialIcon"

const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-left: auto;
  margin-right: auto;
`
const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

const Title = styled.h1`
  font-size: 48px;
  text-align: center;
`
const SubTitle = styled.p`
  text-align: center;
  margin-bottom: 80px;
`
const Fat = styled.p`
  font-weight: bold;
  width: 420px;
`
const Left = styled.div`
  width: 50%;
`
const Right = styled.div`
  width: 30%;
`
const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 20px;
  margin-top: 30px;
`
const Row = styled.div`
  display: flex;
  flex-direct: row;
  align-items: center;
`
const Text = styled.p`
  margin-left: 20px;
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
  &:hover {
    cursor: pointer;
  }
`

class ProductInfo extends React.Component {
  render() {
    return (
      <Container>
        <Title>{this.props.title}</Title>
        <SubTitle>{this.props.subtitle}</SubTitle>
        <Content>
          <Left>
            <h1>Our promise.</h1>
            <Fat>{this.props.price}</Fat>
            <Fat>{this.props.about}</Fat>
            <DetailContainer>
              <Row>
                <MaterialIcon icon="check_circle_outline" size="30px" />
                <Text>{this.props.info1}</Text>
              </Row>
              <Row>
                <MaterialIcon icon="check_circle_outline" size="30px" />
                <Text>{this.props.info2} </Text>
              </Row>
              <Row>
                <MaterialIcon icon="check_circle_outline" size="30px" />
                <Text>{this.props.info3} </Text>
              </Row>
              <Row>
                <MaterialIcon icon="check_circle_outline" size="30px" />
                <Text>{this.props.info4}</Text>
              </Row>
            </DetailContainer>
            <Button>Check out the options!</Button>
          </Left>
          <Right>
            <img src={this.props.image} alt="Liability Insurance" />
          </Right>
        </Content>
      </Container>
    )
  }
}

export default ProductInfo
