import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../ui/button/Button";

export const GoOnBack = () => {
  const navigate = useNavigate();

  const goOnBackClick = () => {
    navigate(-1);
  };

  return (
    <Button background={true} icon={true} onClick={() => goOnBackClick()}>
      Назад
    </Button>
  );
};
