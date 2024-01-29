// //@ts-nocheck

// import React, { useRef, useState, useEffect } from "react";
// import "./style.scss";

// export const AccordionItem = ({ title, content }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const itemRef = useRef(null);

//   useEffect(() => {}, [content]);

//   const cliclHadler = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <li className="accordion__item">
//       <button className="accordion__header" onClick={() => cliclHadler()}>
//         {title}
//       </button>
//       <div
//         className="accordion__collapse"
//         style={
//           isOpen ? { height: itemRef.current.scrollHeight } : { height: "0px" }
//         }
//       >
//         <div ref={itemRef} className="accordion__body">
//           {content}
//         </div>
//       </div>
//     </li>
//   );
// };

//@ts-nocheck

import React, { useRef, useState, useEffect } from "react";
import "./style.scss";
import { AccordionArrow } from "../icons/AccordionArrow";

export const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const itemRef = useRef(null);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      if (itemRef.current) {
        setContentHeight(itemRef.current.scrollHeight);
      }
    });

    // Начинаем отслеживание изменений размера для блока
    if (itemRef.current) {
      resizeObserver.observe(itemRef.current);
    }

    // Возвращаем функцию очистки, чтобы остановить отслеживание при размонтировании компонента
    return () => {
      if (itemRef.current) {
        resizeObserver.unobserve(itemRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // Обновление высоты при изменении состояния isOpen
    setContentHeight(isOpen ? itemRef.current.scrollHeight : 0);
  }, [isOpen]);

  const clickHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className="accordion__item">
      <button className="accordion__header" onClick={clickHandler}>
        {title}
        <AccordionArrow className={isOpen ? "active" : ""} />
      </button>
      <div
        className="accordion__collapse"
        style={{
          height: isOpen ? contentHeight + "px" : "0px",
          overflow: "hidden",
          transition: "height 0.3s ease",
        }}
      >
        <div ref={itemRef} className="accordion__body">
          {content}
        </div>
      </div>
    </li>
  );
};
