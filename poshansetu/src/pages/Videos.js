import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import VideoPlayer from '../components/VideoPlayer';

const Videos = () => {
    return (
        <>
            <Navbar />
            <div className="container mx-auto p-8">
                <h2 className="text-3xl font-bold mb-6">Video Courses</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <VideoPlayer title="Nutrition for Infants" videoSrc="video1.mp4" />
                    <VideoPlayer title="Healthy Child Growth" videoSrc="video2.mp4" />
                    <VideoPlayer title="Tips for New Mothers" videoSrc="video3.mp4" />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Videos;
