import axios from "axios"

const api = axios.create({
    // Utilizado para rodar as páginas alocadas no arquivo (onde é só incluir o endereco)
    baseURL: "http://localhost:3000/",
    
})

export default api 