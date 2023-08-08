import React,{ useState, useEffect } from 'react'
import styles from './styles.module.css'
import { useNavigate } from 'react-router-dom'
import Search from '../../Components/Search/Search'
import UploadVido from '../../Components/Upload/UploadVido'
import UploadThumbnail from '../../Components/Upload/UploadThumbnail'
import DescriptionBox from '../../Components/DescriptionBox/Descriptionbox'
import RadioButton from '../../Components/RadioButton/RadioButton'
import { userRequest } from '../../Components/RequestMethod'
import { message } from 'antd'

const UploadVideo = () => {
  const navigate = useNavigate();
  const [videoURL,setVideoURL] = useState("");
  const [thumbnailURL,setThumbnailURL] = useState("");
  const [description, setDescription] = useState("");
  const [place ,setPlace] = useState('');
  const [category,setCategory] = useState('');
  const [tag,setTag] = useState('');
  const [selectedValue, setSelectedValue] = useState(null);
  //console.log(category)

  let data = JSON.stringify({
    "userId" : "64c21257746b8089001fe84a",
    "videoUrl" : videoURL,
    "url" : thumbnailURL,
    "description" : description,
    "location" : place,
    "categoryId" : category,
    "tags" : tag,
    "isPublic" : selectedValue,
  })
  
  const publish = async(e) =>{
    await userRequest.post("/admin/post/createOrUpdate",data)
    .then(()=>{
      message.success("Data published successfully");
      navigate('/userManagement/videos');
    })
    .catch((err)=>{
      const errorMessage = err.response?.data?.message || "An error occurred" ;
      message.error(errorMessage);
    });
  }
  ///////////////////////////////////////////////////////////////To fetch category Id
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
//console.log(user)
/////////////////////////////////////////////////////////////////////////////////////////

  return (
    <>
     <div className={styles.uploadVideo_right}>
      <Search />                                      {/* Search as component used here  */}
      <div className={styles.header}>
              <div className={styles.header_left}>
              <div className={styles.profPic}>
              {/* <img src={Ion}></img> */}
              </div>
              <div className={styles.macintosh}>
              <p className={styles.macintosh1}>Macintosh</p>
              <p className={styles.macintosh2}>@Macintosh</p>
              </div>
              </div>

              <div className={styles.header_right}>
              <button id={styles.btn_clear} onClick={()=>navigate('/userManagement')}>Clear</button>
              <button id={styles.btn_publish} onClick={()=>publish()}>Publish</button>
              </div>
        </div>
         
        <div className={styles.uploadV_main}>
      <div className={styles.uploadV_body}> 
      
      
       <div className={styles.uploadV_video}>
      <UploadVido videoURL={videoURL} setVideoURL={setVideoURL}/>   {/*  UploadVideo as component used here  */}
      <UploadThumbnail thumbnailURL={thumbnailURL} setThumbnailURL={setThumbnailURL}/>   {/* UploadThumbnail as component used here  */}
      <RadioButton selectedValue={selectedValue} setSelectedValue={setSelectedValue} /> {/* Radiobutton as component used here  */}
      </div>

       <DescriptionBox description={description} setDescription={setDescription}/>  {/* Description as component used here  */}

       <div className={styles.form_row1}>
       <div className={styles.form_element}>
          <label className={styles.form_label}>Places</label>
          <input type='text' className={styles.form_input} value={place}
          onChange={(e)=>setPlace(e.target.value)}></input>
        </div>

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

export default UploadVideo