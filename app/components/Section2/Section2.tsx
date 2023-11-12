import Image from 'next/image';

function SecondSection() {
  return (
    <div
      id="AboutUS"
      className=" bg-gradient-to-b from-white to-[#FFF6E9] px-4 md:px-[80px] py-4 md:py-[60px] w-full"
    >
      <div className="flex flex-col-reverse lg:flex-row gap-6 md:gap-12 items-center justify-between">
        <div className="flex flex-col gap-6 md:gap-8">
          <div className="items-start justify-center text-center md:text-left">
            <p className="font-poppins text-2xl md:text-[40px] font-bold leading-6 md:leading-[52px]">
              <span className="text-[#17181c]">Why </span>
              <span className="text-[#151560]">Doctor Bae ?</span>
            </p>
          </div>
          <p className="font-poppins text-[#421b0a] text-center md:text-left text-sm md:text-base font-medium leading-5 md:leading-[23.4px] ">
            Initiative by wellnexus health science LLP stands as an innovative
            and trailblazing entity in the field of health care, propelled by a
            resolute mission to elevate healthcare across multi faceted
            dimensions. Our foundation rests on an unwavering dedication to
            attaining comprehensive health outcomes, with technology and
            hands-on professional medical care intricately woven in to the
            fabric of our approach.
          </p>
          <div className="flex gap-6 flex-col relative">
            <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center md:items-start relative">
              <Image
                className="w-[40px] md:w-[44.5px] h-[40px] md:h-[44.5px] relative"
                alt="Icon1"
                src="/Icon1.svg"
                width={40}
                height={40}
              />
              <p className="font-poppins text-[#421b0a] md:text-base font-medium leading-[23.4px] relative text-sm text-center max-w-[272px] md:max-w-full md:text-left">
                Avoid the hassle of traveling to a clinic or hospital. We bring
                medical expertise to your doorstep
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center md:items-start justify-start relative">
              <Image
                className="w-[40px] md:w-[44.5px] h-[40px] md:h-[44.5px] relative"
                alt="Icon2"
                src="/Icon2.svg"
                width={40}
                height={40}
              />
              <p className="font-poppins text-[#421b0a] md:text-base font-medium leading-[23.4px]  relative text-sm text-center max-w-[272px] md:max-w-full md:text-left">
                Access medical advice, diagnoses, prescriptions from home via
                video calls, chat, or phone with specialists.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center md:items-start justify-start relative">
              <Image alt="Icon3" src="/Icon3.svg" width={40} height={40} />
              <p className="font-poppins text-[#421b0a] md:text-base font-medium leading-[23.4px] relative text-sm text-center max-w-[272px] md:max-w-full md:text-left">
                Schedule appointments to fit your routine, No need to disrupt
                your daily routine; healthcare comes to you.
              </p>
            </div>
          </div>
        </div>
        <Image
          className="lg:min-w-[450px] max-w-full border-[3px] rounded-[12px] overflow-hidden border-[#E25E3E] relative mt-4 md:mt-0"
          alt="Happy male doctor"
          src="/sectionTwo.avif"
          height={450}
          width={450}
        />
      </div>
    </div>
  );
}

export default SecondSection;
