import React from "react"
import styled from "styled-components"

const Container = styled.div`
    background-repeat: no-repeat;
    width: 430px;
    height: 545px;
`
const Text = styled.div`
    width: 350px;
    padding: 15px;
    height: 95%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
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

class Overview extends React.Component {
    render() {
        return (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Container style={{ backgroundImage: "url(" + this.props.background + ")" }}>
                    <Text>
                        <h1 style={{ color: "white" }}>
                            {this.props.title}
                        </h1>
                        <p style={{ color: "white" }}>{this.props.text}</p>
                    </Text>
                </Container>
                <a href={this.props.link}><Button>Discover now!</Button></a>

            </div>

        )
    }
}

export default Overview
