import React from 'react';
import Image from 'next/image';

const FeaturedPost = ({ title, img }) => {
  return (
    <div className="flex items-start space-x-3">
      <div className={`flex-shrink-0  rounded-lg flex items-center justify-center`}>
        <Image src={img} alt="Modern Office Environment" width={85} height={85} className='rounded-lg' />
      </div>
      <div className="flex-1 justify-center">
        <h3 className="text-sm font-medium   text-gray-900 leading-tight">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default FeaturedPost; 