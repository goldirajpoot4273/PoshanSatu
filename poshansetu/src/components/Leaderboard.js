import React from 'react';

const Leaderboard = () => {
    const topContributors = [
        { name: 'Alice', score: 150 },
        { name: 'Bob', score: 130 },
        { name: 'Charlie', score: 120 },
    ];

    return (
        <div className="bg-gray-100 p-4 rounded shadow-md">
            <h3 className="text-xl font-bold mb-4">Leaderboard</h3>
            <ul>
                {topContributors.map((contributor, index) => (
                    <li key={index} className="flex justify-between p-2 border-b">
                        <span>{index + 1}. {contributor.name}</span>
                        <span>{contributor.score} points</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Leaderboard;
