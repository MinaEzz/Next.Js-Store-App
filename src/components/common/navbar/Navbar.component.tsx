import Container from "../container/Container.component";

export default function Navbar() {
  return (
    <nav className="w-full border-b">
      <Container className="flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap gap-4 py-8">
        {/** LOGO */}
        <div>LOGO</div>
        {/** SEARCHBAR */}
        <div>SEARCHBAR</div>
        {/** CART - DARKMODE - LINKS DROPDOWN */}
        <div className="flex gap-4 items-center">
          CART - DARKMODE - DROPDOWN
        </div>
      </Container>
    </nav>
  );
}
