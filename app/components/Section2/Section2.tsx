import Image from "next/image";

function SecondSection() {
  const services = [
    {
      icon: "/Icon1.svg",
      title: "Regular Health Monitoring:",
      description:
        "Regular health checkups and assessments conducted on campus to track and maintain student wellbeing throughout the school year.",
    },
    {
      icon: "/Icon2.svg",
      title: "Mental Health Support:",
      description:
        "Dedicated counseling and support programs to address stress, anxiety, and other mental health concerns affecting academic performance.",
    },
    {
      icon: "/Icon3.svg",
      title: "Health Education & Prevention:",
      description:
        "Comprehensive health education initiatives teaching students about nutrition, hygiene, first aid, and preventive healthcare measures for lifelong wellness.",
    },
  ];

  return (
    <div
      id="AboutUS"
      className="bg-gradient-to-b from-[rgba(255,255,255,1)] to-[#FFF6E9] px-4 md:px-[80px] py-8 md:py-[80px] w-full"
    >
      <div className="flex flex-col-reverse lg:flex-row gap-6 md:gap-12 items-center justify-between">
        <div className="flex flex-col gap-6 md:gap-8">
          <div className="items-start justify-center text-center md:text-left">
            <p className="font-poppins text-2xl md:text-[40px] font-bold leading-6 md:leading-[52px]">
              <span className="text-[#17181c]">School </span>
              <span className="text-[#151560]">Health Program</span>
            </p>
          </div>
          <p className="font-poppins text-[#421b0a] text-center md:text-left text-sm md:text-base font-medium leading-5 md:leading-[23.4px] ">
            Our School Health Program is designed to create a healthier learning
            environment by addressing both the physical and mental wellbeing of
            students. Through regular monitoring, education, and preventive
            care, we help build the foundation for academic success and lifelong
            health habits. Our team of healthcare professionals works closely
            with school staff to implement a comprehensive approach tailored to
            each institution&apos;s unique needs.
          </p>
          <p className="text-gray-600">
            Let&apos;s work together to create a healthier future
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
          alt="Shool checkup"
          src="/img_1.jpeg"
          height={450}
          width={450}
        />
      </div>
    </div>
  );
}

export default SecondSection;
