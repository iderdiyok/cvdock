/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePersonal } from "../../store";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Image from "next/image";
import ImageCropDialog from "../ImageCropDialog";
import NextStepButton from "../NextStepButton";

export default function FormPersonalInfo({ past }) {
  const title = "Personaldaten";
  const dispatch = useDispatch();
  const router = useRouter();

  // Store data in localStorage
  const storedPersonalData = JSON.parse(localStorage.getItem("personalData"));

  const initialPersonalData = useSelector((state) => state.data.personal);
  const [personalCurrent, updatePersonalCurrent] =
    useState(initialPersonalData);
  const [selectedAvatar, setSelectedAvatar] = useState(null);

  useEffect(() => {
    if (storedPersonalData) {
      dispatch(updatePersonal(storedPersonalData));
    }
  }, []);

  useEffect(() => {
    updatePersonalCurrent(initialPersonalData)
  }, [initialPersonalData]);

  const handleChangeImage = (e) => {
    const avatar = {
      imageUrl: URL.createObjectURL(e.target.files[0]),
      croppedImageUrl: null,
    };
    setSelectedAvatar(avatar);
  };

  const handleDeleteImage = (e) => {
    updatePersonalCurrent({
      ...personalCurrent,
      avatar: null,
    });
  };

  const onCancel = () => {
    setSelectedAvatar(null);
  };

  const setCroppedImageFor = (crop, zoom, aspect, croppedImageUrl) => {
    const newAvatar = { croppedImageUrl, crop, zoom, aspect };
    updatePersonalCurrent({
      ...personalCurrent,
      avatar: newAvatar,
    });
    setSelectedAvatar(null);
  };

  const resetImage = (id) => {
    setCroppedImageFor(id);
  };

  const handleChange = (e) => {
    updatePersonalCurrent({
      ...personalCurrent,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const handleSubmit = (e, past = false) => {
    e.preventDefault();
    dispatch(updatePersonal(personalCurrent));

    localStorage.setItem("personalData", JSON.stringify(personalCurrent));
    router.push({
      pathname: "/builder/education",
      query: { past },
    });
  };

  return (
    <div className="container">
      {selectedAvatar ? (
        <ImageCropDialog
          imageUrl={selectedAvatar.imageUrl}
          cropInit={selectedAvatar.crop}
          zoomInit={selectedAvatar.zoom}
          aspectInit={selectedAvatar.aspect}
          onCancel={onCancel}
          setCroppedImageFor={setCroppedImageFor}
          resetImage={resetImage}
        />
      ) : null}
      <motion.div
        className="form-editor"
        initial={{ x: past ? "100vw" : "-100vw" }}
        animate={{ x: 0 }}
        exit={{ x: "-100vw" }}
        transition={{ duration: 0.4 }}
      >
        <section className="form-editor__header">
          <h2>{title}</h2>
          <hr />
        </section>

        <form className="form-editor__content">
          <div className="form-editor__content__first-line">
            <div className="form-editor__content__first-line--avatar">
              <div className="form-editor__content__first-line--avatar-box">
                <label
                  htmlFor="avatar"
                  style={
                    personalCurrent.avatar
                      ? { padding: "0" }
                      : { padding: "1.7em" }
                  }
                >
                  {personalCurrent.avatar ? (
                    <>
                      <Image
                        src={personalCurrent.avatar.croppedImageUrl}
                        alt="Preview"
                        width={500}
                        height={500}
                        sizes="(max-width: 52rem) 90vw, 48rem"
                        priority
                      />
                      <Icon
                        className="iconClose"
                        icon="fa6-solid:xmark"
                        onClick={handleDeleteImage}
                      />
                    </>
                  ) : (
                    <>
                      <Icon className="iconPhoto" icon="fa6-solid:camera" />
                      <span>Hinzufügen</span>
                      <span>(optional)</span>

                      <input
                        id="avatar"
                        type="file"
                        onChange={handleChangeImage}
                        style={{ display: "none" }}
                      />
                    </>
                  )}
                </label>
              </div>
            </div>
            <div className="form-editor__content__first-line--personalInfo">
              <div className="form-editor__content__grid--col-2">
                <div className="form-editor__content__input-label-flex">
                  <label htmlFor="first_name">Vorname</label>
                  <input
                    type="text"
                    id="first_name"
                    value={personalCurrent.first_name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-editor__content__input-label-flex">
                  <label htmlFor="last_name">Nachname</label>
                  <input
                    type="text"
                    id="last_name"
                    value={personalCurrent.last_name}
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
                    value={personalCurrent.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-editor__content__input-label-flex">
                  <label htmlFor="phone">Telefon</label>
                  <input
                    type="text"
                    id="phone"
                    value={personalCurrent.phone}
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
                  value={personalCurrent.street}
                  onChange={handleChange}
                />
              </div>
              <div className="form-editor__content__input-label-flex">
                <label htmlFor="zip_code">Postleitzahl</label>
                <input
                  type="text"
                  id="zip_code"
                  value={personalCurrent.zip_code}
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
                  value={personalCurrent.city}
                  onChange={handleChange}
                />
              </div>
              <div className="form-editor__content__input-label-flex">
                <label htmlFor="country">Land</label>
                <input
                  type="text"
                  id="country"
                  value={personalCurrent.country}
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
                value={personalCurrent.qualification}
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
                  value={personalCurrent.birthday}
                  onChange={handleChange}
                />
              </div>
              <div className="form-editor__content__input-label-flex">
                <label htmlFor="place_of_birth">Geburtsort</label>
                <input
                  type="text"
                  id="place_of_birth"
                  value={personalCurrent.place_of_birth}
                  onChange={handleChange}
                />
              </div>
              <div className="form-editor__content__input-label-flex">
                <label htmlFor="gender">Geschlect</label>
                <select
                  className="form-select-custom"
                  id="gender"
                  value={personalCurrent.gender}
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
                  value={personalCurrent.website}
                  onChange={handleChange}
                />
              </div>
              <div className="form-editor__content__input-label-flex">
                <label htmlFor="linkedin">LinkedIn-Profil-Link</label>
                <input
                  type="text"
                  id="linkedin"
                  value={personalCurrent.linkedin}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </form>
      </motion.div>
      <NextStepButton
        handleSubmit={handleSubmit}
        text="Weiter"
        icon="fa6-solid:arrow-right"
      />
    </div>
  );
}
