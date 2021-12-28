import React from "react"

export default function Form() {
    const [formData, setFormData] = React.useState(
        {firstName: "", lastName: "", email: "", comments: "", isFavorite: false}
    )
    
    console.log(formData)
    
    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type=== "checkbox" ? checked : value
            }
        })
    }
    let checkBox = formData.isFavorite ? "checked" : "Not checked"
    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
            />
            <input
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />
            <textarea placeholder="Comments" onChange={handleChange} name="comments" value={formData.comments} />
            
            <input 
            type="checkbox" 
            value={formData.isFavorite} 
            checked={formData.isFriendly}
            onChange={handleChange}
            name="isFavorite" 
            />
        
        <div className="outPut">
            <p>You typed: </p>
            <p>Firstname: {formData["firstName"]}</p>
            <p>Lastname: {formData["lastName"]}</p>
            <p>Email: {formData["email"]}</p>
            <p>Comments: {formData["comments"]}</p>
            {checkBox &&<p>isFavorite: {checkBox}</p>}
        </div>
        </form>
    )
}
//full from template on github