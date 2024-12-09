import Modal from "@/components/Modal"
import VideoDetails from "@/components/VideoDetails"


const VideoModal = ({ params: { id, lang } }) => {
    return (
        <Modal>
            <VideoDetails id={id} lang={lang} />
        </Modal>
    )
}

export default VideoModal