import { skillsType } from "../../redux/MainPage/types";
import s from "./style.module.scss";

interface skillsProps {
  skills: skillsType[];
}

const Skills: React.FC<skillsProps> = ({ skills }) => {
  return (
    <div className={s.skills}>
      {skills.map((item, index) => (
        <>
          <div key={index} className={s.skills__text}>
            {item.title}
          </div>
          <div className={s.skills__items}>
            {item.skills.map((skill, skillIndex) => (
              <div key={skillIndex} className={s.skills__item}>
                {skill}
              </div>
            ))}
          </div>
        </>
      ))}
    </div>
  );
};

export default Skills;
