import { Link } from "react-router-dom";
import { Button } from "../../ui/button/Button";

export const GoOnMain = () => {
  return (
    <Button background={true} icon={true}>
      <Link to="/">На главную</Link>
    </Button>
  );
};
