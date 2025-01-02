import React from 'react';
import "./HeaderImage.css";
import cartImage from "../../assets/header.jpg";

const HeaderImage = () => {
  return (
    <div className="header-image">
            <div className="summary">
                <p>Welcome to React Meals, where culinary artistry meets exceptional dining experiences. Located in the heart of Bangalore, we pride ourselves on offering a diverse menu that highlights the freshest local ingredients and global flavors.</p>
            </div>
        <img src={cartImage} alt='foods in the table' />
        </div>
  )
}

export default HeaderImage