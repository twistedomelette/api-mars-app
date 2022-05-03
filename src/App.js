import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getPhotos, getRovers} from "./api/api";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./components/home/home";
import {RoversList} from "./components/roversList/roversList";
import {NotFound} from "./components/not-found/not-found";
import {Loading} from "./components/loading/loading";

function App() {
    const dispatch = useDispatch();
    const rovers = useSelector(state => state.mars.rovers);
    const photos = useSelector(state => state.mars.photos);

    useEffect(() => {
        dispatch(getRovers());
        dispatch(getPhotos());
    }, [dispatch])

    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={rovers.length ? <Home/> : <Loading/>}/>
                <Route path={'/rovers'} element={photos.length ? <RoversList/> : <Loading/>}/>
                <Route path={'*'} element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
