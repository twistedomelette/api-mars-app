import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setRover} from "../../store/slice";
import {Link} from "react-router-dom";
import "./home.css";

export const Home = () => {
    const dispatch = useDispatch();
    const rovers = useSelector(state => state.mars.rovers);

    useEffect(() => {
        if (rovers.length)
            dispatch(setRover(rovers[0].id));
    }, [dispatch, rovers])

    return (
        <div className="home-container">
            <select className="rovers-select" onChange={(e) => dispatch(setRover(e.target.value))}>
                {rovers.map((rover) => {
                    return <option value={rover.id} key={rover.id}>{rover.name}</option>
                })}
            </select>
            <Link className="rovers-find" to="/rovers">Find</Link>
        </div>
    );
}