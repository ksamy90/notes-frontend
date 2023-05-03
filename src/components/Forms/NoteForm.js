import { useState } from "react";

const NoteForm = ({ createNote }) => {
  const [newNote, setNewNote] = useState("");

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
    };
    createNote(noteObject);
    setNewNote("");
  };
  const handleChange = (evt) => setNewNote(evt.target.value);
  return (
    <div>
      <h2>Create a new note</h2>
      <form onSubmit={addNote}>
        <input
          value={newNote}
          onChange={handleChange}
          placeholder="write content here"
        />
        {/* <input value={""} onChange={""} /> */}
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default NoteForm;
