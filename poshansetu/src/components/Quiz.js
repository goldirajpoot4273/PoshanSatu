import React, { useState } from 'react';

const Quiz = () => {
    const questions = [
        {
            question: "Which vitamin is crucial for bone development in infants?",
            options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
            answer: "Vitamin D"
        },
        {
            question: "At what age should solid foods be introduced to babies?",
            options: ["2 months", "4-6 months", "9 months", "1 year"],
            answer: "4-6 months"
        },
        // Add more questions as needed
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };

    const handleNextQuestion = () => {
        if (selectedOption === questions[currentQuestion].answer) {
            setScore(score + 1);
        }
        setSelectedOption('');
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            alert(`Quiz finished! Your score: ${score + 1}/${questions.length}`);
        }
    };

    return (
        <div className="bg-gray-100 p-4 rounded shadow-md">
            <h3 className="text-xl font-bold mb-4">{questions[currentQuestion].question}</h3>
            <div className="space-y-2">
                {questions[currentQuestion].options.map((option, index) => (
                    <button
                        key={index}
                        className={`block w-full p-2 border rounded ${selectedOption === option ? 'bg-orange-500 text-white' : 'bg-white'}`}
                        onClick={() => handleOptionClick(option)}
                    >
                        {option}
                    </button>
                ))}
            </div>
            <button onClick={handleNextQuestion} className="bg-orange-500 text-white p-2 rounded mt-4">
                Next Question
            </button>
        </div>
    );
};

export default Quiz;
