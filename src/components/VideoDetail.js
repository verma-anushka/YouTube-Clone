import React from 'react';

const VideoDetail = ({ video }) => {

    if(!video) {
        return <div>...</div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return (
        <div className="">
            <div className="">
                <iframe title="video player" src={videoSrc} />
            </div>
            <div className="ui segment">
                <h4 className="ui header">
                    {video.snippet.title}
                </h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    );
};
export default VideoDetail;
