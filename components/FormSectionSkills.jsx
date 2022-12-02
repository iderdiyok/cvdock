export default function FormSection({ fieldName }) {
  const skillsLevels = [
    { value: "0", option: "Nicht anzeigen" },
    { value: "25", option: "Anfänger" },
    { value: "50", option: "Qualifiziert" },
    { value: "75", option: "Erfahren" },
    { value: "100", option: "Experte" },
  ];
  return (
    <section className="form-editor__content">
      <div className="form-editor__content__skills">
        <div className="form-editor__content__grid--col-2">
          <div className="form-editor__content__input-label-flex">
            <label htmlFor="start-date">Skill</label>
            <input type="text" id="start-date" />
          </div>
          <div className="form-editor__content__input-label-flex">
            <label htmlFor="level">Level</label>
            <select class="form-select-custom" id="level">
              {skillsLevels.map(({ value, option }) => (
                <option value={value} key={value}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </section>
  );
}
