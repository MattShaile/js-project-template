import React from "react";

export default class Bar extends React.Component {

  render () {
    const {i} = this.props;

    return (
      <td>{i}</td>
    );
  }
}
