import "./Navigation.css";
import { Button, Logo } from "../../../common/index.js";
import { navbarItems } from "../../../constants/constants.js";
import ListItem from "../../../common/listItem/listItem.jsx";
import { useMediaQuery } from "../../../utils/index.js";
import { useState } from "react";

function Navigation({ targetRef }) {
  const isDesktop = useMediaQuery("(min-width: 960px)");
  const [navVisible, setNavVisible] = useState(false);

  return (
    <>
      <Logo />

      <nav>
        {!isDesktop && (
          <button
            className="nav-burger"
            onClick={() => setNavVisible(!navVisible)}
          >
            &#9746;
          </button>
        )}
        <ul
          className={`main-nav-list ${
            isDesktop ? "flex-wrapper-horizontal" : "flex-wrapper-vertical"
          }`}
          style={
            !isDesktop && navVisible
              ? {
                  right: "0",
                  gap: "5rem",
                  backgroundColor: "var(--color-pink-500)",
                }
              : {}
          }
        >
          {!isDesktop && navVisible && (
            <button
              className="nav-burger"
              onClick={() => setNavVisible(!navVisible)}
            >
              Close
            </button>
          )}
          {navbarItems.map((item) => (
            <ListItem
              style={{
                fontSize: "2rem",
              }}
              className="nav-item"
              content={item}
              key={item.id}
            />
          ))}

          <li>
            <Button
              className="btn--full"
              content="Contact"
              style={{ padding: "1rem 2rem" }}
              targetRef={targetRef}
            />
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
