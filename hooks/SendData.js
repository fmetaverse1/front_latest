import axios from "axios"

function SendData(params) {
    axios.post(`https://back-updated-j9wo.onrender.com/create/user`, params)

}

export default SendData
