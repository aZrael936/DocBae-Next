import React from 'react';

const ServiceMask = ({ isHovering }) => {
  return (
    <div
      className={`absolute top-0 left-0 w-full h-full bg-gradient-to-b rounded-xl ${
        isHovering
          ? 'from-[#000000bf] to-[#000000bf]'
          : 'from-[#00000034] to-[#000]'
      }`}
    />
  );
};

export default ServiceMask;
