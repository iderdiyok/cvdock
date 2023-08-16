import BarChart from "../BarChart";

export default function Skills({skills}) {
  return (
    <div className="skill">
      {skills[0].skill_name ? (
        <>
          <h4>SKILLS</h4>
          <hr />
          {skills.map((skill, index) => (
            <BarChart
              key={index}
              name={skill.skill_name}
              level={skill.level}
            />
          ))}
        </>
      ) : null}
    </div>
  )
}
