import React,{ useState } from 'react'
import style from './styles.module.css'

const RadioButton = ({selectedValue, setSelectedValue}) => {
    
    
    const handleChange = (event) => {
      setSelectedValue(event.target.value);
    };
  
  return (
    <>
    <div className={style.radio_container}>
     {/* <label className={style.radio_label} > */}
     {/* <label className={`${style.radio_label} ${selectedValue === "option1" ? style.selected : ""}`}> */}
     <label className={selectedValue === "false" ? `${style.radio_label} ${style.selected}` : style.radio_label}>
        <input
          type="radio"
          value="false"
          checked={selectedValue === "false"}
          onChange={handleChange}
        />
        <div className={style.radio_button}><div className={style.radio_button_inner}></div></div>
        Private Videos
      </label>

      {/* <label className={style.radio_label}> */}
      <label className={selectedValue === "true" ? `${style.radio_label} ${style.selected}` : style.radio_label}>
        <input
          type="radio"
          value="true"
          checked={selectedValue === "true"}
          onChange={handleChange}
        />
        <div className={style.radio_button}><div className={style.radio_button_inner}></div></div>
        Public Videos
      </label>
      </div>
      
    </>
  )
}

export default RadioButton