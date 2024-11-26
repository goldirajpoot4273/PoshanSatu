import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Leaderboard from '../components/Leaderboard';

const LeaderboardPage = () => {
    return (
        <>
            <Navbar />
            <div className="container mx-auto p-8">
                <h2 className="text-3xl font-bold mb-6">Top Contributors</h2>
                <Leaderboard />
            </div>
            <Footer />
        </>
    );
};

export default LeaderboardPage;
