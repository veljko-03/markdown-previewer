import "../styles/App.css";

const Editor = ({ id, value, onChange }) => (
  <textarea id={id} value={value} onChange={onChange} className="editor" />
);

export default Editor;
