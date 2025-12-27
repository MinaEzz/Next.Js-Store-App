import Container from "../container/Container.component";
import CartButton from "./cart-button/CartButton.component";
import LinksDropdown from "./links-dropdown/LinksDropdown.component";
import Logo from "./logo/Logo.component";
import Searchbar from "./searchbar/Searchbar.component";
import ThemeDropdown from "./theme-dropdown/ThemeDropdown.component";
import { Suspense } from "react";

export default function Navbar() {
  return (
    <nav className="w-full border-b">
      <Container className="flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap gap-4 py-8">
        {/** LOGO */}
        <Logo />
        {/** SEARCHBAR */}
        <Suspense>
          <Searchbar />
        </Suspense>
        {/** CART - THEME DROPDOWN - LINKS DROPDOWN */}
        <div className="flex gap-4 items-center">
          <CartButton />
          <ThemeDropdown />
          <LinksDropdown />
        </div>
      </Container>
    </nav>
  );
}
