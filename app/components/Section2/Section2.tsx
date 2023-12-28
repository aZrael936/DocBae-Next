import Image from "next/image";

function SecondSection() {
  const services = [
    {
      icon: "/Icon1.svg",
      title: "Convenient Home Visits:",
      description:
        "Hassle-free doctor visits at home for routine checks and specialized care.",
    },
    {
      icon: "/Icon2.svg",
      title: "Online & WhatsApp Consultation:",
      description:
        "Expert medical advice via video, chat, or WhatsApp, providing quick and reliable access.",
    },
    {
      icon: "/Icon3.svg",
      title: "Comprehensive Elderly Care:",
      description:
        "From daily assistance to expert palliative care, we cater to every aspect of senior well-being, fostering comfort, dignity, and peace of mind in the familiar surroundings of home.",
    },
  ];

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
            As innovators in healthcare, Doctor Bae brings essential medical
            services to your doorstep. Specializing in Home Doctor and Online
            Consultations, we blend advanced technology with personalized care,
            ensuring convenient and comprehensive healthcare solutions for
            Thrissur residents.
          </p>
          <div className="flex gap-6 flex-col relative">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-2 md:gap-4 items-center md:items-start relative"
              >
                <Image
                  className="w-[40px] md:w-[44.5px] h-[40px] md:h-[44.5px] relative"
                  alt={`Icon ${index + 1}`}
                  src={service.icon}
                  width={40}
                  height={40}
                />
                <p className="font-poppins text-[#421b0a] md:text-base font-medium leading-[23.4px] relative text-sm text-center max-w-[272px] md:max-w-full md:text-left">
                  <b>{service.title}</b> {service.description}
                </p>
              </div>
            ))}
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
