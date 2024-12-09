import Image from "next/image";
import Link from "next/link";

const Video = ({ video }) => {
    return (
        < Link href={`/videos/${video.videoId}`}>
            <div className="rounded-lg overflow-hidden bg-color-gray">
                <Image
                    width={100}
                    height={400}
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-40 object-cover" />
                <div className="p-2">
                    <p className="font-semibold">{video.title}</p>
                    <p className="text-sm text-gray-400">{video.channelTitle}</p>
                </div>
            </div>
        </Link >
    )
}

export default Video