export default function NameAndTitle({ personal }) {
  return (
    <div className="name-and-title">
      <h3>
        {personal.first_name
          ? `${personal.first_name} ${personal.last_name}`
          : ""}
      </h3>
      <span>{personal.qualification ? personal.qualification : ""}</span>
    </div>
  );
}