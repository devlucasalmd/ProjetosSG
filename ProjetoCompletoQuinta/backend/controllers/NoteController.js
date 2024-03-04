const Note = require("../models/Note")

module.exports = class NotesController{
  static async getAll(req,res){
    try {
      const notes = await  Note.findAll();
      res.status(201).json(notes)
    } catch (error) {
      console.log(error)
      res.status(500).json({error: "algo deu errado, tente depois"})
    }
  }
  static async createNote(req,res){
    const {title,description} = req.body;
    if (!title){
      return res.status(402).json({message: "o title é obrigatório"})
    }
    try {
      const note = await Note.create({title, description })
      res.status(201).json({message: "criado com sucesso",note: note})
    } catch (error) {
      console.log(error)
      res.status(500).json({error: "algo deu errado, tente depois"})
    }
  }
  static async deleteNote(req,res){
    const {id} =req.params;
    try {
      const note = await Note.findByPk(id);
      if(note){
        await note.destroy();
        res.status(201).json({message: "anotação deletada com sucesso"})
      }else{
        res.status(404).json({message: "anotação não encontrada"})
      }
    } catch (error) {
      console.log(error)
      res.status(500).json({error: "erro ao tentar deletar a chave"})
    }
  }
  static async editNote(req,res){
    const {id} =req.params;
    const {title,description}= req.body;
    const note = await Note.findByPk(id);
    try {
      if(note){
      note.title = title || note.title
      note.description = description || note.description
      note.date = Date.now()
      await note.save();
      res.status(201).json({message: "Anotação editada com sucesso!",note: note})
    }else{
      res.status(404).json({error: "erro ao tentar achar a anotação"})
    }
    } catch (error) {
      console.log(error);
      res.status(404).json({error: "erro ao tentar editar a anotação"})
    }
    
  }
}