import React from "react";
import { Button } from "../../ui/button/Button";

export const FirstBlock = () => {
  return (
    <div>
      <form>
        <input type="text" />
        <input type="text" />
        <div className="buttons">
          <Button background={true}>Save</Button>
        </div>
      </form>
    </div>
  );
};
