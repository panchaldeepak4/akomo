import React,{ useState } from 'react'
import style from './styles.module.css'

const RadioButton = () => {
    const [selectedValue, setSelectedValue] = useState(null);

    const handleChange = (event) => {
      setSelectedValue(event.target.value);
    };
  
  return (
    <>
    <div className={style.radio_container}>
     <label className={style.radio_label}>
        <input
          type="radio"
          value="option1"
          checked={selectedValue === "option1"}
          onChange={handleChange}
        />
        Private Videos
      </label>

      <label className={style.radio_label}>
        <input
          type="radio"
          value="option2"
          checked={selectedValue === "option2"}
          onChange={handleChange}
        />
        Public Videos
      </label>
      </div>
      {/* <div>
        Selected Value: {selectedValue}
      </div> */}
    </>
  )
}

export default RadioButton