import React, { useRef, useState, useEffect, ReactNode } from "react";
import "./style.scss";
import { AccordionArrow } from "../icons/AccordionArrow";

type AccordionProps = {
  title: string;
  content: ReactNode;
};

export const AccordionItem: React.FC<AccordionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const itemRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      if (itemRef.current) {
        setContentHeight(itemRef.current.scrollHeight);
      }
    });

    // Начинаем отслеживание изменений размера для блок
    if (itemRef.current) {
      resizeObserver.observe(itemRef.current);
    }

    // Возвращаем функцию очистки, чтобы остановить отслеживание при размонтировании компонента
    return () => {
      const currentRef = itemRef.current;
      if (currentRef) {
        resizeObserver.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    // Обновление высоты при изменении состояния isOpen
    setContentHeight(
      isOpen && itemRef.current ? itemRef.current.scrollHeight : 0
    );
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
