import React from "react"

export default function Form(props) {
    const [formData, setFormData] = React.useState(
        {firstName: "", lastName: ""}
    )
    
    console.log(formData)
    
    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }
    
    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
            />
        <div className="outPut">
            <p>You typed: </p>
            <p>Firstname: {formData["firstName"]}</p>
            <p>Lastname: {formData["lastName"]}</p>
        </div>
        </form>
    )
}
