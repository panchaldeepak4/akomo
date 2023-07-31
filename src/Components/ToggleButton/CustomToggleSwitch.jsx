import React,{ useState } from 'react'
import styled from 'styled-components';
//npm install styled-components

const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 30px;
  height: 17px;
//   width: 60px;
//   height: 34px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* Customize the appearance of the slider */
  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc; /* Default color for the switch background */
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 34px;

    &:before {
      position: absolute;
      content: '';
    //   height: 26px;
    //   width: 26px;
    height: 13px;
    width: 13px;
      left: 4px;
      bottom: 2px;
      background-color: #ffffff; /* Default color for the switch button */
      -webkit-transition: 0.4s;
      transition: 0.4s;
      border-radius: 50%;
    }
  }

  /* When the toggle is ON */
  input:checked + span {
    background-color: #77e38d; /* Change the background color when the switch is ON */
  }

  input:checked + span:before {
    transform: translateX(12px); /* Move the button to the right when the switch is ON */
  }
`;

const CustomToggleSwitch = () => {
    const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };
  return (
    <div style={{display:'flex',alignItems:'center', gap:'1rem',height:'1rem',width:'8rem' }}>
    <ToggleSwitch>
      <input type="checkbox" isActive={isActive} onChange={handleToggle} />
      <span></span>
    </ToggleSwitch>
    {isActive ? 'Active' : 'Inactive'}
    </div>
  )
}

export default CustomToggleSwitch