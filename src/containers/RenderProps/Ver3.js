import React from 'react';

export default class Ver3 extends React.Component {
  state = { on: false }

  toggle = () => {
    this.setState(
      ({ on }) => ({ on: !on })
    )
  }

  render() {
    const { on } = this.state;

    return (
      this.props.renderToggle({
        on,
        toggle: this.toggle
      })
    );
  }
}
