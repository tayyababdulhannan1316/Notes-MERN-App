import Note from "../../models/Note.js";


export  const getAllNotes=async(req, res) => {
 try {
  const notes =await Note.find();
  res.status(200).json(notes);
 } catch (error) {
  console.log("error in getAllNotes controller", error);
  res.status(500).json({ message: "Internal Server error"});
 }
};
export const CreateNotes=(req, res) => {
  res.status(201).json({ message: "your notes created successfully " });
};
export const UpdateNotes=(req, res) => {
  res.status(201).json({ message: "your notes updated successfully " });
};
export const deleteNotes=(req, res) => {
   res.status(201).json({ message: "your notes deleted successfully " });
};