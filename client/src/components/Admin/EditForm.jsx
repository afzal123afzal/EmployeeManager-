
import React, { useEffect, useState } from 'react'
// import { axiosPlayersInstance } from '../../instance/Axios';
function EditForm() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
//   const [address, setAddress] = useState('')
 

//   useEffect(() => {
//     try {
//       const userInfo = async () => {
//         const response = await axiosPlayersInstance.get(`/player/${_id}`,
//           { headers: { 'Authorization': `Bearer ${playerAuth.token}` } }
//         )
//         setName(response.data.name)
//         setEmail(response.data.email)
//         setMobile(response.data.mobile)
//         setAge(response.data.age)
//         setPosition(response.data.position)
//         setClub(response.data.club)
//         setPlace(response.data.place)
//         setVideo(response.data.video)
//       }
//       userInfo()

//     } catch (err) {
//       console.log(err.message);
//     }

//   }, [])
//   const updateDetails = async () => {
//     try {
//       const data = { name, email, mobile, age, position, club, place, video }
//       const response = await axiosPlayersInstance.patch(`/add-details/${_id}`, data,
//         { headers: { 'Authorization': `Bearer ${playerAuth.token}` } }
//       )
//     } catch (err) {
//       console.log(err.message);
//     }
//   }
//   const handleSubmit = async (e) => {
//     e.preventDefault()

//     await updateDetails()

//     state()
//   }

const handleSubmit = async()=>{
  console.log("hi");
}

  return (
    <div>

      <form className="login" onSubmit={handleSubmit} >
        <h2>Edit Details</h2>

        <label>Name:</label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <label>Email address:</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label>Phone:</label>
        <input
          type="number"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
        />
        <button >Update</button>
      </form>
    </div>
  )
}

export default EditForm