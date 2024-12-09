import videos from "../lib/videos.json";
const getAllvideos = () => {
    return videos
}

const getPhotoById = (videoId) => {

    return videos.find(video => video.videoId === videoId);
}
const deleteVideoById = async (id) => {
    const videoIndex = videos.findIndex((video) => video.videoId === id);
    const deletedVideo = videos[videoIndex]
    videos.splice(videoIndex, 1)
    return deletedVideo;
};
const updateData = async (id, request) => {
    const newContent = await request.json();
    const contentIndex = videos.findIndex((video) => video.videoId === id);
    if (Object.keys(newContent).length > 2 ||
        !('title' in newContent) ||
        !('description' in newContent)) {
        throw new Error('Invalid update data: Only title and description are allowed');
    } else {
        // Handle the case where the video with the given ID is not found
        const videoToUpdate = videos[contentIndex];
        // Update only the specified properties
        videoToUpdate.title = newContent.title;
        videoToUpdate.description = newContent.description;
        return videoToUpdate;
    }
};
export {
    getAllvideos,
    getPhotoById,
    deleteVideoById,
    updateData
};

