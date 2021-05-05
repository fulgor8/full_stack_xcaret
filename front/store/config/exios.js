import axios from 'axios';
// configuracion de axios
const clienteAxios = axios.create({
    baseURL: 'http://localhost:5000/'
})
export default clienteAxios;