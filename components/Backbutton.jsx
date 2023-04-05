import { useRouter } from "next/router";
import { Icon } from "@iconify/react";

export default function BackButton() {
  const router = useRouter();

  function handleClick() {
    router.back();
  }

  return (
    <div
      onClick={handleClick}
      className="back_button"
    >
      <Icon icon="fa-solid:arrow-left" className="back-button__icon" />
    </div>
  );
}
