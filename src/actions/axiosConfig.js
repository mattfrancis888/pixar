import axios from "axios";
//Used for onine JSON-store database
const streams = axios.create({
    // .. where we make our configurations
    baseURL: "http://localhost:3001/",
});

export default streams;
