import React, { useState } from "react";
import Note from "./Note";

function CreateArea() {
  const [data, setdata] = useState({
    title: "",
    content: "",
  });
  const [notes, setNotes] = useState([]);

  function change(e) {
    const { value, name } = e.target;
    setdata((prevVal) => ({
      ...prevVal,
      [name]: value,
    }));
  }

  function click(e) {
    e.preventDefault();
    if (data.title.trim() !== "" && data.content.trim() !== "") {
      setNotes((prevNotes) => [...prevNotes, data]);
      setdata({
        title: "",
        content: "",
      });
    }
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          value={data.title}
          onChange={change}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={data.content}
          onChange={change}
        />
        <button onClick={click}>Add</button>
      </form>
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={deleteNote}
        />
      ))}
    </div>
  );
}

export default CreateArea;
