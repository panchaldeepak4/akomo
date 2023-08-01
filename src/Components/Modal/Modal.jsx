import React,{ useState } from 'react'
import styles from './styles.module.css'
import { userRequest } from '../RequestMethod';
import { message } from "antd";

const Modal = ({setShowAddCategoryModal,fetchData}) => {
  const [category, setCategory] = useState("");

  let data = JSON.stringify({
    "categoryName": category
  });

  const saveCategory = async (e) => {
    //  e.preventDefault();
   await userRequest.post("/api/category/createCategory", data)
      .then(() => {
        message.success("Category added successfully");
        setShowAddCategoryModal(false);
        fetchData();
      })
      .catch((err) => {
        const errorMessage = err.response?.data?.message || "An error occurred";
        message.error(errorMessage);
      });
  };

    const handleClick=()=>{
        setShowAddCategoryModal(false);
    }

  return (
    <>
    <div className={styles.modal_container}>
        <div className={styles.modal_pic}>
        <img src='Images/icon_md.png'></img>
        <p>Add Category</p>
        </div>  
         <label className={styles.modal_label}>Category Name</label>
          <input type='text' name='categoryName' placeholder='' value={category} onChange={(e) => setCategory(e.target.value)}
          className={styles.modal_input}
          ></input>
          <div className={styles.btn}>
            <button id={styles.cancel} onClick={()=>handleClick()}>Cancel</button>
            <button id={styles.save} onClick={()=>saveCategory()}>Save</button>
          </div>
    </div>
    </>
  )
}

export default Modal