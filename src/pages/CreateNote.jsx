import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";

import { IoIosArrowBack } from "react-icons/io";

import useCreateDate from "../components/useCreateDate";
import getRandomColor from "../components/NoteColors";

const CreateNote = ({ setNotes }) => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const date = useCreateDate();
  const color = getRandomColor();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && details) {
      const note = { id: uuid(), title, details, date, color };
      // add this note to the Notes array
      setNotes((prevNotes) => [note, ...prevNotes]);

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
        <button className="btn lg primary" onClick={handleSubmit}>
          Save
        </button>
      </header>
      <form className="create-note__form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          autoFocus
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
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

export default CreateNote;
