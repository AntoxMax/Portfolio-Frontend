//@ts-nocheck
import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { AccordionItem } from "../../ui/Accordion/AccordionItem";
import { UserContent } from "./UserContent";
import { Button } from "../../ui/button/Button";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../redux/Admin/adminSlice";

export const AdminUser = () => {
  const { data } = useAppSelector((state) => state.admin);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onClickExit = () => {
    dispatch(logOut());
    window.localStorage.removeItem("token");
    navigate("/admin");
  };

  return (
    <div>
      <Button background={true} onClick={() => onClickExit()}>
        Exit
      </Button>

      <AccordionItem
        title="Пользовательские данные:"
        content={<UserContent data={data} />}
      />
    </div>
  );
};
