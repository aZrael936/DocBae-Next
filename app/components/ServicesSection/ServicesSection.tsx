"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import ServiceMask from "../Mask";

function ServiceSection() {
  const [hoveredCardRow1, setHoveredCardRow1] = useState<string>("");
  const [hoveredCardRow2, setHoveredCardRow2] = useState<string>("");

  return (
    <div
      id="Services"
      className="flex flex-col items-center bg-gradient-to-b from-white via-[#F8F8FF] to-[#FFF6E9] gap-8 px-[20px] py-[48px] md:p-16 w-full"
    >
      <h2 className="text-5xl font-bold text-[#2F2D72]">Services</h2>
      <motion.div
        layout
        className={`grid grid-cols-1 ${
          hoveredCardRow1 ? "md:grid-cols-4" : "md:grid-cols-3"
        } gap-8 w-full`}
      >
        {/* Service 1 */}
        <motion.div
          layout
          onMouseEnter={() => setHoveredCardRow1("service5")}
          onMouseLeave={() => setHoveredCardRow1("")}
          className={`flex relative flex-col gap-2 items-start justify-center md:justify-end px-10 py-4 min-h-[220px] bg-cover rounded-[20px] overflow-hidden  ${
            hoveredCardRow1 === "service5" ? "md:col-span-2" : ""
          }`}
          style={{
            backgroundImage: `url('/service5.avif')`,
          }}
        >
          <motion.h3
            layout="position"
            className="z-[1] text-2xl font-semibold text-white"
          >
            Doctor Bae School <br />
            health programme
          </motion.h3>
          {hoveredCardRow1 === "service5" && (
            <motion.div className="z-[1] flex flex-col gap-2 text-lg">
              <p className="text-white py-4">
                Our comprehensive school health program focuses on
                student&apos;s overall wellbeing through regular health
                screenings, mental wellness support, and preventive care. We
                provide wellness check-ins, mental health workshops, training in
                lifesaving skills, nutrition education, and awareness programs
                throughout the academic year. Our goal is to create a healthy
                learning environment that supports academic success while
                teaching essential health practices.
              </p>
              <a
                href="https://wa.me/9539313130?text=Hi%21%20I%20would%20like%20to%20enquire%20about%20your%20Services."
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-white hover:bg-[#FD8733] text-black hover:text-white border text-sm border-solid rounded-xl h-[38px] min-w-[120px] float-right">
                  Book Now
                </button>
              </a>
            </motion.div>
          )}
          <ServiceMask isHovering={hoveredCardRow1 === "service5"} />
        </motion.div>

        {/* Service 2 */}
        <motion.div
          layout
          onMouseEnter={() => setHoveredCardRow1("service2")}
          onMouseLeave={() => setHoveredCardRow1("")}
          className={`flex relative flex-col gap-2 items-start justify-center md:justify-end px-10 py-4 min-h-[220px] bg-cover rounded-[20px] overflow-hidden  ${
            hoveredCardRow1 === "service2" ? "md:col-span-2" : ""
          }`}
          style={{
            backgroundImage: `url('/service2.avif')`,
          }}
        >
          <ServiceMask isHovering={hoveredCardRow1 === "service2"} />
          <motion.h3
            layout="position"
            className="z-[1] text-2xl font-semibold text-white"
          >
            Online Doctor <br />
            Consultation
          </motion.h3>
          {hoveredCardRow1 === "service2" && (
            <motion.div layout className="z-[1] flex flex-col gap-2 text-lg">
              <p className="text-white">
                Discover Doctor Bae: cutting-edge online consultations. Access
                expert medical advice and prescriptions from home. Address
                health concerns and get prescriptions with top professionals.
                Your healthcare, just a click away!
              </p>
              <a
                href="https://wa.me/9539313130?text=Hi%21%20I%20would%20like%20to%20enquire%20about%20your%20Services."
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-white hover:bg-[#FD8733] text-black hover:text-white border text-sm border-solid rounded-xl h-[38px] min-w-[120px] float-right">
                  Book Now
                </button>
              </a>
            </motion.div>
          )}
        </motion.div>

        {/* Service 3 */}
        <motion.div
          layout
          onMouseEnter={() => setHoveredCardRow1("service1")}
          onMouseLeave={() => setHoveredCardRow1("")}
          className={`flex relative gap-2 flex-col items-start justify-center md:justify-end px-10 py-4 min-h-[220px] bg-cover rounded-[20px] overflow-hidden  ${
            hoveredCardRow1 === "service1" ? "md:col-span-2" : ""
          }`}
          style={{
            backgroundImage: `url('/service1.avif')`,
          }}
        >
          <motion.h3
            layout="position"
            className="z-[1] text-2xl font-semibold text-white"
          >
            Home Doctor <br />
            Services
          </motion.h3>
          {hoveredCardRow1 === "service1" && (
            <motion.div className="z-[1] flex flex-col gap-2 text-lg">
              <p className="text-white">
                From palliative to post-op care, from children to seniors, our
                dedicated medical professionals are always there for you!
              </p>
              <a
                href="https://wa.me/9539313130?text=Hi%21%20I%20would%20like%20to%20enquire%20about%20your%20Services."
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-white hover:bg-[#FD8733] text-black hover:text-white border text-sm border-solid rounded-xl h-[38px] min-w-[120px] float-right">
                  Book Now
                </button>
              </a>
            </motion.div>
          )}
          <ServiceMask isHovering={hoveredCardRow1 === "service1"} />
        </motion.div>
      </motion.div>
      <motion.div
        layout
        className={`grid grid-cols-1 ${
          hoveredCardRow2 ? "md:grid-cols-4" : "md:grid-cols-3"
        } gap-8 w-full`}
      >
        {/* Service 4 */}
        <motion.div
          // layout
          onMouseEnter={() => setHoveredCardRow2("service3")}
          onMouseLeave={() => setHoveredCardRow2("")}
          className={`flex relative gap-2 flex-col items-start justify-center md:justify-end px-10 py-4 min-h-[220px] bg-cover rounded-[20px] overflow-hidden  ${
            hoveredCardRow2 === "service3" ? "md:col-span-2" : ""
          }`}
          style={{
            backgroundImage: `url('/service3.avif')`,
          }}
        >
          <motion.h3
            layout="position"
            className="z-[1] text-2xl font-semibold text-white"
          >
            Free Onsite Medical <br />
            Camp
          </motion.h3>
          {hoveredCardRow2 === "service3" && (
            <motion.div className="z-[1] flex flex-col gap-2 text-lg">
              <p className="text-white">
                Free general body checkup, skilled healthcare professionals wil
                assess your overall health status, checking vital signs and
                through examinations to detect any potential issues early on.
                The vision screening and cataract evaluation help For early
                intervention. Get your blood routine check up done.
              </p>
              <a
                href="https://wa.me/9539313130?text=Hi%21%20I%20would%20like%20to%20enquire%20about%20your%20Services."
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-white hover:bg-[#FD8733] text-black hover:text-white border text-sm border-solid rounded-xl h-[38px] min-w-[120px] float-right">
                  Book Now
                </button>
              </a>
            </motion.div>
          )}
          <ServiceMask isHovering={hoveredCardRow2 === "service3"} />
        </motion.div>

        {/* Service 5 */}
        <motion.div
          layout
          onMouseEnter={() => setHoveredCardRow2("service4")}
          onMouseLeave={() => setHoveredCardRow2("")}
          className={`flex relative gap-2 flex-col items-start justify-center md:justify-end px-10 py-4 min-h-[220px] bg-cover rounded-[20px] overflow-hidden  ${
            hoveredCardRow2 === "service4" ? "md:col-span-2" : ""
          }`}
          style={{
            backgroundImage: `url('/service4.avif')`,
          }}
        >
          <motion.h3
            layout="position"
            className="z-[1] text-2xl font-semibold text-white"
          >
            Accesible and swift <br />
            medical care
          </motion.h3>
          {hoveredCardRow2 === "service4" && (
            <motion.div className="z-[1] flex flex-col gap-2 text-lg">
              <p className="text-gray-600 max-w-2xl mx-auto">
                We&apos;re committed to providing comprehensive healthcare
                services
              </p>
              <p className="text-white">
                Healthcare services designed for quick and easy access, ensuring
                patients receive prompt treatment with minimal barriers,
                reducing wait times and improving overall healthcare
                experiences.
              </p>
              <a
                href="https://wa.me/9539313130?text=Hi%21%20I%20would%20like%20to%20enquire%20about%20your%20Services."
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-white hover:bg-[#FD8733] text-black hover:text-white border text-sm border-solid rounded-xl h-[38px] min-w-[120px] float-right">
                  Book Now
                </button>
              </a>
            </motion.div>
          )}
          <ServiceMask isHovering={hoveredCardRow2 === "service4"} />
        </motion.div>

        {/* Service 6 */}
        <motion.div
          layout
          onMouseEnter={() => setHoveredCardRow2("service6")}
          onMouseLeave={() => setHoveredCardRow2("")}
          className={`flex relative gap-2 flex-col items-start justify-center md:justify-end px-10 py-4 min-h-[220px] bg-cover rounded-[20px] overflow-hidden ${
            hoveredCardRow2 === "service6" ? "md:col-span-2" : ""
          }`}
          style={{
            backgroundImage: `url('/service6.avif')`,
          }}
        >
          <motion.h3
            layout="position"
            className="z-[1] text-2xl font-semibold text-white"
          >
            Customised health <br />
            Centres at <br />
            institutions
          </motion.h3>
          {hoveredCardRow2 === "service6" && (
            <motion.div className="z-[1] flex flex-col gap-2 text-lg">
              <p className="text-white">
                Specialized healthcare facilities tailored to meet the specific
                needs of organizations, providing targeted medical services
                designed around the unique requirements of schools,
                universities, corporations, or other institutions.
              </p>
              <a
                href="https://wa.me/9539313130?text=Hi%21%20I%20would%20like%20to%20enquire%20about%20your%20Services."
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-white hover:bg-[#FD8733] text-black hover:text-white border text-sm border-solid rounded-xl h-[38px] min-w-[120px] float-right">
                  Book Now
                </button>
              </a>
            </motion.div>
          )}
          <ServiceMask isHovering={hoveredCardRow2 === "service6"} />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default ServiceSection;
