import React from "react"
import styled from "styled-components"
import Modal from "react-modal"

import Header from "../components/Header"

const Content = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`
const Left = styled.div`
  display: flex;
  flex-direction: column;
`
const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  width: 20em;

  @media (max-width: 850px) {
    width: 15em;
  }
`
const Input = styled.input`
  border: none;
  border-bottom: 2px solid #727272;
  margin-top: 8px;
  padding: 5px 0px 5px;
`
const Title = styled.h1`
  font-size: 3em;
  text-align: center;
`
const Image = styled.img`
  @media (max-width: 850px) {
    display: none;
  }
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
const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;

  text-align: center;
`
const Emojis = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap-around;

  h1 {
    padding: 8px;
    font-size: 4.5em;
    &:hover {
      cursor: pointer;
    }
  }
`
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`

class Final extends React.Component {
  constructor() {
    super()

    this.state = {
      modalIsOpen: true,
      clicks: 0,
    }

    this.openModal = this.openModal.bind(this)
    this.afterOpenModal = this.afterOpenModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  openModal() {
    this.setState({ modalIsOpen: true })
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = "#f00"
  }

  closeModal() {
    this.setState({ modalIsOpen: false })
  }

  render() {
    return (
      <div>
        <Header />
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
        >
          <ModalContainer>
            <h2>How would you rate your experience so far?</h2>
            <Emojis>
              <h1 onClick={() => console.log("I'm sad")}>🙁</h1>
              <h1 onClick={() => console.log("I'm neutral")}>😐</h1>
              <h1 onClick={() => console.log("I'm happy")}>🙂</h1>
            </Emojis>
            <ButtonContainer>
              <Button onClick={this.closeModal}>close</Button>
              <Button onClick={() => console.log(this.props.location.search)}>
                Log that stuff!
              </Button>
            </ButtonContainer>
          </ModalContainer>
        </Modal>
        <Title>Thank you for your interest</Title>
        <Content>
          <Left>
            <p>
              Since we are not yet officially launched with our matiive
              insurance, everything is still a little in its infancy. We would
              like to thank you for your trust and let you know as soon as
              something new happens.
            </p>
            <p>
              Just let us know your email address and we'll send you everything
              new about matiive. No Spam Ever! Pinky Promise!
            </p>
            <form style={{ marginTop: "3em" }} action="/">
              <FormGroup>
                <label>Name:</label>
                <Input type="text" placeholder="John Doe" />
              </FormGroup>
              <FormGroup>
                <label>E-mail:</label>
                <Input type="text" placeholder="john@doe.com" />
              </FormGroup>
              <Button type="submit">Submit now!</Button>
            </form>
          </Left>
          <div>
            <Image src="/final.png" alt="confetti" />
          </div>
        </Content>
      </div>
    )
  }
}

export default Final
