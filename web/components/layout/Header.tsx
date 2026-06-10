import Link from "next/link";
import Image from "next/image";

const Header = () => {
    return (
        <header className="flex flex-row items-center justify-between px-4 bg-white">
            <div className="font-bold">
                دانشجویان ایرانی شهر کارلسروهه
            </div>

            <Link href="/" className="logo">
                <Image
                    src="/logo.png"
                    alt="ISAK"
                    width={120}
                    height={40}
                    priority
                />
            </Link>

        </header >)
}

export default Header