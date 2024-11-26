import React, { useState } from 'react';

const Form = () => {
    const [formData, setFormData] = useState({
        age: '',
        gender: '',
        weight: '',
        skinColor: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // API call to get nutrition suggestions
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded-md shadow-md">
            <div className="mb-4">
                <label className="block text-gray-700">Baby Age</label>
                <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Gender</label>
                <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                >
                    <option value="">Select Gender</option>
                    <option value="male">Boy</option>
                    <option value="female">Girl</option>
                </select>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Weight</label>
                <input
                    type="number"
                    name="weight"
                    value={formData.weight}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Skin Color</label>
                <select
                    name="skinColor"
                    value={formData.skinColor}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                >
                    <option value="">Select Skin Color</option>
                    <option value="pale">Pale</option>
                    <option value="fair">Fair</option>
                    <option value="dark">Dark</option>
                </select>
            </div>
            <button type="submit" className="bg-orange-500 text-white p-2 rounded">Get Suggestions</button>
        </form>
    );
};

export default Form;
