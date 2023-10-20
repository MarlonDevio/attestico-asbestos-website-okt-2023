import "./Button.css";

function Button({ className, content, style, targetRef }) {

  const handleClick=() => {
    targetRef.current.scrollIntoView({behavior: "smooth"})
  }
  return (
    <a style={style} className={`btn ${className} `} onClick={handleClick} href={"#"}>
      {content}
    </a>
  );
}

export default Button;
