import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const DoctorConsultation = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        doctorType: '',
        consultationDate: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <>
            <Navbar />
            <div className="container mx-auto p-8">
                <h2 className="text-3xl font-bold mb-6">Doctor Consultation</h2>
                <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded shadow-md">
                    <div className="mb-4">
                        <label className="block text-gray-700">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Select Doctor Type</label>
                        <select
                            name="doctorType"
                            value={formData.doctorType}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        >
                            <option value="">Choose a Doctor Type</option>
                            <option value="nutritionist">Nutritionist</option>
                            <option value="pediatrician">Pediatrician</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Preferred Consultation Date</label>
                        <input
                            type="date"
                            name="consultationDate"
                            value={formData.consultationDate}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <button type="submit" className="bg-orange-500 text-white p-2 rounded">
                        Submit
                    </button>
                </form>
            </div>
            <Footer />
        </>
    );
};

export default DoctorConsultation;
