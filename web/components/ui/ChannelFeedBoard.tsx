import CardFrame from "./CardFrame";
import telegram from "../../public/telegram.svg";
import Image from "next/image";
import Button from "./Button";

const ChannelFeedBoard = () => {
    return (
        <div className="">
            <CardFrame className="flex justify-between items-center rounded-2xl" styleSvg="w-56 md:w-64 lg:w-96">
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
                <MessageChip />
                <MessageChip />
            </CardFrame>
        </div>
    );
};

const MessageChip = () => {
    return (
        <article className="space-y-2 rounded-xl border border-gray-100 bg-gray-50 p-3 sm:space-y-3 sm:p-4">
            <time
                // dateTime={message.dateTime}
                className="block text-xs text-gray-400 sm:text-sm"
            >
                {/* {message.timeAgo} */}
                ۲ روز پیش
            </time>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <p className="min-w-0 flex-1 text-sm leading-7 [word-spacing:0.1rem] sm:text-base sm:leading-8 sm:[word-spacing:0.15rem]">
                    {/* {message.text} */}
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                    از طراحان گرافیک است. چاپگرها و متون بلکه...
                </p>

                <div className="shrink-1 self-end sm:self-auto">
                    <Button>بیشتر بخوانید</Button>
                </div>
            </div>
        </article>
    );
};
export default ChannelFeedBoard;