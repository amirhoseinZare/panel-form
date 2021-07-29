import {useState} from 'react'
import Joi from "joi"
import axios from "axios"
import classes from "./Formpage.module.scss"
import {InputForm} from "../../components/index"

const inputSteps = {
    1:["name"],
    2:["family"],
    3:["phone", "age"]
}
const validators = {
    name:Joi.string().min(5).required(),
    family: Joi.string().min(5).required(),
    phone:Joi.string().required(),
    age:Joi.string().required(),
}

export const FormPage = ()=>{
    const [stepState, setStepState] = useState(1)
    const [formState, setFormState] = useState({
        name:'',
        family:'',
        phone:'',
        age:''
    })
    const [showState, setShowState] = useState({
        name:true,
        family:false,
        phone:false,
        age:false
    })
    const [validateState, setValidateState] = useState({
        name:{valid:false, show:false},
        family:{valid:false, show:false},
        phone:{valid:false, show:false},
        age:{valid:false, show:false},
    })
    

    const handleCHange = async ({target:{value}}, key)=> {
        await setFormState({...formState, [key]:value})
        const validateResult = validators[key].validate(formState[key]).error ? false : true
        setValidateState({...validateState, [key]:{...validateState[key],valid:validateResult,}})
    }

    const nextButtonHandler = async ()=>{
        if(stepState<3){
            const inputs = inputSteps[stepState]
            inputs.forEach(async input => {
                if(!validateState[input].valid){
                    setValidateState({...validateState, [input]:{...validateState[input],show:true}})
                }
                else {
                    await setStepState(stepState+1)
                    const nextInputs = inputSteps[stepState+1]
                    const inputsToSHow = nextInputs.reduce((acc, cv)=>({...acc, [cv]:true}), {})
                    setShowState({name:false, family:false, phone:false, ...inputsToSHow})
                }
            })
        }
        else if (stepState===3){
            const inputs = inputSteps[stepState]
            if(inputs.map(input=>validateState[input].valid).every(e=>e)){
                await setValidateState({...validateState,...inputs.reduce( (acc, cv)=>({...acc, [cv]:{valid:true, show:false}}), {} ) })
            }
            else {
                inputs.forEach(async input => {
                    if(!validateState[input].valid){
                        await setValidateState({...validateState, [input]:{...validateState[input],show:true}})
                    }
                    
                })
            }
        }
    }

    const prevButtonHandler = async ()=>{
        if(stepState>1){
            await setStepState(stepState-1)
            const inputsToSHow = inputSteps[stepState-1].reduce((acc, cv)=>({...acc, [cv]:true}), {})
            setShowState({name:false, family:false, phone:false,...inputsToSHow})
        }
    }

    const handleSubmit = async (event)=>{
        console.log('submit')
        event.preventDefault()
        const doc = await axios.post('https://jsonplaceholder.typicode.com/users', formState)
        console.log(doc)
    }

    const { name, family, phone, age } = formState
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <InputForm helptext="نام حداقل باید ۶ کاراکتر باشد." value={name} inputKey="name" label="نام" handleCHange={handleCHange} show={showState.name} showError={validateState.name.show}/>
                <InputForm helptext="نام خانوادگی حداقل باید ۶ کاراکتر باشد." value={family} inputKey="family" label="نام خانوادگی" handleCHange={handleCHange} show={showState.family} showError={validateState.family.show}/>
                <InputForm helptext="شماره تلفن نباید خالی باشد." value={phone} inputKey="phone" label="شماره تلفن" handleCHange={handleCHange} show={showState.phone} showError={validateState.phone.show}/>
                <InputForm helptext="سن تلفن نباید خالی باشد." value={age} inputKey="age" label="سن" handleCHange={handleCHange} show={showState.age} showError={validateState.age.show}/>
                <p>{stepState}</p>
                <button onClick={nextButtonHandler} type={stepState===3 ? 'submit' : 'button'}>{stepState===3 ? 'submit' : 'next'}</button>
                {stepState>1 ? <button onClick={prevButtonHandler}>prev</button>: null}
            </form>
        </div>
    )
}