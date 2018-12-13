import { useState } from 'react';

const useToggle = () => {
  const [state, setState] = useState({
    on: false
  })

  const toggle = () =>
    setState({ on: !state.on })

  return {
    on: state.on,
    toggle: toggle,
  };
}


const Extra = ({ children, ...props }) => {
  console.log(children, props)
  return children(useToggle(props));
}

export default Extra;

export { useToggle };

