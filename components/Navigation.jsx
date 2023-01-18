import Link from "next/link";
import Image from "next/image";
import logo from "@/img/logo.png";

export default function Navigation() {
  return (
    <nav className="site-navigation">
      <Link href="/">
        <Image
          className="site-navigation__logo"
          src={logo}
          alt="cvdock-logo"
          sizes="(max-width: 52rem) 90vw, 48rem"
        />
      </Link>
    </nav>
  );
}
