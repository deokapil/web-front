// components/Footer.js
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Address Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Our Office</h3>
          <p>1234 Business St,</p>
          <p>City, Country, 56789</p>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <p>
            Email:{" "}
            <a href="mailto:info@sabhiv.com" className="underline">
              info@sabhiv.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href="tel:+1234567890" className="underline">
              +1 (234) 567-890
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href="tel:+0987654321" className="underline">
              +0 (987) 654-321
            </a>
          </p>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="#work">Area of Work</Link>
            </li>
            <li>
              <Link href="#expertise">Expertise</Link>
            </li>
            <li>
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-8 text-sm text-gray-400">
        © {new Date().getFullYear()} SEPL. All rights reserved.
      </div>
    </footer>
  );
}
