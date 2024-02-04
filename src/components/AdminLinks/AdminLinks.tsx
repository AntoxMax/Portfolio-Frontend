import { Input } from "../../ui/Input";

type LinksProps = {
  link: string;
  setLink: React.Dispatch<React.SetStateAction<string>>;
  gitLink: string;
  setGitLink: React.Dispatch<React.SetStateAction<string>>;
};

export const Links: React.FC<LinksProps> = ({
  link,
  setLink,
  gitLink,
  setGitLink,
}) => {
  return (
    <div className="links">
      <p>Ссылка на проект:</p>
      <Input
        placeholder="Введите ссылку"
        value={link}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setLink(e.target.value)
        }
      />
      <p>Ссылка на Git:</p>
      <Input
        placeholder="Введите ссылку"
        value={gitLink}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setGitLink(e.target.value)
        }
      />
    </div>
  );
};
