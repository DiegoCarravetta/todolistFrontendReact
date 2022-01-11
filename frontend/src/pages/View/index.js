import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

const View = () => {
  const [tarefa, setTarefa] = useState({});

  useEffect(() => {
    getTarefaById();
  }, [])
  
  const {id} = useParams();

  const getTarefaById = async () => {
    const request = await fetch(`http://localhost:3001/tarefas/${id}`);
    const tarefa = await request.json();

    setTarefa(tarefa);
  }

  return (
    <div className='container'>
      <div className='row my-5'>
        <div className='col-12'>
          <div className='card p-3'>
            <h4>Título: {tarefa.titulo} </h4>
            <p>Descrição: {tarefa.descricao}</p>
            <p>Prioridade: {tarefa.prioridade}</p>
            <p>Status: {tarefa.status}</p>
            <p>Prazo: {tarefa.prazo}</p>
            <p>Data de Criação: {tarefa.dataCriacao}</p>
          </div>
          <div className='btn-group my-3 w-100'>
            <button className='btn btn-info text-white'>Editar</button>
            <button className='btn btn-danger'>Excluir</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default View;