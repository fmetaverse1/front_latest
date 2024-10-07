import axios from "axios"

function SendData(params) {
    axios.post(`https://lobster-app-67ipw.ondigitalocean.app/create/user`, params)

}

export default SendData