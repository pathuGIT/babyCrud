import React, { useEffect } from 'react'
import {useState} from 'react'
import {addBaby} from '../services/BabyService'
import {getBaby} from '../services/BabyService'
import {updateBaby} from '../services/BabyService'
import { useNavigate, useParams } from 'react-router-dom'

const BabyComponent = () => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [owner, setOwner] = useState('')

    const {id} = useParams()

    const [err , setErr] = useState({
        name: '',
        age: '',
        owner: ''
    })

    

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

    useEffect(() => {
        if(id){
            getBaby(id).then((Response) => {
                setName(Response.data.name)
                setAge(Response.data.age)
                setOwner(Response.data.owner)
            }).catch((error) => {
                console.log(error);
            })    
        }

    }, [id])
    
    const saveBaby = (e) =>{
        e.preventDefault();

        if(validate()){

            const baby = {name, age, owner};
            console.log(baby);

            if(id){
                updateBaby(id, baby).then((Response) => {
                    console.log(Response.data);
                    navigater('/babies');
                }).catch((error) => {
                    console.log(error);
                })
            }else{
                addBaby(baby).then((Response) => {
                    console.log(Response.data);
                    navigater('/babies');
                }).catch((error) => {
                    console.log(error);
                })
            }

        }else{
            console.log('Error');
        }
    }

    function validate(){
        let validate = true;
        const errCopy = {...err}

        if(name.trim()){
            errCopy.name = ''
        }else{
            errCopy.name = 'Name is required'
            validate = false
        }
        if(age.trim()){
            errCopy.age = ''
        }else{
            errCopy.age = 'Age is required'
            validate = false
        }  
        if(owner.trim()){
            errCopy.owner = ''
        }else{
            errCopy.owner = 'Owner is required'
            validate = false
        }   
        setErr(errCopy)
        return validate
    }

    function pageTitle(){
        if(id){
            return <h2 className='text-center'>Update Baby</h2>
        }else{
            return <h2 className='text-center'>Add Baby</h2>
        }    
    }

    return (
    <div className='container'>
        <div className='row'>
            <div className='card'>
                {
                    pageTitle()
                }
                <div className='card-body'>
                    <form>
                        <label htmlFor="">Baby Name</label>
                        <input type="text" name="oname" className={`form-ctrl ${err.name? 'is-invalid': '' }` } value={name} onChange={handlenName} /><br />
                        {err.name && <div className='invalid-feedback'>{err.name}</div>}

                        <label htmlFor="">Baby Age</label>
                        <input type="text" name="age" className={`form-ctrl ${err.age? 'is-invalid': '' }` }  value={age} onChange={handleAge} /><br />
                        {err.age && <div className='invalid-feedback'>{err.age}</div>}

                        <label htmlFor="">Owner Name</label>
                        <input type="text" name="oname" className={`form-ctrl ${err.owner? 'is-invalid': '' }` }  value={owner} onChange={handleOwner} /><br />
                        {err.owner && <div className='invalid-feedback'>{err.owner}</div>}

                        <button onClick={saveBaby}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BabyComponent