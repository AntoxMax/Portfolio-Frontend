import React, { useState } from "react";
import axios from "../../../../services/axios";
import { Input } from "../../../../ui/Input";
import { Button } from "../../../../ui/button/Button";

export const UserContent = ({ data }: any) => {
  console.log(data);
  const [login, setLogin] = useState(data.login);
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [newPassConf, setNewPassConf] = useState("");

  const onClickSend = async () => {
    if (newPass !== newPassConf || newPass.length === 0)
      return alert("Новые пароли различаются");

    const fields = {
      login,
      oldPass,
      password: newPass,
    };
    // TODO: Добавить логику в слайс
    await axios.patch(`/admin/${data._id}`, fields);
  };
  return (
    <div>
      Login:
      <Input
        value={login}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setLogin(e.target.value)
        }
      />
      Old Pass:
      <Input
        value={oldPass}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setOldPass(e.target.value)
        }
      />
      New Pass:
      <Input
        value={newPass}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNewPass(e.target.value)
        }
      />
      New Pass again:
      <Input
        value={newPassConf}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNewPassConf(e.target.value)
        }
      />
      <Button onClick={() => onClickSend()}>Изменить</Button>
    </div>
  );
};
