import axios from 'axios';


const API = "https://pixabay.com/api/";

export const fetchUsers = async() => {
    const response = await axios.get(`${API}?key=22400623-b418e5f92948d6e89271f2ba3&q=cats&image_type=all&per_page=10`);
    return response.data;
}
