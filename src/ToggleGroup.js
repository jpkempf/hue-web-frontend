import React  from 'react';

const ToggleGroup = ({ toggleGroup, id, data }) => {
  const currentState = data.state.all_on;
  const style = {
    display: 'block',
    width: '100%',
    backgroundColor: currentState ? 'yellow' : 'lightgrey',
    border: 0,
    padding: '1em',
  }

  return (
    <button style={style} onClick={() => toggleGroup(id)}>
      Turn { currentState ? 'off' : 'on' }
    </button>
  )
}

export default ToggleGroup;
