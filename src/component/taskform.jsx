import { useState, useContext } from "react";
import { TaskContext } from "../context/taskContext";


function Taskform() {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
 const {createTasks} =  useContext(TaskContext)

  const HandelSubmit = (e) => {
    e.preventDefault();
    createTasks({
      title,
      description,
    })
    settitle("");
    setdescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form className="bg-slate-800 p-10 mb-4" onSubmit={HandelSubmit}>
        <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
      <input className="bg-slate-300 p-3 w-full mb-2"
        autoFocus
        placeholder="escibe tu comentario"
        onChange={(e) => {
          settitle(e.target.value);
        }}
        value={title}
      />
      
      <textarea className="bg-slate-300 p-3 w-full mb-2"
        placeholder="describa la tarea"
        onChange={(e) => setdescription(e.target.value)}
        value={description}
      ></textarea>
      
      <button className="bg-indigo-500 px-3 py-1 text-white">Guardar</button>
    </form>
    </div>
  );
}

export default Taskform;
