import ChannelFeedBoard from "@/components/ui/ChannelFeedBoard";

const LandingPage = () => {
    return (
        <div className="flex justify-between items-center">
            <div className="flex justify-between items-center gap-4">

                <ChannelFeedBoard />
                <ChannelFeedBoard />
            </div>
        </div>

    );
}

export default LandingPage;