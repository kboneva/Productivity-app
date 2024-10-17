import axios from "axios";

export default axios.create({
    baseURL: process.env.REACT_APP_BASEURL,
    headers: {
        "Content-Type": "application/json"
    }
})