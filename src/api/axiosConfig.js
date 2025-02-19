import axios from "axios";//make relevant http request to api 

export default axios.create({
    baseURL: 'http://localhost:8080',
    headers: {"ngrok-skip-browser-warning":"true"}
});