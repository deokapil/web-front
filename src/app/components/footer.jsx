// components/Footer.js
import Link from "next/link";
import Logo from "./logo";
import Fspan from "./fspan";
import Social from "./social";

export default function Footer() {
  return (
    <footer className="text-bookmark-white relative z-10 bg-[#090E34] pt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 ">
        {/* Top area: Blocks */}
        <div
          className={`grid gap-10 py-8 sm:grid-cols-12 md:py-12 border-t [border-image:linear-gradient(to_right,transparent,theme(colors.slate.200),transparent)1]`}
        >
          {/* 1st block */}
          <div className="space-y-2 sm:col-span-12 lg:col-span-4">
            <div>
              <Logo light />
            </div>
            <div className="text-sm text-white">
              © {new Date().getFullYear()} SEPL. All rights reserved.
            </div>
          </div>

          {/* 2nd block */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-semibold">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-gray-200 transition hover:text-gray-400"
                  href="#0"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-200 transition hover:text-gray-400"
                  href="#0"
                >
                  Integrations
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-200 transition hover:text-gray-400"
                  href="#0"
                >
                  Pricing & Plans
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-200 transition hover:text-gray-400"
                  href="#0"
                >
                  Changelog
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-200 transition hover:text-gray-400"
                  href="#0"
                >
                  Our method
                </Link>
              </li>
            </ul>
          </div>

          {/* 3rd block */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-semibold">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-gray-200 transition hover:text-gray-400"
                  href="#0"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-200 transition hover:text-gray-400"
                  href="#0"
                >
                  Diversity & Inclusion
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-200 transition hover:text-gray-400"
                  href="#0"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-200 transition hover:text-gray-400"
                  href="#0"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-200 transition hover:text-gray-400"
                  href="#0"
                >
                  Financial statements
                </Link>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-semibold">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-gray-200 transition hover:text-gray-400"
                  href="#0"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-200 transition hover:text-gray-400"
                  href="#0"
                >
                  Terms of service
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-200 transition hover:text-gray-400"
                  href="#0"
                >
                  Report a vulnerability
                </Link>
              </li>
            </ul>
          </div>

          {/* 5th block */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-semibold">Social</h3>
            <Social />
          </div>
        </div>
      </div>
      <Fspan />
    </footer>
  );
}
