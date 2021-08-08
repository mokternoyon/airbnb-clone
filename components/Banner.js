import React from 'react'
import Image from "next/image";


const Banner = (props) => {
  return(
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px]">
        <Image
        src="https://a0.muscache.com/im/pictures/57b9f708-bb12-498c-bc33-769f8fc43e63.jpg"
        layout="fill"
        objectFit="cover"

        />
        <div className="absolute top-1/2 w-full text-center">
            <p>Not Sure Where to Go? Parfect.</p>
            <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 duration-500">I'm Flexible</button>
        </div>
    </div>
   )

 }

export default Banner