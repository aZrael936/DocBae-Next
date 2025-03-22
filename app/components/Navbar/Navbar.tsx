import Image from "next/image";

function Navbar() {
  return (
    <div className="flex items-center justify-center md:justify-between bg-[#FFF6E9] px-10 py-4 rounded-full w-full relative">
      <div className="flex-shrink-0">
        <Image
          className="md:full items-center justify-center md:justify-start"
          alt="Main logo"
          src="/MainLogo.svg"
          width={176}
          height={33}
        />
      </div>

      <div className="hidden md:flex items-center space-x-8 flex-grow justify-center max-w-2xl">
        <a href="#AboutUS">
          <div className="text-[#151560] font-poppins font-medium text-base whitespace-nowrap">
            About Us
          </div>
        </a>
        <a href="#Services">
          <div className="text-[#151560] font-poppins font-medium text-base whitespace-nowrap">
            Services
          </div>
        </a>
        <a href="#FAQ">
          <div className="text-[#151560] font-poppins font-medium text-base whitespace-nowrap">
            FAQ
          </div>
        </a>
      </div>

      <div className="hidden md:block flex-shrink-0">
        <a href="tel:919539313130">
          <div className="text-[#FAFAFA] bg-[#151561] hover:bg-[#20208B] px-6 py-2 font-poppins font-medium text-base rounded-full whitespace-nowrap">
            Call Now
          </div>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
