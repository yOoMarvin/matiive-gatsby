import React from "react"
import styled from "styled-components"

const Container = styled.div`
  margin-bottom: 2em;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`
const Input = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 18px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  padding: 0 1em 1em 1em;
  margin: 1em 1em 0 1em;
`
const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 1em;
`
const Label = styled.span`
  margin-left: 3em;
`

class LiabilityData extends React.Component {
  constructor() {
    super()
    this.state = {
      person: "family",
      living: "property",
    }

    this.handlePersonChange = this.handlePersonChange.bind(this)
    this.handleLivingChange = this.handleLivingChange.bind(this)
  }

  handlePersonChange(event) {
    this.setState(
      {
        person: event.target.value,
      },
      () => {
        this.props.callbackFromParent(this.state)
      }
    )
  }

  handleLivingChange(event) {
    this.setState(
      {
        living: event.target.value,
      },
      () => {
        this.props.callbackFromParent(this.state)
      }
    )
  }

  render() {
    return (
      <Container>
        <Input>
          <h2>Family or Single?</h2>
          <Row>
            <input
              type="radio"
              value="family"
              checked={this.state.person === "family"}
              onChange={this.handlePersonChange}
            />
            <Label>Family</Label>
          </Row>

          <Row>
            <input
              type="radio"
              value="single"
              checked={this.state.person === "single"}
              onChange={this.handlePersonChange}
            />
            <Label>Single</Label>
          </Row>
        </Input>
        <Input>
          <h2>Rent or Property?</h2>
          <Row>
            <input
              type="radio"
              value="rent"
              checked={this.state.living === "rent"}
              onChange={this.handleLivingChange}
            />
            <Label>Rent</Label>
          </Row>

          <Row>
            <input
              type="radio"
              value="property"
              checked={this.state.living === "property"}
              onChange={this.handleLivingChange}
            />
            <Label>Property</Label>
          </Row>
        </Input>
      </Container>
    )
  }
}

export default LiabilityData
