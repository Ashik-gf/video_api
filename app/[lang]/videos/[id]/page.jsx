import VideoDetails from "@/components/VideoDetails";
import videos from "@/lib/videos.json";
import { notFound } from "next/navigation";
const PhotoDetailsPage = ({ params: { id, lang } }) => {

    return (
        <div>
            <VideoDetails id={id} lang={lang} />
        </div>
    )
}

export default PhotoDetailsPage