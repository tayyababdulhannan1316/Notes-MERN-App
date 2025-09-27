import Note from "../../models/Note.js";


export  const getAllNotes=async(req, res) => {
 try {
  const notes =await Note.find().sort({ createdAt: -1 });
  res.status(200).json(notes);
 } catch (error) {
  console.log("error in getAllNotes controller", error);
  res.status(500).json({ message: "Internal Server error"});
 }
};
export  const getThisNote=async(req, res) => {
 try {
    const { id } = req.params;
    const note = await Note.findById(id);
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }   
  res.status(200).json(note);
 } catch (error) {
  console.log("error in getting this note controller", error);
  res.status(500).json({ message: "Internal Server error"});
 }
};
export const CreateNotes=async(req, res) => {
  try {
    const { title, content } = req.body;
    const notes = new Note({ title, content });
    const savedNotes=await notes.save();
    res.status(201).json(savedNotes);
  } catch (error) {
    console.log("error in CreateNotes controller", error);
    res.status(500).json({ message: "Internal Server error" });
  }
};
export const UpdateNotes=async(req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
 
  try {
    const updatedNotes = await Note.findByIdAndUpdate(id,{ title, content },{ new: true });
    if (!updatedNotes) {
      return res.status(404).json({ message: "Notes not found" });
    }
   
    res.status(200).json(updatedNotes);
  } catch (error) {
    console.log("error in UpdateNotes controller", error);
    res.status(500).json({ message: "Internal Server error" });
  }  
};
export const deleteNotes=async(req, res) => {
  const { id } = req.params;
  try {
    const deletedNotes = await Note.findByIdAndDelete(id) 
      
      if (!deletedNotes) {
        return res.status(404).json({ message: "Notes not found" });
      }
      res.status(200).json({ message: "Notes deleted successfully" })
    
  } catch (error) {
    console.log("error in deleteNotes controller", error);
    res.status(500).json({ message: "Internal Server error" });
  }
};