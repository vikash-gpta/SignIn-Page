import React, { useState } from "react";
import Axios from "axios";

export default function Form() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [storage, setStorage] = useState("local-storage");

  const handleSubmit = (event) => {
    let userDetail = `
            First Name:${fname}
        Last Name:${lname}
        Address:${address}
        Email:${email}
        Password:${password}
        Storage:${storage}
    `;

    /*checking what the user has selected if user has selected storage medium as LOCALSTORAGE then the following code will execute 
and if the user selects storage medium as Database then the else condition will work and data will be stored in database.  */

    if (storage === "local-storage") {
      let finalUserDetail = [];
      finalUserDetail.push(userDetail);
      /*Pusihing to LocalStorage */
      localStorage.setItem("user-detail", JSON.stringify(finalUserDetail));
    } else {
      Axios.post("http://localhost:3002/create", {
        firstName: fname,
        lastName: lname,
        address: address,
        emailAddress: email,
        password: password,
      }).then(() => {
        console.log("success");
      });
    }

    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create Account</h1>
      <label>
        First Name:
        <input
          name="fname"
          type="text"
          value={fname}
          onChange={(e) => setFname(e.target.value)}
          required
        />
      </label>
      <label>
        Last Name:
        <input
          name="lname"
          type="text"
          value={lname}
          onChange={(e) => setLname(e.target.value)}
          required
        />
      </label>
      <label>
        Address:
        <input
          name="address"
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </label>

      <label>
        Email:
        <input
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>

      <label>
        Password:
        <input
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <label>
        Storage Medium:
        <select value={storage} onChange={(e) => setStorage(e.target.value)}>
          <option value="local-storage">Local Storage</option>
          <option value="database">Database</option>
        </select>
      </label>

      <button>Submit</button>
    </form>
  );
}

if () {
    dvfvfevfevef
}