export default function TermsOfService() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] text-white py-16">
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <h1 className="mb-6 text-4xl font-bold text-[#F9C81B]">Terms of Service</h1>
        <p className="mb-4">
          By accessing or using the Bhutly website, you agree to be bound by these Terms of Service.
        </p>
        <p className="mb-4">
          <strong>Use of Service</strong>: You may use the service for lawful purposes only. Any misuse,
          including but not limited to hacking, spamming, or violating third‑party rights, is strictly prohibited.
        </p>
        <p className="mb-4">
          <strong>Intellectual Property</strong>: All content, designs, and code on this site are the property of
          Bhutly unless otherwise noted. You may not reproduce, distribute, or create derivative works without
          explicit permission.
        </p>
        <p className="mb-4">
          <strong>Limitation of Liability</strong>: Bhutly is not liable for any indirect, incidental, or consequential
          damages arising from your use of the site.
        </p>
        <p className="mb-4">
          <strong>Changes to Terms</strong>: We may update these terms at any time. Continued use of the site
          after changes constitutes acceptance of the new terms.
        </p>
        <p className="mt-8 text-sm text-white/60">
          © {new Date().getFullYear()} Bhutly. All rights reserved.
        </p>
      </div>
    </section>
  );
}
