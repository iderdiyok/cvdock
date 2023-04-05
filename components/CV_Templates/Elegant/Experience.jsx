import TimeNameCity from "./TimeNameCity";

export default function Experience({ jobs }) {
  return (
    <div>
      <h4>BERRUFLICHE ERFAHRUNG</h4>
      <hr />
      {jobs.map((j, i) => jobs.length > 0 && <TimeNameCity key={i} data={j} />)}
    </div>
  );
}
