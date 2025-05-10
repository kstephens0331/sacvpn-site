import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-sm text-gray-600 py-6 mt-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div>&copy; {new Date().getFullYear()} SACVPN. All rights reserved.</div>
        <nav className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/pricing" className="hover:underline">Pricing</Link>
          <Link to="/faq" className="text-sm hover:underline">FAQ</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
          <Link to="/login" className="hover:underline">Log In</Link>
        </nav>
      </div>
    </footer>
  );
}