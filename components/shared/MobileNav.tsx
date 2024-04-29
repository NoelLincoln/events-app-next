import React from 'react';
import Image from 'next/image';
import menu_icon from '@/public/assets/icons/menu.svg';
import logo from '@/public/assets/images/logo.svg';
import NavItems from '@/components/shared/NavItems';
import { Separator } from '@/components/ui/separator';

import { Sheet } from '@/components/ui/sheet';
import { SheetTrigger } from '@/components/ui/sheet';
import { SheetContent } from '@/components/ui/sheet';

const MobileNav = () => {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          <Image
            src={menu_icon}
            alt="menu"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
          <Image src={logo} alt="logo" width={128} height={38} />
          <Separator />
          <NavItems />
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
