//@ts-nocheck
import React, { useState } from "react";
import { Input } from "../../ui/Input";
import { Button } from "../../ui/button/Button";
import axios from "../../axios";

export const UserContent = ({ data }: any) => {
  console.log(data);
  const [login, setLogin] = useState(data.login);
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [newPassConf, setNewPassConf] = useState("");

  console.log(data);

  const onClickSend = async () => {
    if (newPass !== newPassConf || newPass.length === 0)
      return alert("Новые пароли различаются");

    const fields = {
      login,
      oldPass,
      password: newPass,
    };

    await axios.patch(`/admin/${data._id}`, fields);
  };
  return (
    <div>
      Login:
      <Input value={login} onChange={(e: any) => setLogin(e.target.value)} />
      Old Pass:
      <Input
        value={oldPass}
        onChange={(e: any) => setOldPass(e.target.value)}
      />
      New Pass:
      <Input
        value={newPass}
        onChange={(e: any) => setNewPass(e.target.value)}
      />
      New Pass again:
      <Input
        value={newPassConf}
        onChange={(e: any) => setNewPassConf(e.target.value)}
      />
      <Button onClick={() => onClickSend()}>Изменить</Button>
    </div>
  );
};
