import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TermsAndConditions = () => {
    return (
        <>
            <Navbar />
            <div className="container mx-auto p-8">
                <h2 className="text-3xl font-bold mb-6">Terms and Conditions</h2>
                <p className="mb-4">
                    Welcome to PoshanSetu! These terms and conditions outline the rules and regulations for the use of our web platform.
                </p>
                <p className="mb-4">
                    By accessing this website, you agree to comply with these terms. If you disagree with any part, please do not use our website.
                </p>
                {/* Add more terms and conditions */}
            </div>
            <Footer />
        </>
    );
};

export default TermsAndConditions;
