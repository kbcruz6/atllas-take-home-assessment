import type { FC } from "react";
import { IAgent } from "../../types/Agent";
import axios from "axios";

import './Agent.css'

const Agent: FC<{ agent: IAgent }> = ({ agent }) => {

  const handleDelete = async () => {
        try {
          axios.delete(
            "/" + agent.id
          );
          window.location.reload();
        } catch (err) {
          console.log(err);
        }
      }
  
  return (
    <div className="container max-w-[200px] max-h-[400px]">
      <header>
        <div className="avatar-holder hidden">
          <img src={agent.photoUrl} className="avatar" alt={agent.firstName} />
        </div>
        <h2 className="agent-name bg-slate-600 text-white p-2">{agent.firstName + " " + agent.lastName}</h2>
      </header>
      <div className="body  overflow-scroll">{agent.aboutMe}</div>
      <footer>
        <div className="full-width-flex-box">
          <div className="one-third-flex-box">
            <span>{agent.address}</span>
          </div>
          <div className="one-third-flex-box">
            <span>Areas of Practice: {agent.practiceAreas}</span>
          </div>
        </div>
      </footer>
      <button className="py-1 my-1 bg-red-500 text-white rounded-lg" onClick={handleDelete}>DELETE</button>
    </div>
  );
};

export default Agent;
