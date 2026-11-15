import Link from "next/link";
import Image from "next/image";

const TitleLogo = () => {
  return (
    <Link href="/" className="logo flex flex-row items-center gap-1">
      <Image src="/logo.webp" alt="ISAK" width={90} height={30} priority />

      <div className="">
        <h1 className="font-bold flex flex-col items-start">
          کارلسروهه{" "}
          <small className="font-normal text-neutral-500">
            دانشجویان ایرانی
          </small>
        </h1>
      </div>
    </Link>
  );
};

export default TitleLogo;
