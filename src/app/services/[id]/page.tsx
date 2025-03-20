import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import Image from "next/image";

const ServiceDetails = async ({ params }: { params: { id: string } }) => {
  const p = await params;
  const data = await dbConnect("services").findOne({ _id: new ObjectId(p.id) });

  return (
    <div>
      <section>
        <figure className="flex justify-center w-full relative">
          <Image
            src={"/assets/images/checkout/checkout.png"}
            alt="banner"
            width={1265}
            height={300}
          ></Image>
          <div className="absolute w-full h-full border-red-400 bg-gradient-to-r from-[#151515] to-transparent rounded-xl">
            <div className="w-full h-full flex items-center">
              <div>
                <h1 className="text-5xl font-bold text-white ml-[100px]">
                  Service Details
                </h1>
              </div>
            </div>
          </div>
        </figure>
      </section>
      <section className="mt-[130px]">
        <Image
          src={data?.img}
          alt={data?.title}
          width={752}
          height={400}
          className="rounded-md"
        ></Image>
      </section>
    </div>
  );
};

export default ServiceDetails;
