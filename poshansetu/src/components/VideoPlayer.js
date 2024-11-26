import React from 'react';

const VideoPlayer = ({ title, videoSrc }) => {
    return (
        <div className="bg-gray-100 p-4 rounded shadow-md">
            <h3 className="text-lg font-bold mb-4">{title}</h3>
            <video controls className="w-full rounded">
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoPlayer;
