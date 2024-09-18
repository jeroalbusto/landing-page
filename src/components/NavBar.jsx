import logoUrl from "../assets/logo.png";

const NavBAR = () => {
  return (
    <div className="sticky inset-x-0 top-0 w-full z-30">
      <div className="mx-auto w-full max-w-screen-xl px-2.5 lg:px-20 relative">
        <div className="flex items-center justify-between">
          <div>
            <img src={logoUrl} alt="logo" className="h-20 w-20" />
          </div>
          <nav>
            <ul className="flex flex-row space-x-4 p-4">
              <li>
                <a href="/" className="text-gray-600">
                  About Us
                </a>
              </li>

              <li>
                <a href="/" className="text-gray-600">
                  Features
                </a>
              </li>

              <li>
                <a href="/" className="text-gray-600">
                  Pricing
                </a>
              </li>
            </ul>
          </nav>
          <div>
            <a className="bg-black px-4 py-2 rounded-md text-white cursor-pointer">
              Login
            </a>
            <a className="bg-black px-4 py-2 rounded-md text-white cursor-pointer ml-2">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBAR;
