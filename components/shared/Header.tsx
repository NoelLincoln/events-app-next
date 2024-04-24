import Image from 'next/image';
import logo from '@/public/assets/images/logo.png';
// import logo from '../../public/assets/images/logo.png';
import Link from 'next/link';
import { SignedOut } from '@clerk/nextjs';
import { SignedIn } from '@clerk/nextjs';
import { UserButton } from '@clerk/nextjs';
import NavItems from './NavItems';
import MobileNav from './MobileNav';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          <Image src={logo} width={128} height={38} alt="TechTide Meetups" />
        </Link>
        <SignedIn>
          <nav className="md:flex-between hidden w-full max-w-xs">
            <NavItems />
          </nav>
        </SignedIn>
        <div className="flex w-32 justify-end gap-3">
          <SignedIn>
            <UserButton afterSignOutUrl="/"></UserButton>
            <MobileNav />
          </SignedIn>

          <SignedOut>
            <Button asChild className="size-lg rounded-full">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Header;
