import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logOut } from "../../redux/Admin/slice";

import { UserContent } from "./components/UserContent/UserContent";
import { AccordionItem } from "../../ui/Accordion/AccordionItem";
import { Button } from "../../ui/button/Button";

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
