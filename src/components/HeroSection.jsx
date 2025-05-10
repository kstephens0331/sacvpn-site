import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="bg-gray-100 py-24 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold text-gray-800 mb-6">
          Self-Hosted. Automated. Scalable.
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          SACVPN is your private, high-performance VPN built on WireGuard and hardened for real privacy.
        </p>
        <Link
          to="/pricing"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-xl text-lg hover:bg-blue-700 transition"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}
