import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <div className="text-xl font-bold text-primary">SACVPN</div>
      <nav className="space-x-6">
        <Link to="/" className="text-sm hover:underline">Home</Link>
        <Link to="/pricing" className="text-sm hover:underline">Pricing</Link>
        <Link to="/faq" className="text-sm hover:underline">FAQ</Link>
        <Link to="/contact" className="text-sm hover:underline">Contact</Link>
        <Link to="/login" className="text-sm hover:underline">Log In</Link>
      </nav>
    </header>
  );
}
