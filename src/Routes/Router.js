import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home/Home';

const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="users" element={<Users />}>
            <Route path="me" element={<OwnUserProfile />} />
            <Route path=":id" element={<UserProfile />} />
          </Route> */}
        </Routes>
      </BrowserRouter>
    );
};

export default Router;