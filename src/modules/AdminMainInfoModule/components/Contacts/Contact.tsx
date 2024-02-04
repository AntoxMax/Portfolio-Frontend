import React, { useEffect, useState } from "react";
import { EditIcon } from "../../../../ui/icons/EditIcon";
import { Button } from "../../../../ui/button/Button";
import { DeleteIcon } from "../../../../ui/icons/DeleteIcon";
import { Input } from "../../../../ui/Input";

export const ContactsElement = ({
  item,
  index,
  removeProperty,
  inputFileRefs,
  handleChangeFile,
  handleChange,
}: any) => {
  const [editProhibited, setEditProhibited] = useState(true);

  const onClickEditIcon = () => {
    if (item.textContact.length !== 0) setEditProhibited(!editProhibited);
  };

  useEffect(() => {
    if (!item.textContact.length) setEditProhibited(false);
  }, []);

  return (
    <div className="contacts">
      <div className="contacts__header">
        <h3>{item.textContact}</h3>
        <div className="manageButtons">
          <EditIcon
            opacity={!item.textContact.length ? "50%" : ""}
            onClick={() => onClickEditIcon()}
          />
          <DeleteIcon onClick={() => removeProperty(index)} />
        </div>
      </div>

      <div className="iconUrl">
        {item.iconUrl.length !== 0 && <img src={item.iconUrl} alt="" />}
        <Button
          background={true}
          onClick={() => inputFileRefs.current[index].click()}
          type="button"
          disabled={editProhibited}
        >
          Загрузить иконку
        </Button>
        <input
          ref={(inputFileRef) => (inputFileRefs.current[index] = inputFileRef)}
          type="file"
          onChange={(e) => handleChangeFile(e, index, "iconUrl")}
          hidden
        />
      </div>
      <Input
        type="text"
        required
        placeholder="Название контакта"
        disabled={item.textContact.length && editProhibited}
        value={item.textContact}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChange(index, "textContact", e.target.value)
        }
      />
      <Input
        type="text"
        placeholder="Ссылка на контакт"
        disabled={editProhibited}
        value={item.urlContact}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChange(index, "urlContact", e.target.value)
        }
      />
    </div>
  );
};
