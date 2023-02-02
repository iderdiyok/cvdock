import { useRouter } from "next/router";
import { useState } from "react";
import { Icon } from "@iconify/react";

export default function FormPersonalInfo() {
  const title = "Personaldaten";
  const router = useRouter();

  const [personalData, updatePersonalData] = useState(getInitialPersonalData());

  const handleImageChange = (e) => {
    updatePersonalData({
      ...personalData,
      [e.currentTarget.id]: URL.createObjectURL(e.target.files[0]),
    });
  };

  const handleChange = (e) => {
    updatePersonalData({
      ...personalData,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("personalData", JSON.stringify(personalData));
    router.push("/builder/education");
  };

  return (
    <>
      <div className="form-editor">
        <section className="form-editor__header">
          <h2>{title}</h2>
          <hr />
        </section>

        <form className="form-editor__content">
          <div className="form-editor__content__first-line">
            <div className="form-editor__content__first-line--avatar">
              <div className="form-editor__content__first-line--avatar-box">
                <label htmlFor="avatar">
                  {personalData.avatar ? (
                    <img src={personalData.avatar} alt="Preview" />
                  ) : (
                    <>
                      <Icon icon="fa6-solid:camera" />
                      <span>Hinzufügen</span>
                      <span>(optional)</span>
                    </>
                  )}
                </label>
                <input
                  id="avatar"
                  type="file"
                  onChange={handleImageChange}
                  style={{ display: "none" }}
                />
              </div>
            </div>
            <div className="form-editor__content__first-line--personalInfo">
              <div className="form-editor__content__grid--col-2">
                <div className="form-editor__content__input-label-flex">
                  <label htmlFor="first_name">Vorname</label>
                  <input
                    type="text"
                    id="first_name"
                    value={personalData.first_name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-editor__content__input-label-flex">
                  <label htmlFor="last_name">Nachname</label>
                  <input
                    type="text"
                    id="last_name"
                    value={personalData.last_name}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-editor__content__grid--col-2">
                <div className="form-editor__content__input-label-flex">
                  <label htmlFor="e-mail">E-Mail</label>
                  <input
                    type="email"
                    id="email"
                    value={personalData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-editor__content__input-label-flex">
                  <label htmlFor="phone">Telefon</label>
                  <input
                    type="text"
                    id="phone"
                    value={personalData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="form-editor__content__adress-line">
            <div className="form-editor__content__grid--col-2">
              <div className="form-editor__content__input-label-flex">
                <label htmlFor="street">Adresse</label>
                <input
                  type="text"
                  id="street"
                  value={personalData.street}
                  onChange={handleChange}
                />
              </div>
              <div className="form-editor__content__input-label-flex">
                <label htmlFor="zip_code">Postleitzahl</label>
                <input
                  type="text"
                  id="zip_code"
                  value={personalData.zip_code}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-editor__content__grid--col-2">
              <div className="form-editor__content__input-label-flex">
                <label htmlFor="city">Stadt</label>
                <input
                  type="text"
                  id="city"
                  value={personalData.city}
                  onChange={handleChange}
                />
              </div>
              <div className="form-editor__content__input-label-flex">
                <label htmlFor="country">Land</label>
                <input
                  type="text"
                  id="country"
                  value={personalData.country}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="form-editor__content__qualification-line">
            <div className="form-editor__content__input-label-flex">
              <label htmlFor="qualification">Qualifizierung</label>
              <input
                type="text"
                id="qualification"
                value={personalData.qualification}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-editor__content__birthday-line">
            <div className="form-editor__content__grid--col-3">
              <div className="form-editor__content__input-label-flex">
                <label htmlFor="birthday">Geburtsdatum</label>
                <input
                  type="text"
                  id="birthday"
                  value={personalData.birthday}
                  onChange={handleChange}
                />
              </div>
              <div className="form-editor__content__input-label-flex">
                <label htmlFor="place_of_birth">Geburtsort</label>
                <input
                  type="text"
                  id="place_of_birth"
                  value={personalData.place_of_birth}
                  onChange={handleChange}
                />
              </div>
              <div className="form-editor__content__input-label-flex">
                <label htmlFor="gender">Geschlect</label>
                <select
                  class="form-select-custom"
                  id="gender"
                  value={personalData.gender}
                  onChange={handleChange}
                >
                  <option value="0">Select</option>
                  <option value="m">Männlich</option>
                  <option value="f">Weiblich</option>
                </select>
              </div>
            </div>
          </div>
          <div className="form-editor__content__social-platforms-line">
            <div className="form-editor__content__grid--col-2">
              <div className="form-editor__content__input-label-flex">
                <label htmlFor="website">Webseite-Link</label>
                <input
                  type="text"
                  id="website"
                  value={personalData.website}
                  onChange={handleChange}
                />
              </div>
              <div className="form-editor__content__input-label-flex">
                <label htmlFor="linkedin">LinkedIn-Profil-Link</label>
                <input
                  type="text"
                  id="linkedin"
                  value={personalData.linkedin}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="next-step">
        <div
          className="button-box"
          style={{ color: "white" }}
          onClick={handleSubmit}
        >
          Weiter
          <Icon icon="fa6-solid:angle-right" />
        </div>
      </div>
    </>
  );
}

function getInitialPersonalData() {
  if (typeof window === "undefined") {
    return {};
  }

  const initalPersonalData = JSON.parse(
    window.localStorage.getItem("personalData")
  );

  return initalPersonalData ?? {};
}
