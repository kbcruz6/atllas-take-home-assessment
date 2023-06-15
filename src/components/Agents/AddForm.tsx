import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface AgentObj {
  firstName: string;
  lastName: string;
  photoUrl: string;
  agentLicence: string;
  address: string;
  practiceAreas: string;
  aboutMe: string;
}

const AddForm: React.FC = () => {
  const [agentObj, setAgentObj] = useState<AgentObj>({
    firstName: "",
    lastName: "",
    photoUrl: "",
    agentLicence: "",
    address: "",
    practiceAreas: "",
    aboutMe: "",
  });

  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAgentObj((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post("/agents", agentObj);
      setAgentObj({
        firstName: "",
        lastName: "",
        photoUrl: "",
        agentLicence: "",
        address: "",
        practiceAreas: "",
        aboutMe: "",
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-4 w-[350px] pt-20 m-auto">
      <form
        className="flex flex-col gap-2 p-5 rounded-3xl shadow-lg shadow-slate-500 bg-white"
        onSubmit={handleSubmit}
      >
        <h3 className="text-2xl text-center font-bold mb-2 p-2 text-green-600">
          New Agent
        </h3>
        {/*//! First Name */}
        <div className="flex flex-col">
          <label className="font-bold">First Name:</label>
          <input
            required
            name="firstName"
            type="text"
            onChange={handleChange}
            className="px-3 py-1 shadow-md rounded-3xl focus:outline-none duration-300 bg-gray-200 hover:bg-gray-300 shadow-slate-500"
            value={agentObj.firstName}
          />
        </div>
        {/*//! Last Name */}
        <div className="flex flex-col">
          <label className="font-bold">Last Name:</label>
          <input
            required
            name="lastName"
            type="text"
            onChange={handleChange}
            className="px-3 py-1 shadow-md rounded-3xl focus:outline-none duration-300 bg-gray-200 hover:bg-gray-300 shadow-slate-500"
            value={agentObj.lastName}
          />
        </div>
        {/*//! Photo URL */}
        <div className="flex flex-col">
          <label className="font-bold">Photo url:</label>
          <input
            required
            name="photoUrl"
            type="text"
            onChange={handleChange}
            className="px-3 py-1 shadow-md rounded-3xl focus:outline-none duration-300 bg-gray-200 hover:bg-gray-300 shadow-slate-500"
            value={agentObj.photoUrl}
          />
        </div>
        {/*//! Agent License */}
        <div className="flex flex-col">
          <label className="font-bold">Agent license:</label>
          <input
            required
            name="agentLicence"
            type="number"
            onChange={handleChange}
            className="px-3 py-1 shadow-md rounded-3xl focus:outline-none duration-300 bg-gray-200 hover:bg-gray-300 shadow-slate-500"
            value={agentObj.agentLicence}
          />
        </div>
        {/*//! Address */}
        <div className="flex flex-col">
          <label className="font-bold">Address:</label>
          <input
            required
            name="address"
            type="text"
            onChange={handleChange}
            className="px-3 py-1 shadow-md rounded-3xl focus:outline-none duration-300 bg-gray-200 hover:bg-gray-300 shadow-slate-500"
            value={agentObj.address}
          />
        </div>
        {/*//! Practice Areas */}
        <div className="flex flex-col">
          <label className="font-bold">Practice areas:</label>
          <input
            required
            name="practiceAreas"
            type="text"
            onChange={handleChange}
            className="px-3 py-1 shadow-md rounded-3xl focus:outline-none duration-300 bg-gray-200 hover:bg-gray-300 shadow-slate-500"
            value={agentObj.practiceAreas}
          />
        </div>
        {/*//! About Me */}
        <div className="flex flex-col">
          <label className="font-bold">About me:</label>
          <input
            required
            name="aboutMe"
            type="text"
            onChange={handleChange}
            className="px-3 py-1 shadow-md rounded-3xl focus:outline-none duration-300 bg-gray-200 hover:bg-gray-300 shadow-slate-500"
            value={agentObj.aboutMe}
          />
        </div>
        {/*//! BUTTON */}
        <button
          type="submit"
          className="p-2 mt-4 rounded-full duration-300 text-white shadow-md shadow-gray-600 bg-green-600 hover:bg-green-500"
        >
          Add it!
        </button>
      </form>
    </div>
  );
};

export default AddForm;


// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const AddForm = () => {
//   const [agentObj, setAgentObj] = useState({
//     firstName: "",
//     lastName: "",
//     photoUrl: "",
//     agentLicence: "",
//     address: "",
//     practiceAreas: "",
//     aboutMe: "",
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setAgentObj((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("/agents", agentObj);
//       setAgentObj({
//         firstName: "",
//         lastName: "",
//         photoUrl: "",
//         agentLicence: "",
//         address: "",
//         practiceAreas: "",
//         aboutMe: "",
//       });
//       navigate("/");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="p-4 w-[350px] pt-20 m-auto">
//       <form
//         className="flex flex-col gap-2 p-5 rounded-3xl shadow-lg shadow-slate-500 bg-white"
//         onSubmit={handleSubmit}
//       >
//         <h3 className="text-2xl text-center font-bold mb-2 p-2 text-green-600">
//           New Agent
//         </h3>
//         {/*//! First Name */}
//         <div className="flex flex-col">
//           <label className="font-bold">First Name:</label>
//           <input
//             required
//             name="firstName"
//             type="text"
//             onChange={handleChange}
//             className="px-3 py-1 shadow-md rounded-3xl focus:outline-none duration-300 bg-gray-200 hover:bg-gray-300 shadow-slate-500"
//             value={agentObj.firstName}
//           />
//         </div>
//         {/*//! Last Name */}
//         <div className="flex flex-col">
//           <label className="font-bold">Last Name:</label>
//           <input
//             required
//             name="lastName"
//             type="text"
//             onChange={handleChange}
//             className="px-3 py-1 shadow-md rounded-3xl focus:outline-none duration-300 bg-gray-200 hover:bg-gray-300 shadow-slate-500"
//             value={agentObj.lastName}
//           />
//         </div>
//         {/*//! Photo URL */}
//         <div className="flex flex-col">
//           <label className="font-bold">Photo url:</label>
//           <input
//             required
//             name="photoUrl"
//             type="text"
//             onChange={handleChange}
//             className="px-3 py-1 shadow-md rounded-3xl focus:outline-none duration-300 bg-gray-200 hover:bg-gray-300 shadow-slate-500"
//             value={agentObj.photoUrl}
//           />
//         </div>
//         {/*//! Agent License */}
//         <div className="flex flex-col">
//           <label className="font-bold">Agent license:</label>
//           <input
//             required
//             name="agentLicence"
//             type="number"
//             onChange={handleChange}
//             className="px-3 py-1 shadow-md rounded-3xl focus:outline-none duration-300 bg-gray-200 hover:bg-gray-300 shadow-slate-500"
//             value={agentObj.agentLicence}
//           />
//         </div>
//         {/*//! Address */}
//         <div className="flex flex-col">
//           <label className="font-bold">Address:</label>
//           <input
//             required
//             name="address"
//             type="text"
//             onChange={handleChange}
//             className="px-3 py-1 shadow-md rounded-3xl focus:outline-none duration-300 bg-gray-200 hover:bg-gray-300 shadow-slate-500"
//             value={agentObj.address}
//           />
//         </div>
//         {/*//! Practice Areas */}
//         <div className="flex flex-col">
//           <label className="font-bold">Practice areas:</label>
//           <input
//             required
//             name="practiceAreas"
//             type="text"
//             onChange={handleChange}
//             className="px-3 py-1 shadow-md rounded-3xl focus:outline-none duration-300 bg-gray-200 hover:bg-gray-300 shadow-slate-500"
//             value={agentObj.practiceAreas}
//           />
//         </div>
//         {/*//! About Me */}
//         <div className="flex flex-col">
//           <label className="font-bold">About me:</label>
//           <input
//             required
//             name="aboutMe"
//             type="text"
//             onChange={handleChange}
//             className="px-3 py-1 shadow-md rounded-3xl focus:outline-none duration-300 bg-gray-200 hover:bg-gray-300 shadow-slate-500"
//             value={agentObj.aboutMe}
//           />
//         </div>
//         {/*//! BUTTON */}
//         <button
//           type="submit"
//           className="p-2 mt-4 rounded-full duration-300 text-white shadow-md shadow-gray-600 bg-green-600 hover:bg-green-500"
//         >
//           Add it!
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddForm;
