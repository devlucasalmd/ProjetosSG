import React from 'react'
import "./Modal.css"
import {AiFillCloseCircle} from 'react-icons/ai'
import Form from '../Form/Form'

function Modal(props) {
  return (
    <div className='fundo'>
      <div className="closeModal" onClick={()=>{props.fecharOModal(); localStorage.clear()}}>
        <AiFillCloseCircle size={40} color='white'/>
      </div>
      <div>
       <Form FecharModal = {props.fecharOModal} Editar={props.EditarNote} onCreateNote={props.onCreateNote}/>
      </div>
    </div>
  )
}

export default Modal