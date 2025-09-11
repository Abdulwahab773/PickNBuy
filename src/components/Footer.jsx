function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white mt-16">
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-3">PickNBuy</h2>
          <p className="text-sm opacity-80">
            Your trusted online marketplace for premium shopping experience.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:underline cursor-pointer">Home</li>
            <li className="hover:underline cursor-pointer">Categories</li>
            <li className="hover:underline cursor-pointer">Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Contact Us</h3>
          <p className="text-sm">Email: support@picknbuy.com</p>
          <p className="text-sm">Phone: +92 300 1234567</p>
        </div>
      </div>
      <div className="border-t border-white/20 py-4 text-center text-sm opacity-80">
        © {new Date().getFullYear()} PickNBuy. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
