import Image from "next/image"
import logo from "@/public/assets/images/logo.png"
import Link from "next/link"

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          <Image src={logo} width={128} height={38} alt="TechTide Meetups" />
        </Link>
        <div className="flex w-32 justify-end gap-3">

        </div>
      </div>
    </header>
  );
}

export default Header