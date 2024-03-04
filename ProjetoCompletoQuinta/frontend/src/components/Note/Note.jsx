import React from 'react'
import { FormatarData } from '../../fn-helpers/FormatDate'
import "./Note.css"
function Note(props) {
   const SalvarAtual = ()=>{
    localStorage.setItem("title",props.title);
    localStorage.setItem("description",props.description);
    localStorage.setItem("id",props.id);
    props.abrirOModal()
  }
  return (
    <div className="note-card">
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
      <h3>{FormatarData(props.date)}</h3>
      <button onClick={()=> SalvarAtual()}>Edit</button>
      <button onClick={()=> props.DeletarNote(props.id)}>Delete</button>
    </div>
  )
}

export default Note