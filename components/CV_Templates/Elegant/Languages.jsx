import BarChart from "../BarChart";

export default function Languages({ languages }) {
  return (
    <div className="language">
      {languages[0].language_name ? (
        <>
          <h4>SPRACHEN</h4>
          <hr />
          {languages.map((language, index) => (
            <BarChart
              key={index}
              name={language.language_name}
              level={language.level}
            />
          ))}
        </>
      ) : null}
    </div>
  );
}
