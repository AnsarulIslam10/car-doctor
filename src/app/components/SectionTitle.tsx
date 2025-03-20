const SectionTitle = ({
  sub,
  title,
  desc,
}: {
  sub: string;
  title: string;
  desc: string;
}) => {
  return (
    <div className="text-center mt-32 mb-12">
      <p className="text-[#FF3811] text-xl font-semibold">{sub}</p>
      <h1 className="text-[45px] font-semibold">{title}</h1>
      <p className="max-w-lg mx-auto text-gray-400">{desc}</p>
    </div>
  );
};

export default SectionTitle;
