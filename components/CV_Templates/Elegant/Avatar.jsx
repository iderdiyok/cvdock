import Image from "next/image";
import React from "react";

export default function Avatar({ avatar }) {
  return (
    // eslint-disable-next-line react/jsx-no-undef
    <Image
      src={
        avatar?.croppedImageUrl
          ? avatar.croppedImageUrl
          : "/img/no_image.jpg"
      }
      alt="avatar"
      width="250"
      height="250"
    />
  );
}
