import type { FC, ChangeEvent } from "react";
import { useState, useEffect } from "react";
import Agent from "./Agent";
import { IAgent } from "../../types/Agent";
import axios from "axios";
import './Agents.css'

const Agents: FC = () => {
  const [agents, setAgents] = useState<IAgent[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const response = await axios.get("/agents");
        setAgents(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchInitialData();
  }, []);

  const filteredAgents = agents.filter((agent) => agent.practiceAreas.includes(searchTerm));

  const handleSearchTermChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    
    <div className="agents flex flex-col text-center justify-center items-center">
      <input type="textarea" placeholder="Serch by practice areas" className="p-2 rounded-full hover:bg-slate-800 bg-black text-white w-[300px] h-[50px] mt-4" onChange={handleSearchTermChange} />
      <div>
        {filteredAgents.map((agent) => (
          <Agent key={agent.id} agent={agent} />
        ))}
      </div> 
    </div>
  );
};

export default Agents;
