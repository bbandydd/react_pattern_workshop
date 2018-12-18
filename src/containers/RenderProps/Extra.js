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

export default useToggle;

