//@ts-nocheck
import s from "./style.module.scss";

interface skillsProps {
  skills: { title: string; skills: String[] };
}

const Skills: React.FC<skillsProps> = ({ skills }) => {
  console.log(skills);
  return (
    <div className={s.skills}>
      {skills.map((item, index) => (
        <>
          <div key={index} className={s.skills__text}>
            {item.title}
          </div>
          <div className={s.skills__items}>
            {item.skills.map((skill, index) => (
              <div key={index} className={s.skills__item}>
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
