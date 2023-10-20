import "./listItem.css";

function listItem({ className, content, style }) {
  return (
    <li>
      <a
        {...(content.href ? { href: content.href } : {})}
        style={style}
        className={`${className}`}
      >
        {content.title}
      </a>
    </li>
  );
}

export default listItem;
