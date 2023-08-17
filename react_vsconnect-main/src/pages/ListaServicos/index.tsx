import "./style.css"
import { useState } from "react"
import CardServ from "../../components/CardServ";

export default function ListaServicos() {



    const [servs, setServs] = useState<any[]>([


        {
            titulo: "Desenvolvimento de site institucional - Gateway de Pagamento / Fintech",
            valor: "R$ 1300,00",
            descricao: "Desenvolver um site responsivo que seja utilizado como uma plataforma de apresentação do nosso gateway de pagamento. O objetivo principal deste projeto é criar um site atraente e informativo, que demonstre as funcionalidades e benefícios do nosso gateway de pagamento para potenciais clientes.",
            skills: ["HTML", "CSS", "REACT", "JAVA"]
        },
        {
            titulo: "ChatBot para a minha Pizzaria",
            valor: "R$ 2400,00",
            descricao: "Necessito de uma automação e filtro para que o cliente seja direcionado corretamente para o setor de vendas, com a atendente que estiver disponível",
            skills: ["PYTHON", "KOTHIN", "JAVA"]
        },
        {
            titulo: "Logística",
            valor: "R$ 1500,00",
            descricao: "Preciso fazer um software que eu consiga consultar as movimentações do meu estoque em tempo real",
            skills: ["PYTHON", "C"]
        }

    ]);

    const [skillDigitada, setSkillDigitada] = useState<string>("");

    const [listaDevsFiltrados, setListaDevsFiltrados] = useState<any[]>(servs);

    function buscarPorSkill(event: any){
        event.preventDefault();

        const devsFiltrados = servs.filter((dev: any) => dev.skills.includes(skillDigitada.toLocaleUpperCase()));

        if(devsFiltrados.length === 0){
            alert("Nenhum serviço com essa skill")
        }else{
            setListaDevsFiltrados(devsFiltrados)
        }
    }

    function retornoDevsGeral(event: any){
        if(event.target.value === ""){
            setListaDevsFiltrados(servs)
        }
        setSkillDigitada(event.target.value)
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
                            {listaDevsFiltrados.map((serv: any, index: number) => {
                                    return <li>
                                          <CardServ 
                                          titulo={serv.titulo}
                                          valor={serv.valor}
                                          descricao={serv.descricao}
                                          techs={serv.skills}
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