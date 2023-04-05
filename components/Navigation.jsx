import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import logo from "@/img/logo.png";

export default function Navigation() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  const handleLogoClick = () => {
    if (router.pathname !== "/") {
      setShowModal(true);
    }
  };

  const handleConfirm = () => {
    setShowModal(false);
    router.push("/");
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <>
      <nav className="site-navigation container">
        <Image
          className="site-navigation__logo"
          src={logo}
          alt="cvdock-logo"
          sizes="(max-width: 52rem) 90vw, 48rem"
          priority
          onClick={handleLogoClick}
        />
      </nav>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <p>Möchtest du diese Seite wirklich verlassen?</p>
            <div className="modal-buttons">
              <button onClick={handleConfirm}>Ja</button>
              <button onClick={handleCancel}>Nein</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
