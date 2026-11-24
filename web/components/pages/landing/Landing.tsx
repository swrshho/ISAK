import ChannelFeedBoard from "@/components/ui/ChannelFeedBoard";

const LandingPage = () => {
    return (
        <div className="flex justify-between items-center">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                <ChannelFeedBoard />
                <ChannelFeedBoard />
            </div>
        </div>

    );
};

export default LandingPage;