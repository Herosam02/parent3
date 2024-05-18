import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import api from '../../api';
import '../../index.css';

function ParentList() {
    const [parents, setParents] = useState([]);
    const [editableItemId, setEditableItemId] = useState(null);

    useEffect(() => {
        fetchParents();
    }, []);

    const fetchParents = async () => {
        try {
            const response = await api.get('/api/parents');
            setParents(response.data); // Update parents state with fetched data
        } catch (error) {
            console.error('Error fetching parents:', error);
        }
    };

    const handleDelete = (id) => {
        api.delete(`/api/parents/${id}`)
            .then(() => {
                console.log('Parent deleted successfully:', id);
                fetchParents(); 
            })
            .catch(error => {
                console.error('Error deleting parent item:', error);
            });
    };
    

    const handleUpdate = (id) => {

        setEditableItemId(id);
    }

    const handleSave = async (id) => {
        const updatedParent = {
            parentName: document.getElementById(`parentName_${id}`).value,
            parentNumber: document.getElementById(`parentNumber_${id}`).value,
            parentAddress: document.getElementById(`parentAddress_${id}`).value,
            parentEmail: document.getElementById(`parentEmail_${id}`).value,
            number: document.getElementById(`number_${id}`).value,
        };
    
        try {
            await api.put(`/api/parents/${id}`, updatedParent);
            console.log('Parent updated successfully:', id);
            setEditableItemId(null)
            fetchParents(); // Refresh the parent list after update
        } catch (error) {
            console.error('Error updating parent item:', error);
        }
    }
    

    return (
        <div className="table-container">
            <h2>Parent List</h2>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Parent Name</th>
                        <th>Parent Number</th>
                        <th>Parent Address</th>
                        <th>Parent Email</th>
                        <th>Number</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                
                <tbody>
                    {parents.map(parent => (
                        <tr key={parent._id}>
                            <td>
                                {editableItemId === parent._id ? (
                                    <input type="text" id={`parentName_${parent._id}`} defaultValue={parent.parentName} />
                                ) : (
                                    parent.parentName
                                )}
                            </td>
                            <td>
                                {editableItemId === parent._id ? (
                                    <input type="number" id={`parentNumber_${parent._id}`} defaultValue={parent.parentNumber} />
                                ) : (
                                    parent.parentNumber
                                )}
                            </td>
                            <td>
                                {editableItemId === parent._id ? (
                                    <input type="text" id={`parentAddress_${parent._id}`} defaultValue={parent.parentAddress} />
                                ) : (
                                    parent.parentAddress
                                )}
                            </td>
                            <td>
                                {editableItemId === parent._id ? (
                                    <input type="email" id={`parentEmail_${parent._id}`} defaultValue={parent.parentEmail} />
                                ) : (
                                    parent.parentEmail
                                )}
                            </td>
                            <td>
                                {editableItemId === parent._id ? (
                                    <input type="number" id={`number_${parent._id}`} defaultValue={parent.number} />
                                ) : (
                                    parent.number
                                )}
                            </td>
                            <td>
                                {editableItemId === parent._id ? (
                                    <button onClick={() => handleSave(parent._id)}>Save</button>
                                ) : (
                                    <button onClick={() => handleUpdate(parent._id)}>Update</button>
                                )}
                                <button onClick={() => handleDelete(parent._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
                
            </table>
            <Link to="/parentform" className='add-inventory-button'>Add New Parent</Link>
        </div>
    );
}

export default ParentList;