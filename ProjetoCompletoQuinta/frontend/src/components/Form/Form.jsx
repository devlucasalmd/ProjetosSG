import React, { useState } from 'react';
import "./Form.css";
import { useEffect } from 'react';

function Form(props) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [editMode, setEditMode] = useState(false);
  
  useEffect(()=>{
    let id = localStorage.getItem("id");
    let title = localStorage.getItem("title");
    let description = localStorage.getItem("description");

    if(id != null) {
      setEditMode(true);
      setDesc(description);
      setTitle(title);

    }
    else{
      setEditMode(false);
    }

  }, []);
  
  const handleCreateNote = () => {

    if(editMode){
      let id = localStorage.getItem("id");
      props.Editar(id,title,desc) 
      setTitle("");
      setDesc("");     
    }else{
      props.onCreateNote(title, desc);
    }

    // console.log(title);
    // console.log(desc);
    // Chama a função onCreateNote com os dados do título e descrição
    // Limpa os campos após criar a nota
    setTitle("");
    setDesc("");
    props.FecharModal();
  };

  const envioForm = (e) => {
    e.preventDefault();    
    handleCreateNote();
  } 

  return (
    <form onSubmit={envioForm} className={"form"}>
      <h1>{editMode ? "editar" : "Adicionar Anotação"}</h1>
      <label htmlFor="title">Titulo</label>
      <input
        type="text"
        placeholder="Titulo da anotação"
        name="title"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="description">Descrição</label>
      <input
        type="text"
        placeholder="Descrição da anotação"
        name="description"
        id="description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <button type="submit">Cadastrar anotação</button>
    </form>
  );
}

export default Form;
