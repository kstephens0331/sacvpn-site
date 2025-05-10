import React, { useState } from 'react';

export default function Pricing() {
  const [extraKeys, setExtraKeys] = useState(0);
  const [businessTier, setBusinessTier] = useState('40');

  const businessPricing = {
    '40': 50,
    '80': 100,
    '120': 150,
    'Unlimited': 200,
  };

  const personalBase = 4.99;
  const personalKeyPrice = 1.99;
  const totalPersonal = (extraKeys * personalKeyPrice + personalBase).toFixed(2);

  const topProviders = [
    {
      name: 'SACVPN',
      personal: { price: '$4.99 + $1.99/key', devices: '1+', extra: '✅ Unlimited', realIP: '✅', military: '✅' },
      pro: { price: '$15', devices: '10', admin: '✅', regen: '✅', security: 'Military-Grade' },
      business: { price: '$50 – $200', scale: '✅ 40–Unlimited', subnet: '✅', hosted: '✅', audit: '✅ Admin Logs' }
    },
    {
      name: 'NordVPN',
      personal: { price: '$12.99', devices: '6', extra: '❌', realIP: '❌', military: '❌' },
      pro: { price: '$12.99', devices: '6', admin: '❌', regen: '❌', security: 'Standard' },
      business: { price: '-', scale: '❌', subnet: '❌', hosted: '❌', audit: '❌' }
    },
    {
      name: 'ExpressVPN',
      personal: { price: '$12.95', devices: '8', extra: '❌', realIP: '❌', military: '❌' },
      pro: { price: '$12.95', devices: '8', admin: '❌', regen: '❌', security: 'Standard' },
      business: { price: '-', scale: '❌', subnet: '❌', hosted: '❌', audit: '❌' }
    },
    {
      name: 'Surfshark',
      personal: { price: '$3.99–$12.95', devices: 'Unlimited', extra: '❌', realIP: '❌', military: '❌' },
      pro: { price: '$12.95', devices: 'Unlimited', admin: '❌', regen: '❌', security: 'Standard' },
      business: { price: '$3.99–$12.95', scale: 'Unlimited', subnet: '❌', hosted: '❌', audit: '❌' }
    }
  ];

  return (
    <section className="px-4 py-20 bg-white text-center">
      <h2 className="text-4xl font-bold text-primary mb-4">Our Plans</h2>
      <p className="text-gray-600 mb-12 text-lg">Fair pricing for personal privacy or full-scale deployment.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
        {/* Personal Plan */}
        <div className="border rounded-xl p-6 shadow hover:shadow-lg transition flex flex-col">
          <h3 className="text-2xl font-heading text-primary mb-2">Personal</h3>
          <p className="text-3xl font-bold text-dark mb-2">${totalPersonal}</p>
          <p className="text-sm text-gray-500 mb-4">per month</p>
          <ul className="text-left text-sm space-y-2 mb-6">
            <li>✓ 1 Device Included</li>
            <li>✓ Add Unlimited Extra Keys</li>
            <li>✓ Secure Config + QR</li>
            <li>✓ Unlimited Bandwidth</li>
          </ul>
          <label className="text-sm text-left block mb-2">Add Devices ($1.99 each):</label>
          <input
            type="number"
            min="0"
            max="999"
            value={extraKeys}
            onChange={(e) => setExtraKeys(parseInt(e.target.value) || 0)}
            className="w-full border px-4 py-2 rounded mb-4"
            placeholder="0"
          />
          <button className="bg-accent text-white px-4 py-2 rounded hover:bg-secondary transition mt-auto">
            Choose Personal
          </button>
        </div>

        {/* Pro Plan */}
        <div className="border rounded-xl p-6 shadow hover:shadow-lg transition flex flex-col">
          <h3 className="text-2xl font-heading text-primary mb-2">Pro</h3>
          <p className="text-3xl font-bold text-dark mb-2">$15</p>
          <p className="text-sm text-gray-500 mb-4">per month</p>
          <ul className="text-left text-sm space-y-2 mb-6">
            <li>✓ Up to 10 Devices</li>
            <li>✓ Usage Dashboard & Admin View</li>
            <li>✓ Regenerate Keys + Configs</li>
            <li>✓ Fastlane Bandwidth (Low Latency)</li>
            <li>✓ Designed for Power Users</li>
          </ul>
          <button className="bg-accent text-white px-4 py-2 rounded hover:bg-secondary transition mt-auto">
            Choose Pro
          </button>
        </div>

        {/* Business Plan */}
        <div className="border rounded-xl p-6 shadow hover:shadow-lg transition flex flex-col">
          <h3 className="text-2xl font-heading text-primary mb-2">Business</h3>
          <p className="text-3xl font-bold text-dark mb-2">${businessPricing[businessTier]}</p>
          <p className="text-sm text-gray-500 mb-4">per month</p>
          <ul className="text-left text-sm space-y-2 mb-6">
            <li>✓ {businessTier} Devices</li>
            <li>✓ Custom Subnet + IP Control</li>
            <li>✓ Admin Tools + Usage Logs</li>
            <li>✓ Scalable Deployment</li>
          </ul>
          <label className="text-sm text-left block mb-2">Select Tier:</label>
          <select
            className="w-full border px-4 py-2 rounded mb-4"
            value={businessTier}
            onChange={(e) => setBusinessTier(e.target.value)}
          >
            <option value="40">40 Devices – $50</option>
            <option value="80">80 Devices – $100</option>
            <option value="120">120 Devices – $150</option>
            <option value="Unlimited">Unlimited Devices – $200</option>
          </select>
          <button className="bg-accent text-white px-4 py-2 rounded hover:bg-secondary transition mt-auto">
            Choose Business
          </button>
        </div>
      </div>

      {/* Comparison Tables */}
      <div className="max-w-7xl mx-auto space-y-12">
        <h3 className="text-2xl font-heading text-primary mb-4">Compare by Tier</h3>

        {/* Personal Comparison */}
        <div>
          <h4 className="text-xl font-semibold text-left mb-2">Personal Plan Comparison</h4>
          <table className="min-w-full border text-sm">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="px-4 py-2">Provider</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Devices</th>
                <th className="px-4 py-2">Extra Keys</th>
                <th className="px-4 py-2">Real IP</th>
                <th className="px-4 py-2">Military-Grade Security</th>
              </tr>
            </thead>
            <tbody>
              {topProviders.map((p, i) => (
                <tr key={i} className="border-t">
                  <td className="px-4 py-2 font-semibold">{p.name}</td>
                  <td className="px-4 py-2">{p.personal.price}</td>
                  <td className="px-4 py-2">{p.personal.devices}</td>
                  <td className="px-4 py-2">{p.personal.extra}</td>
                  <td className="px-4 py-2">{p.personal.realIP}</td>
                  <td className="px-4 py-2">{p.personal.military}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pro Comparison */}
        <div>
          <h4 className="text-xl font-semibold text-left mb-2">Pro Plan Comparison</h4>
          <table className="min-w-full border text-sm">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="px-4 py-2">Provider</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Devices</th>
                <th className="px-4 py-2">Admin Tools</th>
                <th className="px-4 py-2">Key Regen</th>
                <th className="px-4 py-2">Security Tier</th>
              </tr>
            </thead>
            <tbody>
              {topProviders.map((p, i) => (
                <tr key={i} className="border-t">
                  <td className="px-4 py-2 font-semibold">{p.name}</td>
                  <td className="px-4 py-2">{p.pro.price}</td>
                  <td className="px-4 py-2">{p.pro.devices}</td>
                  <td className="px-4 py-2">{p.pro.admin}</td>
                  <td className="px-4 py-2">{p.pro.regen}</td>
                  <td className="px-4 py-2">{p.pro.security}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Business Comparison */}
        <div>
          <h4 className="text-xl font-semibold text-left mb-2">Business Plan Comparison</h4>
          <table className="min-w-full border text-sm">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="px-4 py-2">Provider</th>
                <th className="px-4 py-2">Price (40–∞)</th>
                <th className="px-4 py-2">Device Scaling</th>
                <th className="px-4 py-2">Custom Subnet</th>
                <th className="px-4 py-2">Self-Hosted</th>
                <th className="px-4 py-2">Audit Tools</th>
              </tr>
            </thead>
            <tbody>
              {topProviders.map((p, i) => (
                <tr key={i} className="border-t">
                  <td className="px-4 py-2 font-semibold">{p.name}</td>
                  <td className="px-4 py-2">{p.business.price}</td>
                  <td className="px-4 py-2">{p.business.scale}</td>
                  <td className="px-4 py-2">{p.business.subnet}</td>
                  <td className="px-4 py-2">{p.business.hosted}</td>
                  <td className="px-4 py-2">{p.business.audit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}