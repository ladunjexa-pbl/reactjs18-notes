import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import { IoIosArrowBack } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import useCreateDate from "../components/useCreateDate";

const EditNote = ({ notes, setNotes }) => {
  const { id } = useParams();
  const note = notes.find((item) => item.id === id);
  const [title, setTitle] = useState(note.title);
  const [details, setDetails] = useState(note.details);
  const date = useCreateDate();
  const color = note.color;
  const navigate = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();

    if (title && details) {
      const newNote = { ...note, title, details, date, color };

      const newNotes = notes.map((item) => {
        if (item.id === id) {
          item = newNote;
        }
        return item;
      });

      setNotes(newNotes);
    }

    // redirect to home page
    navigate("/");
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete note?")) {
      const newNotes = notes.filter((item) => item.id !== id);
      setNotes(newNotes);

      // redirect to home page
      navigate("/");
    }
  };

  return (
    <section>
      <header className="create-note__header">
        <Link to="/">
          <button className="btn">
            <IoIosArrowBack />
          </button>
        </Link>
        <button className="btn lg primary" onClick={handleForm}>
          Save
        </button>
        <button className="btn danger" onClick={handleDelete}>
          <RiDeleteBin6Line />
        </button>
      </header>
      <form className="create-note__form" onSubmit={handleForm}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
        />
        <p>{date.substring(0, date.length - 7)}</p>
        <textarea
          rows="28"
          placeholder="Note details.."
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        ></textarea>
      </form>
    </section>
  );
};

export default EditNote;
