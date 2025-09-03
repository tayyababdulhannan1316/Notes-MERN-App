export const getAllNotes=(req, res) => {
  res.status(200).send("you just fetched the notes");
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