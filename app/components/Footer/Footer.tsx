import React from 'react';
// import phoneIcon from '../../assets/phoneIcon.avif';
// import emailIcon from '../../assets/emailI.avif';
// import footerLogoMobile from '../../assets/footerLogoMobile.svg';
// import footerLogo from '../../assets/footerLogo.svg';
// import instagram from '../../assets/instagram.svg';
// import facebook from '../../assets/facebook.svg';
// import twitter from '../../assets/twitter.svg';
// import linkedIn from '../../assets/linkedIn.svg';
import Image from 'next/image';

function Footer() {
  return (
    <footer className="flex flex-col items-center bg-[#2d2d72] gap-12 w-full h-auto py-14 px-[30px] md:px-20">
      <div className="flex flex-col gap-8 justify-center items-center">
        <p className="text-center text-[#f0f0f0] font-poppins font-semibold text-[36px] md:text-[56px] relative w-[fit-content]">
          Experience the future of health
        </p>
        <a
          href="https://wa.me/9539313130?text=Hi%21%20I%20would%20like%20to%20enquire%20about%20your%20Services."
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            role="button"
            className="items-center bg-white text-[#100C06] font-poppins font-semibold text-[16px] md:text-2xl rounded-xl flex justify-center py-5 px-8 duration-300 hover:bg-[#9090c890] border border-solid"
          >
            Book your appointment
          </button>
        </a>
      </div>

      <div className="flex flex-col gap-6 md:flex-row justify-between w-full lg:w-[88%]">
        <Image
          className="w-[180px] h-[36px] flex md:hidden"
          alt="Logo"
          src="/footerLogoMobile.svg"
          width={181}
          height={35}
        />
        <Image
          className="hidden md:flex"
          alt="bigLogo"
          src="/footerLogo.svg"
          width={133}
          height={100}
        />

        <div className="flex flex-col">
          <div className="flex text-[#ffffff] font-poppins font-medium leading-6 flex-start flex-col gap-3 relative">
            <a href="#AboutUS">
              <div className="">About US</div>
            </a>
            <a href="#Services">
              <div className="">Services</div>
            </a>
            <a href="#FAQ">
              <div className="">FAQ</div>
            </a>
          </div>
        </div>
        <div className="flex md:hidden bg-[#FFFFFF40] h-[1px] w-full" />

        <div className="items-center flex gap-2">
          <Image
            className="relative w-[37px] h-[37px]"
            alt="Icon"
            src="/phoneIcon.avif"
            width={46}
            height={46}
          />
          <a href="tel:919539313130">
            <div className="flex flex-col text-[13px] gap-1 text-[#ffffff] font-poppins font-medium leading-6">
              <div className="">Give us a Call</div>
              <div className="">+91 9539313130</div>
            </div>
          </a>
        </div>

        <div className="items-center flex gap-2">
          <Image
            className="relative w-[37px] h-[37px]"
            alt="email icon"
            src="/emailI.avif"
            width={46}
            height={46}
          />
          <a href="mailto:info@doctor-bae.com">
            <div className="flex flex-col text-[13px] gap-1 text-[#ffffff] font-poppins font-medium leading-6">
              <div className="">Email us</div>
              <div className="">info@doctorbae.com</div>
            </div>
          </a>
        </div>
      </div>

      {/* <div className="bg-[#FFFFFF40] h-[1px] w-full" /> */}

      <div className="items-center flex flex-col gap-4 text-center md:text-left md:flex-row justify-between w-full pt-7 border-t border-[#F0F0F0]">
        <div className="flex">
          <div className=" flex flex-col">
            <p className="text-[#f0f0f0] font-inter font-medium text-sm">
              © 2023&nbsp;&nbsp;Wellnexus Health Science LLP. All rights
              reserved
            </p>
          </div>
        </div>
        <div className="flex gap-3 justify-between">
          <Image
            src="/instagram.svg"
            alt="instagramIcon"
            height={20}
            width={20}
          />
          <Image
            src="/facebook.svg"
            alt="facebookIcon"
            height={20}
            width={20}
          />
          <Image src="/twitter.svg" alt="twitterIcon" height={20} width={20} />
          <Image
            src="/linkedIn.svg"
            alt="linkedInIcon"
            height={20}
            width={20}
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
