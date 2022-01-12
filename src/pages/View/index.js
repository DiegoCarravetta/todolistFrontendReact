import React, {useState, useEffect} from "react";
import {useParams, Link, useNavigate} from "react-router-dom";
import Api from '../../api/api';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const View = () => {
  const navigate = useNavigate();

  const [tarefa, setTarefa] = useState({});

  const [open, setOpen] = useState(false);

  useEffect(() => {
    getTarefaById();
  }, [])
  
  const {id} = useParams();

  const abreModal = () => setOpen(true);
  const fechaModal = () => setOpen(false);

  const getTarefaById = async () => {
    const request = await Api.fetchGetById(id);
    const tarefa = await request.json();

    setTarefa(tarefa);
  }

  const handleDelete = async () => {
    const response = await Api.fetchDelete(id);
    const data = await response.json();
    alert(data.message)
    navigate('/');
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
            <div className='btn-group my-3 w-100'>
              <Link to={`/edit/${tarefa._id}`} className='btn btn-warning  text-white'>Editar</Link>
              <button className='btn btn-danger' onClick={abreModal}>Excluir</button>
            </div>
          </div>
        </div>
      </div>
      <Modal open={open} onClose={fechaModal} center>
        <h2 className="my-4">Deseja excluir?</h2>
        <div className='d-flex w-50 mx-auto justify-content-around'>
          <button className="btn btn-danger me-2" onClick={fechaModal}>Não</button>
          <button className="btn btn-success" onClick={handleDelete}>Sim</button>
        </div>
      </Modal>
    </div>
  )
}

export default View;