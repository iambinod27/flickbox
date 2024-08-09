import Image from "next/image";
import Link from "next/link";

const Card = () => {
  return (
    <div className=" max-w-[400px] bg-[#7777]">
      <div className="">
        <Image
          width={500}
          height={500}
          src="https://m.media-amazon.com/images/M/MV5BNzRiMjg0MzUtNTQ1Mi00Y2Q5LWEwM2MtMzUwZDU5NmVjN2NkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
          alt="picture"
          unoptimized
        />
      </div>
      <h3 className="text-[20px] font-[600] leading-normal bg-[#000] p-[5px] text-center">
        DEADPOOL & WOLVERINE
      </h3>
      <div className=" p-[10px] flex gap-[10px] flex-wrap">
        <p className="border border-gold inline-block px-[10px] py-[10px] cursor-pointer">
          12:00 PM
        </p>
        <p className="border border-gold inline-block px-[10px] py-[10px] cursor-pointer">
          4:00 PM
        </p>
        <p className="border border-gold inline-block px-[10px] py-[10px] cursor-pointer">
          8:30 PM
        </p>
      </div>
      <Link
        href="/"
        className="text-center bg-gold text-[#000] py-[10px] block font-[500]"
      >
        See More
      </Link>
    </div>
  );
};
export default Card;
