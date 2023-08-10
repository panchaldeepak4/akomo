import React,{ useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
import Search from '../../Components/Search/Search'
import styles from './styles.module.css'
import UploadVido from '../../Components/Upload/UploadVido'
import UploadThumbnail from '../../Components/Upload/UploadThumbnail'
import DescriptionBox from '../../Components/DescriptionBox/Descriptionbox' 
import { userRequest } from '../../Components/RequestMethod'
import { message } from 'antd'


const VMUploadVideo = () => {
    const navigate = useNavigate();
    const [videoURL,setVideoURL] = useState("");
    const [thumbnailURL,setThumbnailURL] = useState("");
    const [description, setDescription] = useState("");
    const [place ,setPlace] = useState('');
    const [category,setCategory] = useState('');
    const [tag,setTag] = useState('');

    ////////////////////////////////////////////////API to Uplaod video

    let data = JSON.stringify({
      "userId" : "64c21257746b8089001fe84a",
      "videoUrl" : videoURL,
      "url" : thumbnailURL,
      "description" : description,
      "location" : place,
      "categoryId" : category,
      "tags" : tag,
      
    })
    
    const publish = async(e) =>{
      if (!category) {
        message.error("Please select a category before publishing.");
        return; // Stop execution
      }
      if (!thumbnailURL) {
        message.error("Please upload a thumbnail before publishing.");
        return; // Stop execution
      }

      await userRequest.put("/admin/post/createOrUpdate",data)
      .then(()=>{
        message.success("Data published successfully");
        navigate('/videoManagement');
      })
      .catch((err)=>{
        const errorMessage = err.response?.data?.message || "An error occurred" ;
        message.error(errorMessage);
      });
    }
    

  ///////////////////////////////////////////////////////////////Only to fetch category Id
  const [user,setUser] = useState('');

  const fetchData = async () => {
    await userRequest.get("/api/category/getAllCategory?page=1&limit=10&search")
      .then((response) => {
        const result = response.data.data;
        setUser(result);
      // message.success("data fetched successfully");
      })
      .catch((err) => {
        const errorMessage = err.response?.data?.message || "An error occurred";
        message.error(errorMessage);
      });
  };

  useEffect(()=>{
    fetchData()
},[]);
///////////////////////////////////////////////////////////////////////////////////////

  return (
    <>
                 
     <div className={styles.vmuv_right}>
      {/*<Search />                    Search as component used here  */}

      <div className={styles.header}>
              <div className={styles.header_left}>
              Video Management &gt; upload video
              </div>

              <div className={styles.header_right}>
              <button id={styles.btn_back} onClick={()=>navigate('/videoManagement')}>Back</button>
              <button id={styles.btn_publish} onClick={()=>publish()}>Publish</button>
              </div>
        </div>
         
        <div className={styles.uploadV_main}>
      <div className={styles.uploadV_body}> 
      
      
       <div className={styles.uploadV_video}>
      <UploadVido videoURL={videoURL} setVideoURL={setVideoURL}/>
      <UploadThumbnail thumbnailURL={thumbnailURL} setThumbnailURL={setThumbnailURL}/>
      
      </div>

       <DescriptionBox description={description} setDescription={setDescription}/>

       <div className={styles.form_row1}>
       <div className={styles.form_element}>
          <label className={styles.form_label}>Places</label>
          <input type='text' className={styles.form_input} value={place} 
          onChange={(e)=>setPlace(e.target.value)}></input>
        </div>

        {/* <div className={styles.form_element}>
          <label className={styles.form_label}>Category</label>
          <input type='text' className={styles.form_input} ></input>
        </div> */}
        <div className={styles.form_element}>
          <label className={styles.form_label}>Category</label>
          <select className={styles.form_input} value={category}
          onChange={(e)=>setCategory(e.target.value)}>
            <option value=""></option>
            {user.length > 0 ? (
            user.map((userData)=>(
              <option  key={userData._id} value={userData._id}>{userData.categoryName}</option>   
            ))) : ([])
            }
          </select>
        </div>


        <div className={styles.form_element}>
          <label className={styles.form_label}>Tags</label>
          <input type='text' className={styles.form_input} value={tag}
          onChange={(e)=>setTag(e.target.value)}></input>
        </div>
        </div>

        

      </div>
      </div>


      
     </div>
    
    </>
  )
}

export default VMUploadVideo