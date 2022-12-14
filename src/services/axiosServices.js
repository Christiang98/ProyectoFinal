import axios from "axios"

export const userLogin = async (data) => {
    const response = axios
        .post("http://localhost:5000/auth/login", data)
        .then((res) => res.data)
        .catch((err) => err.response.data)
    return response
}

export const userRegister = async (data) => {
    const response = axios
        .post("http://localhost:5000/auth/register", data)
        .then((res) => res.data)
        .catch((err) => err.response.data)
    return response
}