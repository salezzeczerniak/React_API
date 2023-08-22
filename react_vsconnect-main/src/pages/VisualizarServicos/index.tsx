//estilização
import "./style.css";
import { useParams } from "react-router-dom";
import {useState, useEffect} from "react";
import api from "../../utils/api";

function VisualizarServico() {

    const {idServico} = useParams();
    const [listaSkills, setListaSkills] = useState<string[]>([])
    const [nome, setNome] = useState<string>("")
    const [valor, setValor] = useState<string>("")
    const [descricao, setDescricao] = useState<string>("")
    
    function buscarServicoPorId(){
        api.get("servicos/" + idServico).then((response:any) => {
            setListaSkills(response.data.techs)
            setNome(response.data.nome)
            setValor(response.data.valor)
            setDescricao(response.data.descricao)
        }).catch((error) => {
            console.log(error)
        })
    }

    useEffect(() =>{
        document.title= "Serviço" + nome + "VSConnect"
        buscarServicoPorId()
    },[])

    return (
        <main id="main_visualizarservico">
            <div className="container">
                <h1>Serviço</h1>
                <div className="servico">
                    <div className="topo_servico">
                        <h2> {nome} </h2>
                        <span>R${valor}</span>
                    </div>
                    <p>{descricao}</p>
                    <div className="techs">
                        {
                            listaSkills.map((skill:any, index:number) => {
                                return <span key={index} > {skill}</span>
                            })
                        }
                    </div>
                </div>
            </div>

        </main>);
}

export default VisualizarServico;