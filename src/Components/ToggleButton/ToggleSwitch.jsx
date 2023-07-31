import React,{ useState } from 'react'
import 'react-toggle/style.css'; // Import the styles from the library
import Toggle from 'react-toggle';

const ToggleSwitch = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleSwitch = () => {
    setIsActive(!isActive);
  };
  return ( 
    <div style={{display:'flex' ,gap:'0.5rem'}}>
      <Toggle
        checked={isActive}
        onChange={toggleSwitch}
        icons={{
          checked: <span style={{ color: '#77e38d' }}>Active</span>,
          unchecked: <span style={{ color: 'grey' }}>Inactive</span>,
        }}
      />
      {isActive ? 'Active' : 'Inactive'}
    </div>
  )
}

export default ToggleSwitch
// npm install react-toggle