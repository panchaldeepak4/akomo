import React from 'react'
import { Route, Routes } from "react-router-dom";
// import AddUser from '../pages/UMAddUser/AddUser';
// import UserManagement from '../pages/UserManagement/UserManagement';
// import UploadVideo from '../pages/UMUploadVideo/UploadVideo';

const Router = () => {
  return (
    <Routes>
        <Route
        path="/addUser"
        element={
          <PrivateRoute>
            <AddUser />
          </PrivateRoute>
        }
      />

    <Route
        path="/userManagement"
        element={
          <PrivateRoute>
            <UserManagement />
          </PrivateRoute>
        }
      />

      <Route
        path="/videos"
        element={
          <PrivateRoute>
            <Videos />
          </PrivateRoute>
        }
      />

    <Route
        path="/uploadVideo"
        element={
          <PrivateRoute>
            <UploadVideo />
          </PrivateRoute>
        }
      />

    </Routes>
  )
}

export default Router