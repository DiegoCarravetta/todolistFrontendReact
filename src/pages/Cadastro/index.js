import React from "react";
import Api from "../../api/api";
import {useNavigate} from "react-router-dom";

const Cadastro = () => {
  const navigate = useNavigate();

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    const titulo = evento.target.titulo.value;
    const descricao = evento.target.descricao.value; 
    const propriedade = evento.target.propriedade.value;
    const status = evento.target.status.value;
    const prazo = evento.target.prazo.value;

    const tarefa = {
      titulo,
      descricao,
      propriedade,
      status,
      prazo
    }

    const response = await Api.fetchPost(tarefa);
    const result = await response.json();

    alert(result.message);
    navigate('/');
  }
  
  return (
    <div className='container'>
      <div className='card mt-4'>
        <div className='card-body'>
          <form method='POST' onSubmit={handleSubmit}>
            <div className='row mb-4'>
              <div className='col-4'>
                <div className='form-group'>
                  <label htmlFor='titulo'>Título</label>
                  <input id='titulo' className='form-control' type='text' placeholder='Digite o título da tarefa' name='titulo'/>
                </div>
              </div>
              <div className='col-4'>
                <div className='form-group'>
                  <label htmlFor='descricao'>Descrição</label>
                  <input id='descricao' className='form-control' type='text' placeholder='Digite a descrição da tarefa' name='descrição'/>
                </div>
              </div>
              <div className='col-4'>
                <div className='form-group'>
                  <label htmlFor='prioridade'>Prioridade</label>
                  <input id='prioridade' className='form-control' type='text' placeholder='Digite a prioridade da tarefa' name='prioridade'/>
                </div>
              </div>
            </div>
            <div className='row mb-4'>
              <div className='col-4'>
                <div className='form-group'>
                  <label htmlFor='status'>Status</label>
                  <input id='status' className='form-control' type='text' placeholder='Digite o status da tarefa' name='status'/>
                </div>
              </div>
              <div className='col-4'>
                <div className='form-group'>
                  <label htmlFor='prazo'>Prazo</label>
                  <input id='prazo' className='form-control' type='date' name='prazo'/>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-4'>
                <button className='btn btn-success me-2' type='submit'>Enviar</button>
                <button className='btn btn-outline-primary'>Voltar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Cadastro;