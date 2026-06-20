import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  title: string;
  description: string;
  date: string;
  image: string;
  imageAlt: string;
}

export default function Header({
  title,
  description,
  date,
  image,
  imageAlt,
}: HeaderProps) {
  return (
    <div>
      <div className="flex mb-10">
        <Link
          href="/"
          className="flex cursor-pointer transition duration-300 hover:scale-105"
        >
          <img
            src="/arrow-sm-left-svgrepo-com.svg"
            alt="back"
            width={25}
            height={25}
          />

          <span className="text-xl">Home</span>
        </Link>
      </div>
      <div className=" flex flex-col gap-2">
        <h1 className="font-bold text-3xl">{title}</h1>
        <p className="text-secondary">{description}</p>
      </div>
      <div className="flex items-center gap-3 mt-5">
        <Image
          src={image}
          alt={imageAlt}
          width={30}
          height={30}
          className="rounded-full"
        />
        <span className="text-secondary">·</span>
        <p className="text-secondary underline">
          kaio kinoshita · <span className="">{date}</span>
        </p>
      </div>
    </div>
  );
}
