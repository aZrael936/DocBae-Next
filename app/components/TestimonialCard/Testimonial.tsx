import React from 'react';
import Image from 'next/image';

interface TestimonialProps {
  text: string;
  photo: string;
  name: string;
  designation: string;
}

const testimonials = [
  {
    text: 'Emphasizing home doctor visits for mental health, we provide discreet and compassionate palliative care, ensuring comfort and fostering wellbeing in your home environment, tailored to your schedule for ultimate convenience.',
    photo: '/Test1.avif',
    name: 'Dr Sumayya Shamsudheen MBBS, MD',
    designation: 'Psychiatrist',
  },
  {
    text: 'Specializing in post-op care, our critical care specialists support recovery with home doctor visits, reducing hospital stays with quality medical equipment rental, ensuring continuous and personalized healthcare services.',
    photo: '/Test2.avif',
    name: 'Dr Deepak Raj KS MBBS, MD',
    designation: 'Anesthesiology and Critical Care Specialist',
  },
  {
    text: 'Our online consultations bring dermatological expertise to your doorstep. We provide follow-up skincare advice, prescription delivery, and support for post-treatment care with the ease of medicine delivery services.',
    photo: '/Test4.avif',
    name: 'Dr Premjith T.J MBBS, MD, DNB, DVL',
    designation: 'Dermatology, Venerology & Leprosy Specialist',
  },
  {
    text: 'Enhancing ENT care with home doctor services, we offer comprehensive online consultations and follow-ups, facilitating post-disease recovery and treatment effectiveness, supported by WhatsApp consultations for immediate attention.',
    photo: '/Test3.avif',
    name: 'Dr Sabreena MBBS, MS',
    designation: 'ENT Specialist',
    hiddenOnDesktop: true,
  },
];

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
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`flex ${testimonial.hiddenOnDesktop ? 'md:hidden' : ''}`}
          >
            <Testimonial
              text={testimonial.text}
              photo={testimonial.photo}
              name={testimonial.name}
              designation={testimonial.designation}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
