//@ts-nocheck
import s from "./style.module.scss";

interface skillsProps {
  objectSkills: { title: string; skills: String[] };
}

const Skills: React.FC<skillsProps> = ({ objectSkills }) => {
  const objKeys = Object.keys(objectSkills);

  return (
    <div className={s.skills}>
      {objKeys.map((key, index) => (
        <>
          <div className={s.skills__text}>{key}</div>
          <div className={s.skills__items}>
            {objectSkills[key].map((skill, index) => (
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
