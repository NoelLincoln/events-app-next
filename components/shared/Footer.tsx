import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/assets/images/logo.svg';

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
          <Image src={logo} alt="logo" width={128} height={38} />
        </Link>

        <p>2024 TechTide MeetUps. All Rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
