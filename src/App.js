import React from 'react';
import Profile from './profile/Profile.js'
import './App.css';

const details = {
  fullName : "Mark Zuckerberg",
  bio : "",
  profession : ""
}

function App() {
  return (
    <>
    <div className="App">
      <Profile details={details}>
      <img src='https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5c76b7d331358e35dd2773a9%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D0%26cropX2%3D4401%26cropY1%3D0%26cropY2%3D4401' alt='profile picture'/>
</Profile>
    </div>
    </>
  );
}

export default App;
