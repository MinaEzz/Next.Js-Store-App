import Container from "../container/Container.component";
import CartButton from "./cart-button/CartButton.component";
import Logo from "./logo/Logo.component";
import Searchbar from "./searchbar/Searchbar.component";

export default function Navbar() {
  return (
    <nav className="w-full border-b">
      <Container className="flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap gap-4 py-8">
        {/** LOGO */}
        <Logo />
        {/** SEARCHBAR */}
        <Searchbar />
        {/** CART - DARKMODE - LINKS DROPDOWN */}
        <div className="flex gap-4 items-center">
          <CartButton />
        </div>
      </Container>
    </nav>
  );
}
