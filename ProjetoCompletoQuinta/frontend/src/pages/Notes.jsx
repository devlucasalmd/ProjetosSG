import React, { useEffect } from 'react'
import AddNewButton from '../components/UI/AddNewButton'
import Modal from '../components/Modal/Modal'
import { useState } from 'react'
import axios from 'axios'
import Note from '../components/Note/Note'

function Notes() {
  const [showModal,setShowModal] = useState(false)
  const [notes,setNotes] = useState([])

  const pegarTodasAsNotesDaApi = ()=>{
    axios.get('http://localhost:3001/notes')
      .then(res=>{
        // console.log(res)
        // console.log(res.data)
        setNotes(res.data)
      }).catch(err=>console.log("erro ao pegar os dados da api",err))
  }
  
  const createNote = (title,description)=>{
    axios.post('http://localhost:3001/notes/createNote',{title,description})    
    .then(res=>{
      // console.log(res)
      // console.log(res.data)
      setNotes([...notes,res.data.note])
      
    
      // pegarTodasAsNotesDaApi()
    }).catch(err=>{
      console.log("erro ao cadastrar os dados na api",err)
    })
  }
  const deleteNote = (id)=>{
    axios.delete(`http://localhost:3001/notes/deleteNote/${id}`)
    .then(res=>{
      // console.log(res)
      // console.log(res.data)
      setNotes(notes.filter(n=> n.id !== id ))
      // pegarTodasAsNotesDaApi()
    }).catch(err=>console.log("erro ao pegar os dados da api",err))
  }

  const editNote = (id,title,description)=>{
    axios.put(`http://localhost:3001/notes/editNote/${id}`,{title,description})
    .then(res=>{
      // console.log(res)
      // console.log(res.data)
      let newUpdatedNotes = notes.map( (n) => {
        if (n.id == id) {
          return res.data.note 
        }
        return n;
      });
      setNotes(newUpdatedNotes);
    }).catch(err=>console.log("erro ao pegar os dados da api",err))
  }


  useEffect(()=>{
    pegarTodasAsNotesDaApi()
    // editNote(1,"batatadoce","editado")
  },[])
  const mudarModal= ()=>{
    setShowModal((state)=>!state)
  }
  
  // function fecharOModal(){
  //   setShowModal(false)
  // }
  // function abrirOModal(){
  //   setShowModal(true)
  // }
  return (
    <div>
      <AddNewButton abrirOModal={mudarModal}/>
      {
        showModal ? <Modal EditarNote={editNote} onCreateNote={createNote} fecharOModal={mudarModal}/> : null
      }
      <div className="noteslist">
        {notes.map((n) => (
          <Note DeletarNote={deleteNote}
                abrirOModal={mudarModal} key={n.id} {...n} />
        ))}
      </div>
    </div>
  )
}

export default Notes