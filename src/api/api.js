import axios from "axios";
import {setPhoto, setRovers} from "../store/slice";
import {PHOTOS, ROVERS} from "./links";

export const getPhotos = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(PHOTOS)
            dispatch(setPhoto(response.data.photos));
        } catch (err) {
            throw err;
        }
    }
}

export const getRovers = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(ROVERS)
            dispatch(setRovers(response.data.rovers));
        } catch (err) {
            throw err;
        }
    }
}