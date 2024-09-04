import axios from "axios";

const api = axios.create({
    baseURL: "https://farmacia-nest.onrender.com/"
})

export const buscar = async (url: string, setDados: Function) => {
    const resposta = await api.get(url)
    setDados(resposta.data)
}