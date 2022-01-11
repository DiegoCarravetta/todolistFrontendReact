import React, {useEffect, useState} from "react";
import {useParams, useNavigate} from "react-router-dom";
import Api from "../../api/api";

const Edit = () => {
  const navigate = useNavigate();

  const [tarefa, setTarefa] = useState({
    titulo: '',
    descricao: '',
    prioridade: '',
    status: '',
    prazo: '',
  });

  useEffect(() => {
    getTarefaById();
  }, []);

  const {id} = useParams();

  const getTarefaById = async () => {
    const response = await Api.fetchGetById(id);
    const tarefa = await response.json();
    setTarefa(tarefa);
  };

  const handleFieldsChange = (evento) => {
    console.log(evento.target.name);
    
    const tarefaEdit = {
      ...tarefa
    }
    
    tarefaEdit[evento.target.name] = evento.target.value;
    setTarefa(tarefaEdit);
  };

  const handleSubmit = async (evento) => {
    evento.preventDefault();

    const response = await Api.fetchPut(tarefa, id);
    const data = await response.json();
    alert(data.message);

    navigate(`/view/${id}`);
  }

  return (
    <div className="container">
      <div className="card mt-4">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row mb-4">
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="titulo">Título</label>
                  <input
                    id="titulo"
                    className="form-control"
                    type="text"
                    placeholder="Digite o título da tarefa"
                    name="titulo"
                    value={tarefa.titulo}
                    onChange={handleFieldsChange}
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="descricao">Descrição</label>
                  <input
                    id="descricao"
                    className="form-control"
                    type="text"
                    placeholder="Digite a descrição"
                    name="descricao"
                    value={tarefa.descricao}
                    onChange={handleFieldsChange}
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="prioridade">Prioridade</label>
                  <input
                    id="prioridade"
                    className="form-control"
                    type="text"
                    placeholder="Digite a prioridade"
                    name="prioridade"
                    value={tarefa.prioridade}
                    onChange={handleFieldsChange}
                  />
                </div>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="status">Status</label>
                  <input
                    id="status"
                    className="form-control"
                    type="text"
                    placeholder="Digite o status"
                    name="status"
                    value={tarefa.status}
                    onChange={handleFieldsChange}
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="prazo">Prazo</label>
                  <input
                    id="prazo"
                    className="form-control"
                    type="date"
                    name="prazo"
                    value={tarefa.prazo}
                    onChange={handleFieldsChange}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <button className="btn btn-success me-2" type="submit">
                  Enviar
                </button>
                <button className="btn btn-outline-primary">Voltar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit;