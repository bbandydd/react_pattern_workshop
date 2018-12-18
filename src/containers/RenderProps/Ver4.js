import { Component } from 'react';

export default class Ver4 extends Component {
  state = { on: false }

  toggle = () => {
    this.setState(
      ({ on }) => ({ on: !on })
    )
  }

  render() {
    const { on } = this.state;

    return this.props.children && this.props.children({
      on,
      toggle: this.toggle
     });
  }
}
