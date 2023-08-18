import "./style.css"
import { useEffect, useState } from "react"
import CardServ from "../../components/CardServ";

import api from "../../utils/api";

export default function ListaServicos() {



    const [servs, setServs] = useState<any[]>([]);

    const [skillDigitada, setSkillDigitada] = useState<string>("");

    const [listaDevsFiltrados, setListaDevsFiltrados] = useState<any[]>(servs);

    useEffect(() =>{
        document.title = "Lista Servicos - VSConnect"
        listarServicos()
    }, [] )

    function buscarPorSkill(event: any){
        event.preventDefault();

        const servFiltrados = servs.filter((serv: any) => serv.hardSkills.includes(skillDigitada.toLocaleUpperCase()));

        if(servFiltrados.length === 0){
            alert("Nenhum serviço com essa skill")
        }else{
            setListaDevsFiltrados(servFiltrados)
        }
    }

    function retornoDevsGeral(event: any){
        if(event.target.value === ""){
            setListaDevsFiltrados(servs)
        }
        setSkillDigitada(event.target.value)
    }

    function listarServicos(){
        api.get("servicos").then((response: any) =>{
            console.log(response.data)
            setServs(response.data)

        })
    }

    return (
        <main id="lista-servicos">
            <div className="container container_lista_servicos">
                <div className="lista_servicos_conteudo">
                    <h1>Lista de Serviços</h1>
                    <hr/>
                        <form method="post" onSubmit={buscarPorSkill}>
                            <div className="wrapper_form">
                                <label htmlFor="busca">Procurar serviços</label>
                                <div className="campo-label">
                                    <input type="search" name="campo-busca" id="busca" placeholder="Buscar serviços por tecnologias..." onChange={retornoDevsGeral}/>
                                        <button type="submit">Buscar</button>
                                </div>
                            </div>
                        </form>
                        <div className="wrapper_lista">
                            <ul>
                            {servs.map((serv: any, index: number) => {
                                    return <li key={index}>
                                          <CardServ 
                                          titulo={serv.nome}
                                          valor={serv.valor}
                                          descricao={serv.descricao}
                                          techs={serv.techs}
                                           />
                                    </li>
                                }
                                )}

                            </ul>
                        </div>
                </div>
            </div>
        </main>
    )
}