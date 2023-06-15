// import { useState, createContext } from "react";
// import axios from "axios";
// import Swal from "sweetalert2";

// const AgentContext = createContext();

// const AgentContextProvider = ({ children }) => {
//   //! VARS
//   const [agents, setAgents] = useState([]);
//   const [agentObj, setAgentObj] = useState({
//     firstName: "",
//     lastName: "",
//     photoUrl: "",
//     agentLicence: "",
//     address: "",
//     practiceAreas: "",
//     aboutMe: "",
//   });

//   const [auxOne, setAuxOne] = useState(true);

//   //! FUNCTIONS
//   const handleChange = (e) => {
//     setAgentObj((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleDelete = async (_id) => {
//     await Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//       background: "#11294e",
//       color: "#f6ad55",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         Swal.fire({
//           title: "Deleted!",
//           text: "Your file has been deleted.",
//           icon: "success",
//           background: "#11294e",
//           color: "#f6ad55",
//           showConfirmButton: false,
//           timer: 2500,
//           timerProgressBar: true,
//         });
//         try {
//           axios.delete("http://localhost:4000/api/agents/" + _id);
//           setAuxOne(!auxOne);
//         } catch (error) {
//           console.log(error);
//         }
//       }
//     });
//   };

//   //! OBJECT TO BRING
//   const data = {
//     agents,
//     setAgents,
//     auxOne,
//     setAuxOne,
//     agentObj,
//     setAgentObj,
//     handleDelete,
//     handleChange,
//   };

//   return <AgentContext.Provider value={data}>{children}</AgentContext.Provider>;
// };

// export { AgentContextProvider as default, AgentContext };
