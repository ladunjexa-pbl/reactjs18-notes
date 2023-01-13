import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { CiSearch } from "react-icons/ci";
import { MdClose } from "react-icons/md";
import { BsPlusLg } from "react-icons/bs";

import NoteItem from "../components/NoteItem";

const Notes = ({ notes }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [text, setText] = useState("");
  const [filteredNotes, setFilteredNotes] = useState(notes);

  const handleSearch = () => {
    setFilteredNotes(
      notes.filter((note) => {
        if (note.title.toLowerCase().match(text.toLocaleLowerCase())) {
          return note;
        }
      })
    );
  };

  useEffect(handleSearch, [text]);

  return (
    <section>
      <header className="notes__header">
        {!showSearch && <h2>Notes</h2>}
        {showSearch && (
          <input
            type="text"
            autoFocus
            placeholder="Keyword..."
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              handleSearch();
            }}
          />
        )}
        <button
          className="btn"
          onClick={() => setShowSearch((prevState) => !prevState)}
        >
          {showSearch ? <MdClose /> : <CiSearch />}
        </button>
      </header>
      <div className="notes__container">
        {filteredNotes.length === 0 && (
          <p>
            <br /> Not notes found.
          </p>
        )}
        {filteredNotes.map((note) => (
          <NoteItem key={note.id} note={note} />
        ))}
      </div>
      <Link to="/create-note">
        <button className="btn add__btn">
          <BsPlusLg />
        </button>
      </Link>
    </section>
  );
};

export default Notes;
