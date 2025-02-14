import React, { useState } from "react";
import axios from "axios";
import "./assets/css/regform.css"
import LoginForm from "./Loginform"
import Getoneuser from "./getoneuser"
const AddUser = () => {
  // const [show,SetShow]=useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    email: "",
    password: "",
    role: "seller",
    shopCategory: "",
    shopName: "",
    shopAddress: "",
    GST: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // SetShow(false)
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  // let Showdata=()=>{ SetShow(true)}
  const handleSubmit = (e) => {
    e.preventDefault();
    // SetShow(false)
    // Handle form submission, like sending data to the backend
    // console.log(formData);
    axios
      .post("https://tekisky-backend.onrender.com/user/createUser",formData,{
        headers: {
            'Content-Type': 'application/json',
        },
    })
      .then((response) => {
        setFormData(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
    }
 return (
  <div>
  
   <div className="fform">
     <form  onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label>
        Mobile Number:
        <input
          type="text"
          name="mobileNumber"
          value={formData.mobileNumber}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label>
        Role:
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
        >
          <option value="seller">Seller</option>
          <option value="admin">Admin</option>
        </select>
      </label>
      <br />

      <label>
        Shop Category:
        <input
          type="text"
          name="shopCategory"
          value={formData.shopCategory}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label>
        Shop Name:
        <input
          type="text"
          name="shopName"
          value={formData.shopName}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label>
        Shop Address:
        <input
          type="text"
          name="shopAddress"
          value={formData.shopAddress}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label>
        GST:
        <input
          type="text"
          name="GST"
          value={formData.GST}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
   </div>
   <div className="main2"><LoginForm/>
   <Getoneuser/></div>
   <productTable/>
   <newOne/>
    </div>
  );
};

export default AddUser;