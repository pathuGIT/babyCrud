import React from 'react'
import {useState} from 'react'
import {addBaby} from '../services/BabyService'
import { useNavigate } from 'react-router-dom'

const BabyComponent = () => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [owner, setOwner] = useState('')

    const handlenName = (event) =>{
        setName(event.target.value)
    }
    const handleAge = (event) =>{
        setAge(event.target.value)
    }
    const handleOwner = (event) =>{
        setOwner(event.target.value)
    }

    const navigater = useNavigate();

    const saveBaby = (e) =>{
        e.preventDefault();

        const baby = {name, age, owner};
        console.log(baby);

        addBaby(baby).then((Response) => {
            console.log(Response.data);
            navigater('/babies');
        })
    }

    return (
    <div className='container'>
        <div className='row'>
            <div className='card'>
                <h2 className='text-center'>Add Baby</h2>
                <div className='card-body'>
                    <form>
                        <label htmlFor="">Baby Name</label>
                        <input type="text" name="fname" className='form-ctrl' value={name} onChange={handlenName} /><br />
                        <label htmlFor="">Baby Age</label>
                        <input type="text" name="fname" className='form-ctrl' value={age} onChange={handleAge} /><br />
                        <label htmlFor="">Baby Name</label>
                        <input type="text" name="fname" className='form-ctrl' value={owner} onChange={handleOwner} /><br />
                        <button onClick={saveBaby}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BabyComponent