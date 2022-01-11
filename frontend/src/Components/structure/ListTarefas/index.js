import React, {useState, useEffect} from "react";
import Card from "../Card";

const ListTarefas = () => {
  const [tarefas, setTarefas] = useState([]);

  useEffect (() => {
    getTarefas ();
  }, []);

  const getTarefas = async () => {
    const response = await fetch ("http://localhost:3001/tarefas");
    const tarefasApi = await response.json();
    setTarefas (tarefasApi);
  }
  
  return (
    <div className="row row-cols-1 row-cols-md-2 g-4">
      {
        tarefas.map((tarefa) => (
          <Card key={tarefa._id} tarefa={tarefa}/>
        ))
      }
    </div>
  )
};

export default ListTarefas;