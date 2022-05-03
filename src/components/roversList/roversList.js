import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {RoverInfo} from "../roverInfo/roverInfo";
import "./roversList.css";

export const RoversList = () => {
    const roverSelected = useSelector(state => state.mars.roverSelected);

    const photos = useSelector(state => state.mars.photos)
        .filter((photo) => photo.rover.id === +roverSelected);

    return (
        <div className="rovers-page">
            <Link className="btn" to={"/"}><strong>Move back</strong></Link>
            {photos.length ? <div className="info-containers">
                {photos.map(photo => {
                    return <RoverInfo photo={photo} key={photo.id}/>
                })}
            </div> : <div className="empty-list">No photos.</div>}
        </div>
    );
}