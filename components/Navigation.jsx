import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import logo from "@/img/logo.png";
import { useDispatch } from 'react-redux';
import { clearAllData } from '../store';

export default function Navigation() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const handleLogoClick = () => {
    if (router.pathname !== "/") {
      if (localStorage.length > 0) {
        setShowModal(true);
      } else {
        router.push("/");
      }
    }
  };

  const handleConfirm = () => {
    setShowModal(false);
    dispatch(clearAllData()); 
    localStorage.clear();
    router.push("/");
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <>
      <nav className="site-navigation">
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
            <p>Deine Daten werden gelöscht.</p>
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
