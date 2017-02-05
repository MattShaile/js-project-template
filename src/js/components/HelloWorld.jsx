import React from "react";
import './styles.scss';

export default class HelloWorld extends React.Component {

  hello() {
    var obj = {};
    Object.assign(obj, { foo: "Hello World!" });

    return obj.foo;
  }

  render() {
    return (
      <div>Hello World!</div>
    )
  }
}
