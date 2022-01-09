import React, {useState} from "react";
import Card from "../Card";

const ListTarefas = () => {
  const listTarefas = () => {
    const [tarefas, setTarefas] = useState([]);

    useEffect (() => {
      getTarefas ();
    }, []);

    const getTarefas = async () => {
      const response = await fetch ("http://localhost:3001/tarefas");
      const tarefasApi = await request.json();
      setTarefas (tarefasApi);
    }
  }
  return (
    <div className="row row-cols-1 row-cols-md-2 g-4">
      {
        tarefas.map((tarefa) => (
          <Card key={tarefa._id} game={game}/>
        ))
      }
    </div>
  )
};

export default ListTarefas;