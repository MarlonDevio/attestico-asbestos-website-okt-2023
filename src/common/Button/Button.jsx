import "./Button.css";

function Button({ className, content, style, href, onClick }) {
  return (
    <a
      style={style}
      className={`btn ${className}`}
      onClick={onClick}
      href={`#${href}`}
    >
      {content}
    </a>
  );
}

export default Button;
