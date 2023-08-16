import TimeNameCity from "./TimeNameCity";

export default function Education({ educations }) {
  return (
    <div>
      {educations.length > 0 && (
        <>
          <h4>STUDIUM</h4>
          <hr />
          {educations.map(
            (e, i) => educations.length > 0 && <TimeNameCity key={i} data={e} />
          )}
        </>
      )}
    </div>
  );
}
