export default function Faq() {
  const faqList = [
    {
      q: "How do I set up SACVPN on my device?",
      a: (
        <>
          <p className="mb-2">SACVPN uses the WireGuard protocol, which is supported on all major platforms. After receiving your configuration file or QR code:</p>
          <ul className="list-disc list-inside">
            <li><strong>iOS/Android:</strong> Download the WireGuard app, tap '+', then scan the QR code we emailed you.</li>
            <li><strong>Windows/macOS:</strong> Download WireGuard from wireguard.com/install, then import the .conf file.</li>
          </ul>
        </>
      )
    },
    {
      q: "Where do I find my config files or QR codes?",
      a: "After payment, we email your device configuration. If not received, check spam or regenerate it from your client portal."
    },
    {
      q: "Can I add more devices (keys) later?",
      a: "Yes. Personal plans allow unlimited keys ($1 each). You can add more keys via the client dashboard."
    },
    {
      q: "Does SACVPN work in restricted countries like China or UAE?",
      a: "Yes, with our optional stealth module or Tor routing. Business plans support obfuscated tunnels on request."
    },
    {
      q: "Is my data encrypted and private?",
      a: "All connections use end-to-end encryption (ChaCha20 + Poly1305 via WireGuard). SACVPN stores no logs, no traffic, and no metadata."
    },
    {
      q: "How secure is SACVPN compared to other VPNs?",
      a: (
        <>
          <p className="mb-2">SACVPN uses military-grade practices:</p>
          <ul className="list-disc list-inside">
            <li>TPM-secured boot, AES-256 full disk encryption</li>
            <li>Zero-trust SSH with expiring keys</li>
            <li>No cloud dependency — self-hosted with private subnets</li>
          </ul>
        </>
      )
    },
    {
      q: "How does billing work?",
      a: "Monthly billing via Stripe. Add-ons (keys or tiers) are billed as needed. Cancel or adjust anytime from your account portal."
    },
    {
      q: "Can I use SACVPN on a router?",
      a: "Yes — import your .conf file to any router that supports WireGuard (OpenWRT, DD-WRT, pfSense, etc)."
    },
    {
      q: "What if I lose my config or QR code?",
      a: "You can regenerate it from your portal or contact support. You’ll receive a new download and QR."
    },
    {
      q: "Can I white-label or resell SACVPN?",
      a: "Yes — Business and Partner tiers support custom branding and bulk key provisioning."
    }
  ];

  return (
    <section className="px-4 py-20 bg-white">
      <h1 className="text-3xl font-bold text-center text-primary mb-10">Frequently Asked Questions</h1>
      <div className="max-w-4xl mx-auto space-y-4">
        {faqList.map(({ q, a }, i) => (
          <details key={i} className="border rounded-lg p-4">
            <summary className="font-medium text-left text-primary cursor-pointer">{q}</summary>
            <div className="mt-2 text-sm text-gray-700">{a}</div>
          </details>
        ))}
      </div>
    </section>
  );
}
