import React from "react";

const Cadastro = () => {
  return (
    <div className='container'>
      <div className='card mt-4'>
        <div className='card-body'>
          <form>
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
                <button className='btn btn-success me-2'>Enviar</button>
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