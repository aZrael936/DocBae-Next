import React from 'react';
import Image from 'next/image';

interface TestimonialProps {
  text: string;
  photo: string;
  name: string;
  designation: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  text,
  photo,
  name,
  designation,
}) => {
  return (
    <div className="flex flex-col gap-2 flex-1 justify-between md:min-h-[250px] min-w-[200px] max-w-[350px] md:max-w[200px] lg:max-w-[322px] h-80 lg:h-[400px] relative px-[27px] py-[20px] bg-[#2D2D72] rounded-md lg:rounded-lg shadow-md">
      <div className="flex flex-col items-start rounded-full border-[#F2FFA0]">
        <Image src="/Vector.svg" alt="semi-column" height={59} width={56} />
      </div>
      <div className="flex flex-1 flex-col gap-[18px] lg:gap-0 md:justify-between">
        <p className="text-white text-[10px] lg:text-[15px] font-normal text-left">
          {text}
        </p>
        <div className="flex flex-col gap-1">
          <Image
            src={photo}
            alt="Profile"
            className="w-[53px] h-[53px] object-contain rounded-full"
            height={68}
            width={53}
          />
          <p className="font-medium font-poppins text-[12px] text-[#F2F0FE]">
            {name}
          </p>
          <p className="font-normal font-poppins text-[10px] text-[#A7A7A7]">
            {designation}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function TestimonialsContainer() {
  return (
    <div className="flex flex-col bg-gradient-to-b from-[rgb(255,246,233,100)] to-[rgba(255,255,255,0)]">
      <p className="font-bold text-3xl text-center mt-6 text-[#2D2D72]">
        Inspiring health stories
      </p>
      <div className="flex justify-center items-center gap-5 flex-col md:flex-row p-10 w-full">
        <Testimonial
          text="To break stigma of mental health is to open with yourselves and others on stresses, anxieties and feeling, also means seeking help gathering and supporting others who seek help."
          photo="/Test1.avif"
          name="Dr Sumayya Shamsudheen MBBS, MD"
          designation="Psychiatrist"
        />
        <Testimonial
          text="Post operative care under the guidance of a critical care specialist will be a great help for the patients. DoctorBae's assistance can help reduce your Hospital Stay with a Mini Hospital at your Doorstep"
          photo="/Test2.avif"
          name="Dr Deepak Raj KS MBBS, MD"
          designation="Anesthesiology and Critical Care Specialist"
        />
        <Testimonial
          text="Our expert of team is ready to provide you best mark of health care within th field of dermatology followup and skincare need and advises."
          photo="/Test4.avif"
          name="Dr Premjith T.J MBBS, MD, DNB, DVL"
          designation="Dermatology, Venerology & Leprosy Specialist"
        />
        <div className="md:hidden">
          <Testimonial
            text="There is much need for follow-up of any disease by a doctor and patient for a much better treatment results. Home Doctor Services and Online Consultation makes this Easy and Effective"
            photo="/Test3.avif"
            name="Dr Sabreena MBBS, MS"
            designation="ENT Specialist"
          />
        </div>
      </div>
    </div>
  );
}
