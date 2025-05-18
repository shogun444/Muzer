export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-400 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Branding */}
        <div>
          <h2 className="text-white text-2xl font-bold mb-3">
            Empowering Creative Potential
          </h2>
          <p className="text-sm">Powered by Music.AI</p>
        </div>

        {/* Locale */}
        <div>
          <h3 className="text-white font-semibold mb-3">Locale</h3>
          <p>English</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-white font-semibold mb-3">Social Media</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-white">Facebook</a></li>
            <li><a href="#" className="hover:text-white">Twitter</a></li>
            <li><a href="#" className="hover:text-white">Instagram</a></li>
            <li><a href="#" className="hover:text-white">YouTube</a></li>
            <li><a href="#" className="hover:text-white">TikTok</a></li>
            <li><a href="#" className="hover:text-white">LinkedIn</a></li>
          </ul>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Company</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-white">How to</a></li>
            <li><a href="#" className="hover:text-white">Made for</a></li>
            <li><a href="#" className="hover:text-white">Products</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 border-t border-neutral-700 pt-6 text-center text-sm text-neutral-500">
        © 2025 Moises Systems, Inc. All rights reserved.
      </div>
    </footer>
  );
}
