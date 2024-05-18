import React, { useState, useEffect }  from "react";
import { Link } from "react-router-dom";
import api from '../../api';
import '../../index.css'

function TeacherList(){
    const [teachers, setTeacher] = useState([]);
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
        api.delete(`/teachers/${id}`)
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

    const handleSave = async (id) => {
        const updatedTeacher = {
            firstName: document.getElementById(`firstName_${id}`).value,
            lastName: document.getElementById(`lastName_${id}`).value,
            gender: document.getElementById(`gender_${id}`).value,
            dateOfBirth: document.getElementById(`dateOfBirth_${id}`).value,
            placeOfBirth: document.getElementById(`placeOfBirth_${id}`).value,
            localGovt: document.getElementById(`localGovt_${id}`).value,
            community: document.getElementById(`community${id}`).value,
            state: document.getElementById(`state_${id}`).value,
            qualification: document.getElementById(`qualification_${id}`).value,
            yearJoin: document.getElementById(`yearJoin_${id}`).value,
        };

        try {
            await api.put(`/teachers/${id}`, updatedTeacher);
            console.log('Teacher updated successfully:', id);
            setEditableItemId(null);
            fetchTeacher();
        } catch (error) {
            console.error('Error updating teacher item:', error);
        }
    }
    return(
    <>
        <div className="table-container">
            <h2>Teacher List</h2>
            <table border={1}>
                <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Gender</th>
                    <th>Date of Birth</th>
                    <th>Place of Birth</th>
                    <th>Local govt</th>
                    <th>Community</th>
                    <th>State</th>
                    <th>Qualification</th>
                    <th>Year join</th>
                </tr>
                </thead>

                <tbody>
                    {teachers.map(teacher => (
                        <tr key={teacher._id}>
                            <td>{editableItemId === teacher._id ? (
                                    <input type="text" id={`firstName_${teacher._id}`} defaultValue={teacher.firstName} />
                                ) : (
                                    teacher.firstName
                                )}
                            </td>
                            <td>{editableItemId === teacher._id ? (
                                    <input type="text" id={`lastName_${teacher._id}`} defaultValue={teacher.lastName} />
                                ) : (
                                    teacher.lastName
                                )}
                            </td>
                            <td>{editableItemId === teacher._id ? (
                                    <input type="text" id={`gender_${teacher._id}`} defaultValue={teacher.gender} />
                                ) : (
                                    teacher.gender
                                )}
                            </td>
                            <td>{editableItemId === teacher._id ? (
                                    <input type="date" id={`dateOfBirth_${teacher._id}`} defaultValue={teacher.dateOfBirth} />
                                ) : (
                                    teacher.dateOfBirth
                                )}
                            </td>
                            <td>{editableItemId === teacher._id ? (
                                    <input type="text" id={`placeOfBirth_${teacher._id}`} defaultValue={teacher.placeOfBirth} />
                                ) : (
                                    teacher.placeOfBirth
                                )}
                            </td>
                            <td>{editableItemId === teacher._id ? (
                                    <input type="text" id={`localGovt_${teacher._id}`} defaultValue={teacher.localGovt} />
                                ) : (
                                    teacher.localGovt
                                )}
                            </td>
                            <td>{editableItemId === teacher._id ? (
                                    <input type="text" id={`community_${teacher._id}`} defaultValue={teacher.community} />
                                ) : (
                                    teacher.community
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </>
    )
}

export default TeacherList;