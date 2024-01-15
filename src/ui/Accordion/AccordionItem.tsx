//@ts-nocheck

import React, { useRef, useState } from "react";
import "./style.scss";

export const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const itemRef = useRef(null);

  const cliclHadler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className="accordion__item">
      <button className="accordion__header" onClick={() => cliclHadler()}>
        {title}
      </button>
      <div
        className="accordion__collapse"
        style={
          isOpen ? { height: itemRef.current.scrollHeight } : { height: "0px" }
        }
      >
        <div ref={itemRef} className="accordion__body">
          {content}
        </div>
      </div>
    </li>
  );
};
