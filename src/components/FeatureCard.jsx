export default function FeatureCard({ title, description }) {
    return (
      <div className="bg-white p-6 rounded-xl shadow-md text-left">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    );
  }