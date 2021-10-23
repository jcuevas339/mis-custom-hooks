import { useState } from "react"


export const useForm = ( inicialState = {} ) => {

    const [values, setValues] = useState(inicialState)

    const reset = () =>{
        setValues(inicialState);
    }

    const handleInputChange = ({target}) =>{
        setValues({
            ...values, 
            [target.name]:target.value
        });
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        console.log(values);
    }

    return [ values, handleInputChange, reset];

}
