import React from "react";
import {Link} from "react-router-dom";

const Card = (props) => {
  const tarefa = props.tarefa;
  return (
    <Link to={`/view/${tarefa._id}`} className="col">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Título: {tarefa.titulo}</h5>
          <p className="card-text">Descrição: {tarefa.descricao}</p>
          <p className="card-text">Propriedade: {tarefa.propriedade}</p>
          <p className="card-text">Status: {tarefa.status}</p>
          <p className="card-text">Prazo: {tarefa.prazo}</p>
          <p className="card-text">Data de Criação: {tarefa.dataCriacao}</p>
        </div>
      </div>
    </Link>
  )
}

export default Card;