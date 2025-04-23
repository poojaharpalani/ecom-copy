import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer
      className="py-7 px-4 bg-cover bg-center"
      style={{ backgroundImage: "url('/paper-envelope.webp')" }}
    >
      {/* Desktop/Tablet Layout - Hidden on small screens */}
      <div className="hidden sm:block container lg:mx-auto lg:max-w-6xl lg:flex lg:flex-row lg:justify-between lg:items-center text-white lg:text-sm md:flex md:flex-col md:gap-5">
        {/* Left Section */}
        <div className="flex flex-wrap w-full md:w-3/4 gap-8">
          {/* Grouped Columns */}
          <div className="flex flex-wrap gap-8 w-full md:w-auto">
            {/* First Column */}
            <div>
              <ul>
                <li className="mb-1">
                  <Link href="#" className="hover:text-amber-700">
                    Shop
                  </Link>
                </li>
                <li className="mb-1">
                  <Link href="#" className="hover:text-amber-700">
                    Stockists
                  </Link>
                </li>
                <li className="mb-1">
                  <Link href="#" className="hover:text-amber-700">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Second Column */}
            <div>
              <ul>
                <li className="mb-1">
                  <Link href="#" className="hover:text-amber-700">
                    About
                  </Link>
                </li>
                <li className="mb-1">
                  <Link href="#" className="hover:text-amber-700">
                    Campaigns
                  </Link>
                </li>
                <li className="mb-1">
                  <Link href="#" className="hover:text-amber-700">
                    Press
                  </Link>
                </li>
              </ul>
            </div>

            {/* Third Column */}
            <div>
              <ul>
                <li className="mb-1">
                  <Link href="#" className="hover:text-amber-700">
                    Delivery & Returns
                  </Link>
                </li>
                <li className="mb-1">
                  <Link href="#" className="hover:text-amber-700">
                    Terms & Conditions
                  </Link>
                </li>
                <li className="mb-1">
                  <Link href="#" className="hover:text-amber-700">
                    Privacy & Cookies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/4 lg:text-right">
          <p className="text-xs">
            © {new Date().getFullYear()} Graeme Morton. All rights reserved
          </p>
        </div>
      </div>

      {/* Mobile Layout - Only visible on small screens */}
      <div className="block sm:hidden container mx-auto">
        <div className="flex flex-row justify-between text-white">
          {/* Left Column */}
          <div className="flex flex-col">
            <ul>
              <li className="mb-2">
                <Link href="#" className="hover:text-amber-700 text-sm">
                  Shop
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="hover:text-amber-700 text-sm">
                  Stockists
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="hover:text-amber-700 text-sm">
                  Contact
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="hover:text-amber-700 text-sm">
                  About
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="hover:text-amber-700 text-sm">
                  Campaigns
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="hover:text-amber-700 text-sm">
                  Press
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Column */}
          <div className="flex flex-col">
            <ul>
              <li className="mb-2">
                <Link href="#" className="hover:text-amber-700 text-sm">
                  Delivery & Returns
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="hover:text-amber-700 text-sm">
                  Terms & Conditions
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="hover:text-amber-700 text-sm">
                  Privacy & Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright for mobile */}
        <div className="mt-6">
          <p className="text-xs text-white">
            © {new Date().getFullYear()} Graeme Morton. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
