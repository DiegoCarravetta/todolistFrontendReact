import React from "react";
import ListTarefas from "../../Components/structure/ListTarefas";

const Home = () => {
  return (
    <div className="container">
      <h1 className="text-center h1 mt-3">To do List</h1>
      <ListTarefas/>;
    </div>
  )
}

export default Home;