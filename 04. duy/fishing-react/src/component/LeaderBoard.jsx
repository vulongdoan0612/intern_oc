import React from "react";
import { MdLeaderboard } from "react-icons/md";
export const LeaderBoard = () => {
  return (
    <div>
      <h1 className="text-center">
        <MdLeaderboard />
        Leaderboard
      </h1>
      <ol className="list-group list-group-flush list-group-numbered">
        <li className="list-group-item">Cras justo odio</li>
        <li className="list-group-item">Cras justo odio</li>
        <li className="list-group-item">Cras justo odio</li>
        <li className="list-group-item">Cras justo odio</li>
        <li className="list-group-item">Cras justo odio</li>
        <li className="list-group-item">Cras justo odio</li>
        <li className="list-group-item">Cras justo odio</li>
        <li className="list-group-item">Cras justo odio</li>
      </ol>
    </div>
  );
};
