import { Input } from "../../ui/Input";

export const Links = ({ link, setLink, gitLink, setGitLink }: any) => {
  return (
    <div className="links">
      <p>Ссылка на проект:</p>
      <Input
        placeholder="Введите ссылку"
        value={link}
        onChange={(e: any) => setLink(e.target.value)}
      />
      <p>Ссылка на Git:</p>
      <Input
        placeholder="Введите ссылку"
        value={gitLink}
        onChange={(e: any) => setGitLink(e.target.value)}
      />
    </div>
  );
};
