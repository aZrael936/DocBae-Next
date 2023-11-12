import Image from 'next/image';

function Navbar() {
  return (
    <div className="flex items-center justify-center md:justify-between bg-[#FFF6E9] px-10 py-4 rounded-full w-full relative">
      <Image
        className="md:full items-center justify-center md:justify-start"
        alt="Main logo"
        src="/MainLogo.svg"
        width={176}
        height={33}
      />
      <div className="hidden md:inline-flex justify-end items-center gap-x-10">
        <a href="#AboutUS">
          <div className="text-[#151560] font-poppins font-medium text-base">
            About US
          </div>
        </a>
        {/* <div className="text-[#151560] font-poppins font-medium text-base">
          Gallery
        </div> */}
        <a href="#Services">
          <div className="text-[#151560] font-poppins font-medium text-base">
            Services
          </div>
        </a>
        <a href="#FAQ">
          <div className="text-[#151560] font-poppins font-medium text-base">
            FAQ
          </div>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
