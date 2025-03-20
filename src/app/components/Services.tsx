import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import dbConnect from "@/lib/dbConnect";

const Services = async () => {
  const data = await dbConnect("services").find({}).toArray()

  return (
    <div>
      <SectionTitle
        sub="Service"
        title="Our Service Area"
        desc="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        {data.map((item) => (
          <div
            key={item._id.toString()}
            className="p-6 border rounded-xl border-[#E8E8E8]"
          >
            <figure className="w-full h-3/4 flex justify-center items-center">
              <Image
                className="w-full h-full object-fit rounded-md"
                src={item.img}
                width={314}
                height={108}
                alt={item.title}
              />
            </figure>
            <h2 className="text-2xl font-semibold my-5">{item.title}</h2>
            <div className="flex items-center justify-between text-[#FF3811]">
              <p className="text-xl font-semibold">Price: ${item.price}</p>
              <Link href={`/services/${item._id}`}>
                <BsArrowRight className="size-6" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
