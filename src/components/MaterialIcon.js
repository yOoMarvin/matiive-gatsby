import React from "react"

class MaterialIcon extends React.Component {
  render() {
    return (
      <span
        className="material-icons"
        style={{ fontSize: this.props.size, color: this.props.color }}
      >
        {this.props.icon}
      </span>
    )
  }
}

export default MaterialIcon
