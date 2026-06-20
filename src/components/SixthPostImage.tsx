import Image from "next/image";

export default function SixthPostImage() {
  return (
    <div className="flex justify-center">
      <Image
        src="/images/eachpost/sixthpostimage.png"
        alt="Kaio Kinoshita with a Dachshund"
        width={550}
        height={550}
      />
    </div>
  );
}
