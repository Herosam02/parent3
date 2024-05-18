import React, { useState } from 'react';
import api from '../../api';
import '../../index.css'
import { useNavigate, Link } from 'react-router-dom';

function ParentForm(){
    const [formData, setFormData] = useState({
        parentName: '',
        parentNumber: '',
        parentAddress: '',
        parentEmail: '',
        number: ''
    });

    const navigate = useNavigate();

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
            api.post('/api/parents', formData) // Endpoint corrected to match backend
            .then(response => {
                console.log('Parent added successfully');
                navigate('/parent');
            })
            .catch(error => {
                console.error('Error adding Parent:', error);
            })
             // Navigate to the '/parent' route after successful form submission
    };

    return(
        <>
            <h1>ParentForm</h1>
            <form onSubmit={handleSubmit} className='color'>
                <div>
                    <input type='text' name='parentName' onChange={handleChange} htmlFor='parentName' required placeholder='Parent name' style={{ padding: '20px', width: '300px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '3px', fontSize: '30px', marginTop: '30px'}} />
                </div>
                <div>
                    <input type='number' name='parentNumber' onChange={handleChange} required placeholder='Parent number' style={{ padding: '20px', width: '300px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '3px', fontSize: '30px', marginTop: '30px'}} />
                </div>
                <div>
                    <input type='text' name='parentAddress' onChange={handleChange} required placeholder='Parent address' style={{ padding: '20px', width: '300px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '3px', fontSize: '30px', marginTop: '30px'}} />
                </div>
                <div>
                    <input type='email' name='parentEmail' onChange={handleChange} required placeholder='Parent email' style={{ padding: '20px', width: '300px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '3px', fontSize: '30px', marginTop: '30px'}} />
                </div>
                <div>
                    <input type='number' placeholder='number' name='number' onChange={handleChange} required style={{ padding: '20px', width: '300px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '3px', fontSize: '30px', marginTop: '30px'}} />
                </div>
                <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer', border: 'none', borderRadius: '3px', textDecoration: 'none'}}>Add Parent</button>
            </form>
        </>
    )
}

export default ParentForm;