import React from "react";

import Bar from "./Bar";

export default class Foo extends React.Component {

  render () {
    const {i} = this.props;

    return (
      <tr>
        <Bar i={i} key="0" />
        <Bar i={i} key="1" />
        <Bar i={i} key="2" />
        <Bar i={i} key="3" />
        <Bar i={i} key="4" />
        <Bar i={i} key="5" />
        <Bar i={i} key="6" />
        <Bar i={i} key="7" />
        <Bar i={i} key="8" />
        <Bar i={i} key="9" />
      </tr>
    );
  }
}
