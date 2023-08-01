import React,{ useState } from 'react'
import styles from './styles.module.css'
import { userRequest } from '../RequestMethod';
import { message } from "antd";

const EditCategoryModal = ({setShowEditCategoryModal,editingData,fetchData}) => {

  const [category, setCategory] = useState(editingData.categoryName);
                                              
  let newData = JSON.stringify({
    "categoryId" : editingData._id,
    "categoryName": category
  });


  const updateCategory = async (e) => {
    //  e.preventDefault();
   await userRequest.put("/api/category/updateCategory", newData)
      .then(() => {
        message.success("Category updated successfully");
        setShowEditCategoryModal(false);
        fetchData();
      })
      .catch((err) => {
        const errorMessage = err.response?.data?.message || "An error occurred";
        message.error(errorMessage);
      });
  };
 

    const handleClick=()=>{
        setShowEditCategoryModal(false);
    }

    // const handleChange = (e) => {    
    //   const { name, value } = e.target;
    //   setCategory(prevValues => ({
    //     ...prevValues,
    //     [e.target.name]: e.target.value
    //   }));
    // }

    

  return (
    <>
     <div className={styles.modal_container}>
        <div className={styles.modal_pic}>
        <img src='Images/icon_md.png'></img>
        <p>Edit Category</p>
        </div>  
         <label className={styles.modal_label}>Category Name</label>
          <input type='text' name='categoryName' placeholder='' value={category} 
          onChange={(e)=>setCategory(e.target.value)}
          className={styles.modal_input}
          ></input>
          <div className={styles.btn}>
            <button id={styles.cancel} onClick={()=>handleClick()}>Cancel</button>
            <button id={styles.update} onClick={()=>updateCategory()}>Update</button>
          </div>
    </div>
    </>
  )
  }

export default EditCategoryModal