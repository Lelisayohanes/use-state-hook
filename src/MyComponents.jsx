import React,{useState} from 'react'

 function MyComponents() {
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0)
    const [isEmployee, setIsEmployee] =useState(false)

    const updateName = () => {
        setName("SpongeBob")
    }

    const incrementAge = () => {
        setAge(age + 1)
    }

    const updateIsEmployee = () => {
        setIsEmployee(!isEmployee)
    }

  return (
    <div>
      <p>Name : {name}</p>
      <button onClick={updateName} >Set Name</button>

      <p>Name : {age}</p>
      <button onClick={incrementAge} >Increment Age</button>

      <p>Is employed : {isEmployee ? "Yes":"No"}</p>
      <button onClick={updateIsEmployee} >Is Employed</button>

    </div>
  )
}


export default MyComponents;