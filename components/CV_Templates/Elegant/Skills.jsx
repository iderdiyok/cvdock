import BarChart from "../BarChart";

export default function Skills({ skills }) {
  return (
    <div className="skill">
      <h4>SKILLS</h4>
      {skills.length > 0 ? (
        <>
          <hr />
          {skills.map((skill, index) => (
            <BarChart key={index} name={skill.skill_name} level={skill.level} />
          ))}
        </>
      ) : null}
    </div>
  );
}
