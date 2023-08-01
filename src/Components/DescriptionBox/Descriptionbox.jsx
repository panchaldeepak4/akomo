import React,{ useState } from 'react'
import styles from './styles.module.css'

const Descriptionbox = ({description,setDescription}) => {

    // const [description, setDescription] = useState('');

  const handleChange = (event) => {
    setDescription(event.target.value);
  };

  return (
    <>
     <div>
      <p className={styles.des_txt}>Video Description</p>
      <textarea
      className={styles.des_box}
        value={description}
        onChange={handleChange}
        placeholder="Write a brief description about the contents of the video"
        rows="4"
        cols="50"
      />
      <div>
        {/* <strong>Description:</strong> */}
        {/* <p>{description}</p> */}
      </div>
    </div>
  
    </>
  )
}

export default Descriptionbox