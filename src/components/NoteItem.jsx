import { Link } from "react-router-dom";

const NoteItem = ({ note }) => {
  return (
    <Link
      to={`/edit-note/${note.id}`}
      className="note"
      style={{ background: note.color }}
    >
      <h4>
        {note.title.length > 50
          ? note.title.substring(0, 50) + "..."
          : note.title}
      </h4>
      <p>{note.date}</p>
    </Link>
  );
};

export default NoteItem;
