import axios from 'axios';


const instance = axios.create({
    withCredentials: true,
    baseURL:`https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': '552c0a5d-31ed-44af-807c-85564617984b'
        
    }
});

export const userAPI = {
    getUsers(currentPage=1, pageSize=10) {

        return instance.get( `users?page=${currentPage}&count=${pageSize}`,)
        .then(response => {
            return response.data;
        });
    }
} 
    