import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black p-4 mt-8 text-center text-white">
            <p>&copy; {new Date().getFullYear()} PoshanSetu. All rights reserved.</p>
            <a href="/terms-and-conditions" className="text-orange-400">Terms & Conditions</a>
        </footer>
    );
};

export default Footer;
