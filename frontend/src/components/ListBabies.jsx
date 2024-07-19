import React, { useEffect, useState } from 'react';
import { listBabies } from '../services/BabyService';
import {useNavigate} from 'react-router-dom';

const ListBabies = () => {
    const [babies, setBabies] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch data from the backend using the service
        listBabies()
            .then(response => {
                setBabies(response.data); // Set the fetched data to state
            })
            .catch(error => {
                console.error('There was an error fetching the babies data!', error);
            });
    }, []);

    function addNewBaby(){
        navigate('/add-baby');
    }

    return (
        <div className='container'>
            <h2 className='text-center'>Baby List</h2>
            <button type='' className='btn btn-primary mb-2' onClick={addNewBaby}>Add Baby</button>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        babies.map((baby, index) => 
                            <tr key={baby.id || index}>
                                <td>{baby.id}</td>
                                <td>{baby.name}</td>
                                <td>{baby.age}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ListBabies;