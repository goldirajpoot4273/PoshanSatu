import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Quiz from '../components/Quiz';

const Quizzes = () => {
    return (
        <>
            <Navbar />
            <div className="container mx-auto p-8">
                <h2 className="text-3xl font-bold mb-6">Interactive Quizzes</h2>
                <Quiz />
            </div>
            <Footer />
        </>
    );
};

export default Quizzes;
