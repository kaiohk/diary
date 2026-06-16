import Link from "next/link";
import Image from "next/image";

interface WritingsProps {
  title: string;
  description: string;
  date: string;
  image: string;
  imageAlt: string;
  slug: string;
}

export function Writings({
  title,
  description,
  date,
  image,
  imageAlt,
  slug,
}: WritingsProps) {
  return (
    <div className="w-full sm:w-155">
      <Link className="flex justify-center w-full" href={`/posts/${slug}`}>
        <div className="flex justify-between w-full text-white cursor-pointer transition duration-300 hover:scale-101">
          <div className="flex flex-col justify-center gap-1 w-2/3 sm:w-full">
            <h1 className="font-bold text-lg sm:text-2xl">{title}</h1>
            <p className="text-sm text-secondary md:text-base sm:text-base">
              {description}
            </p>
            <span className="text-sm text-secondary md:text-base sm:text-base">
              {date}
            </span>
          </div>
          <Image
            src={image}
            alt={imageAlt}
            width={350}
            height={350}
            className="w-1/3"
          />
        </div>
      </Link>
      <div className="flex justify-center opacity-10 md:flex md:justify-center md:cursor-default sm:flex sm:justify-center">
        <hr className="border-white w-50 mt-10 mb-10 md:w-100 md:mt-15 md:mb-5 sm:w-100 sm:mt-15 sm:mb-5"></hr>
      </div>
    </div>
  );
}
