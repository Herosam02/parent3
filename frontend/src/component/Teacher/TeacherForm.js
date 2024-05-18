import React from "react";
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import '../../index.css';
import api from '../../api';

function TeacherForm(){
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        gender: '',
        dateOfBirth: '',
        placeOfBirth: '',
        localGovt: '',
        community: '',
        state: '',
        qualification: '',
        yearJoin: '',
    })

    const navigate = useNavigate();

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    };

    const handleSubmit = e => {
        e.preventDefault();
        api.post('/teachers', formData)
        .then(response => {
            console.log('Teacher item added successfully');
            navigate('/teacher')
        })
        .catch(error => {
            console.error('Error adding teacher item:', error);
        })
    }

    return(
        <>
            <h1>Teacher Form</h1>
            <form onSubmit={handleSubmit} className="colour">
                <div className="grid">
                    <label htmlFor="firstName">firstName</label>
                    <input type="text" name="firstName" onChange={handleChange} htmlFor="firstName"/>
                </div>
                <div className="grid">
                    <label htmlFor="lastName">lastName</label>
                    <input type="text" name="lastName" onChange={handleChange} htmlFor="lastName"/>
                </div>
                <div className="grid">
                    <label htmlFor="Gender">Gender</label>
                <select className="select" name="gender" onChange={handleChange}>
                    <option>Male</option>
                    <option>Female</option>
                </select>
                </div>
                <div className="grid">
                    <label htmlFor="dateOfBirth">dateOfBirth</label>
                    <input type="date" name="dateOfBirth" onChange={handleChange} htmlFor="dateOfBirth"/>
                </div>
                <div className="grid">
                    <label htmlFor="placeOfBirth">placeOfBirth</label>
                    <input type="street" name="placeOfBirth" onChange={handleChange} htmlFor="placeOfBirth"/>
                </div>
                <div className="grid">
                    <label htmlFor="localGovt">localGovt</label>
                        <select className="selecting" name="localGovt" onChange={handleChange}>
                            <option>Govenor Babajide sunwolu</option>
                            <option>President Muhammed Buhari</option>
                        </select>
                </div>
                <div className="grid">
                    <label htmlFor="community">community</label>
                    <select className="select" name="community" onChange={handleChange}>
                            <option>Abuja</option>
                            <option>Lagos</option>
                    </select>
                </div>
                <div className="grid">
                    <label htmlFor="state">state</label>
                    <select className="select" name="state" onChange={handleChange}>
                            <option>Osun</option>
                            <option>Edo</option>
                    </select>
                </div>
                <div className="grid">
                    <label htmlFor="qualification">qualification</label>
                    <input type="qualification" name="qualification" onChange={handleChange} htmlFor="qualification"/>
                </div>
                <div className="grid botttom">
                    <label htmlFor="yearJoin">yearJoin</label>
                    <input type="date" name="yearJoin" onChange={handleChange} htmlFor="yearJoin"/>
                </div>
                <button className='submit' name='submitButton'>Add Teacher</button>
            </form>
        </>
    )
}

export default TeacherForm;