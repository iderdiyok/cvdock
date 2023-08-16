export default function PersonalInfo({ personal }) {
  console.log({personal});
  return (
    <div className="person">
      {personal.birthday || personal.place_of_birth || personal.street ? (
        <>
          <h4>PERSÖNLICHES</h4>
          <hr />
          <p>{personal.birthday ? `Geburtstag: ${personal.birthday}` : ""}</p>
          <p>
            {personal.place_of_birth
              ? `Geburtsort: ${personal.place_of_birth}`
              : ""}
          </p>
          <p>
            {personal.street
              ? `Adresse: ${personal.street}, ${personal.zip_code} ${personal.city}/${personal.country}`
              : ""}
          </p>
        </>
      ) : null}
    </div>
  );
}
