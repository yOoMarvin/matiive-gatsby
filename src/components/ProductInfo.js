import React from "react"
import styled from "styled-components"

import MaterialIcon from "../components/MaterialIcon"

const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-left: auto;
  margin-right: auto;
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
`
const Left = styled.div`
  float: left;
  margin-left: 10%;
`
const Right = styled.div`
  float: right;
  margin-right: 10%;
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

class ProductInfo extends React.Component {
  render() {
    return (
      <Container>
        <Title>{this.props.title}</Title>
        <SubTitle>{this.props.subtitle}</SubTitle>
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
        </Left>
        <Right>
          <img src={this.props.image} alt="Liability Insurance" />
        </Right>
      </Container>
    )
  }
}

export default ProductInfo
