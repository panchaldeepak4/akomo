import { BrowserRouter as Router,Routes,Route,useMatch } from "react-router-dom"
import './App.css';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import ConfirmPassword from './pages/ForgotPassword/ConfirmPassword';
import Login from './pages/Home/Login'
import Videos from './pages/UMVideos/Videos';
import UserManagement from "./pages/UserManagement/UserManagement";
import Navbar from "./Components/Navbar/Navbar";
import UploadVideo from "./pages/UMUploadVideo/UploadVideo";
import AddUser from "./pages/UMAddUser/AddUser";
import VideoManagement from "./pages/VideoManagement/VideoManagement";
import VMUploadVideo from "./pages/VMUploadVideo/VMUploadVideo";
import MasterData from "./pages/MasterData/MasterData";
import Dashboard from "./pages/Dashboard/Dashboard";



function App() {
 const NavbarWrapper = () => {
  const currentLocation = window.location.pathname;
  const match = ['/','/fp1','/fp2'].some((route)=>route===currentLocation);
  // console.log("ffafa",match,currentLocation)
  if(match){
    return null;
    }
    else{
      return <Navbar />
    }
 }

  return (
    <>
    <Router>
    <div style={{ display: 'flex' }}>
  <NavbarWrapper />
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/forgotPassword' element={<ForgotPassword />}></Route>
        <Route path='/confirmPassword' element={<ConfirmPassword />}></Route>
        <Route path='/userManagement' element={<UserManagement />}></Route>
        <Route path='/userManagement/videos' element={<Videos />}></Route>
        <Route path='/userManagement/addUser' element={<AddUser />}></Route>
        <Route path='/userManagement/uploadVideo' element={<UploadVideo />}></Route>
        <Route path='/videoManagement' element={<VideoManagement />}></Route>
        <Route path='/videoManagement/uploadVideo' element={<VMUploadVideo />}></Route>
        <Route path='/masterData' element={<MasterData />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
      </Routes>
      </div>
    </Router>


     {/* <Navbar /> */}

    </>
  );
}

export default App;
