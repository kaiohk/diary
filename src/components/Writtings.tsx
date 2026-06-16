import Link from "next/link";

interface WrittingsProps {
  title: string;
  description: string;
  date: string;
  image: string;
  imageAlt: string;
  slug: string;
}

export function Writtings({
  title,
  description,
  date,
  image,
  imageAlt,
  slug,
}: WrittingsProps) {
  return (
    <div className="min-w-screen flex justify-center">
      <Link href="/">
        <div className="bg-black-600 w-155 pl-4 pr-4 h-60 flex justify-center text-white cursor-pointer transition duration-300 hover:scale-101">
          <div className="w-full flex flex-col gap-2 mr -10">
            <h1 className="flex flex-col mt-20 text-white font-bold text-2xl">
              {title}
            </h1>
            <p className="text-secondary">{description}</p>
            <span className="text-secondary">{date}</span>
          </div>
          <div>
            <img src={image} alt={imageAlt} className="w-75 mt-15" />
          </div>
        </div>
        <div className="flex justify-center opacity-10 cursor-default">
          <hr className="border-white w-100 mt-15 mb-5"></hr>
        </div>
      </Link>
    </div>
  );
}
