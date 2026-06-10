import CardFrame from "./CardFrame";
import telegram from "../../public/telegram.svg"
import Image from "next/image";
import Button from "./Button";

const ChannelFeedBoard = () => {
    return (
        <div className="">
            <CardFrame className="flex justify-between items-center rounded-2xl w-" styleSvg="w-56 md:w-64 lg:w-96">

                <div className="flex flex-row-reverse justify-start items-center px-4 py-9 gap-6 border-b-2 border-b-border-white">
                    <div className="telegram-icon">
                        <Image
                            src={telegram}
                            alt="Telegram Logo"
                            width={32}
                            height={32}
                        />
                    </div>

                    <div>
                        <h2 className="font-bold text-2xl text-space [word-spacing:0.20rem] mb-2">آخرین ها از تلگرام ایزاک</h2>
                        <p className=" text-gray-400 text-sm [word-spacing:0.15rem]">مهمترین اطلاعات و اخبار را از دست ندهید.</p>
                    </div>
                </div>

                <MessageChip />
            </CardFrame>
        </div>
    );
}

const MessageChip = () => {
    return (
        <div className="p-4">
            <time dateTime="2026-01-01" className="text-gray-400 text-sm">۲ روز پیش</time>

            <div className="flex justify-between items-center">
                <p className="[word-spacing:0.15rem]">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
                <Button>
                    بیشتر بخوانید
                </Button>
            </div>
        </div>
    )
}

export default ChannelFeedBoard;