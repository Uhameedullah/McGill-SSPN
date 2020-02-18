import React from "react"
import { ReactTypeformEmbed } from "react-typeform-embed"
import theme from "@styles/theme"
import styled from "styled-components"

const buttonStyles = {
  fontSize: "18px",
  textAlign: "center",
  color: theme.color.white.regular,
  outline: "none",
  padding: "12px 60px",
  boxShadow: "2px 5px 10px rgba(0,0,0,.1)",
  backgroundColor: theme.color.primary,
  borderRadius: "6px",
  letterSpacing: "1.5px",
}

class TypeformStaff extends React.Component {
  constructor(props) {
    super(props)
    this.openForm = this.openForm.bind(this)
  }

  openForm() {
    this.typeformEmbed.typeform.open()
  }

  render() {
    return (
      <StyledPopup className="TypeformStaff">
        <ReactTypeformEmbed
          popup
          autoOpen={false}
          url="https://sspn.typeform.com/to/mklEeR"
          hideHeaders
          hideFooter
          buttonText="Go!"
          style={{ top: 100 }}
          ref={tf => {
            this.typeformEmbed = tf
          }}
        />
        <button className="btn" onClick={this.openForm} style={buttonStyles}>
          Staff Registration
        </button>
      </StyledPopup>
    )
  }
}

export default TypeformStaff

const StyledPopup = styled.div`
  padding-left: 5%;
  padding-right: 5%;
`