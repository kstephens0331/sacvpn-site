import FeatureCard from './FeatureCard';

const features = [
  { title: "WireGuard-Based", description: "Modern, fast VPN tunnel with high performance encryption." },
  { title: "Self-Hosted", description: "Complete control over your VPN. No cloud dependencies." },
  { title: "Automated Client Setup", description: "Bash scripts create configs, IPs, and QR codes instantly." },
  { title: "Scalable", description: "Supports from 10 to 5000+ clients across any use case." },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Core Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <FeatureCard key={i} title={f.title} description={f.description} />
          ))}
        </div>
      </div>
    </section>
  );
}