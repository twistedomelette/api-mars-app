import React from "react";
import "./roverInfo.css";

export const RoverInfo = ({ photo }) => {

    return (
        <div className="photo-container">
            <img alt="It is a Mars =D" width="300em" height="300px" src={photo.img_src}/>
            <div className="photo-info">
                <span className="rover-camera-name"><strong>Camera: {photo.camera.name}</strong></span>
                <span className="rover-date">{photo.earth_date}</span>
            </div>
        </div>
    );
}