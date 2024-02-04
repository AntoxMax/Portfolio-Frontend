import React, { useState } from "react";
import axios from "../../../../services/axios";
import { Input } from "../../../../ui/Input";
import { Button } from "../../../../ui/button/Button";

import s from "./style.module.scss";
import { useAppDispatch } from "../../../../redux/hooks";
import { patchAdmin } from "../../../../redux/Admin/thunks";

export const UserContent = ({ data }: any) => {
  const dispatch = useAppDispatch();
  const [login, setLogin] = useState(data.user.login);
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

    const id = data.user.id;
    dispatch(patchAdmin({ id, fields }));
  };
  return (
    <div className={s.user}>
      <p>Login:</p>
      <Input
        value={login}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setLogin(e.target.value)
        }
      />
      <p>Old Pass:</p>
      <Input
        value={oldPass}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setOldPass(e.target.value)
        }
      />
      <p>New Pass:</p>
      <Input
        value={newPass}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNewPass(e.target.value)
        }
      />
      <p>New Pass again:</p>
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
