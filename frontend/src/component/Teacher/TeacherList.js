import React, { useState, useEffect }  from "react";
import { Link } from "react-router-dom";
import api from '../../api';
import '../../index.css'

function TeacherList(){
    const [teacher, setTeacher] = useState([]);
    const [editableItemId, setEditableItemId] = useState(null);

    useEffect(() => {
        fetchTeacher();
    }, []);

    const fetchTeacher = async () => {
        try {
            const response = api.get('/teacher');
            setTeacher(response.data);
        } catch (error) {
            console.error('Error fetching teacher:', error);
        }
    };

    const handleDelete = (id) => {
        api.delete(`/teacher/${id}`)
        .then(() => {
            console.log('Teacher deleted successfully:', id);
            fetchTeacher();
        })
        .catch(error => {
            console.error('Error deleting teacher item:', error);
        })
    }

    const handleUpdate = (id) => {

        setEditableItemId(id)
    }

    const handleSave = (id, updatedFields) => {
        const updatedTeacher = {
            firstName: document.getElementById(`firstName_${id}`).value,
            lastName: document.getElementById(`lastName_${id}`).value,
            gender: document.getElementById(`gender_${id}`).value,
            dateOfBirth: document.getElementById(`dateOfBirth_${id}`).value,
            placeOfBirth: document.getElementById(`placeOfBirth_${id}`).value,
            localGovt: document.getElementById(`localGovt_${id}`).value,
            community: document.getElementById(`community`).value,
            
        }
    }
    return(
    <>
        <h1>TeacherList</h1>
    </>
    )
}

export default TeacherList;