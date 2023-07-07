import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [employees, setEmployees] = useState([]);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [designation, setDesignation] = useState('');

    useEffect(() => {
        fetchEmployees();
    }, []);

    const fetchEmployees = async () => {
        try {
            const response = await axios.get('/employees');
            setEmployees(response.data);
        } catch (error) {
            console.error('Error fetching employees:', error);
        }
    };

    const handleAddEmployee = async (e) => {
        e.preventDefault();

        try {
            await axios.post('/employees', { name, age, designation });
            fetchEmployees();
            setName('');
            setAge('');
            setDesignation('');
        } catch (error) {
            console.error('Error adding employee:', error);
        }
    };

    const handleDeleteEmployee = async (id) => {
        try {
            await axios.delete(`/employees/${id}`);
            fetchEmployees();
        } catch (error) {
            console.error('Error deleting employee:', error);
        }
    };

    return (
        <div>
            <h1>Employee Management App</h1>
            <form onSubmit={handleAddEmployee}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Designation"
                    value={designation}
                    onChange={(e) => setDesignation(e.target.value)}
                />
                <button type="submit">Add Employee</button>
            </form>
            <h2>Employees</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Designation</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <tr key={employee._id}>
                            <td>{employee.name}</td>
                            <td>{employee.age}</td>
                            <td>{employee.designation}</td>
                            <td>
                                <button onClick={() => handleDeleteEmployee(employee._id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default App;
