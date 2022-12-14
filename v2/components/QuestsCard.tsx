import { classNames } from "v2/utils";
import QuestItemCard from "./QuestItemCard";
import React, { useState } from 'react';

const QuestCard = () => {

    // TODO : fetch the right quests on each click
    // For each quest : gat reward and status if claimmed or not
    const onButtonClick = (mode : string) => {
      switch (mode) {
        case "All":
          setState("All");
          break;
        case "Popular":
          setState("Popular");
          break;
        case "Claimmed":
          setState("Claimmed");
          break;
        default:
          break;
      }
    }
    const [state, setState] = useState("All");

    return (
        <div className="bg-gradient rounded-2xl border border-foreground-alt-500 shadow ">
          <div className="relative  border-foreground-alt-500">
           {/* LINE OF 3 BUTTONS */}
            <div className="flex items-stretch">
              <div className="py-4 pl-8 pr-4">
                <button 
                  onClick={() => onButtonClick("All")} 
                  className={classNames(
                    state === "All" ?
                    "bg-teal-500  hover:bg-teal-500  text-white font-bold py-2 px-4 rounded"
                    : "bg-indigo-900	  hover:bg-slate-900	 text-white font-bold py-2 px-4 rounded",
                  )}
                >
                  All
                </button>
              </div>

              <div className="py-4 pr-4">
                <button 
                  onClick={() => onButtonClick("Popular")} 
                  className={classNames(
                    state === "Popular" ?
                    "bg-teal-500  hover:bg-teal-500  text-white font-bold py-2 px-4 rounded"
                    : "bg-indigo-900		  hover:bg-slate-900	 text-white font-bold py-2 px-4 rounded",
                  )}
                >
                  Popular
                </button>
              </div>

              <div className="py-4">
                <button 
                  onClick={() => onButtonClick("Claimmed")} 
                  className={classNames(
                    state === "Claimmed" ?
                    "bg-teal-500  hover:bg-teal-500  text-white font-bold py-2 px-4 rounded"
                    : "bg-indigo-900  hover:bg-slate-900	 text-white font-bold py-2 px-4 rounded",
                  )}
                >
                  Claimmed
                </button>
              </div>

            </div>
          </div>
          
          <div className="relative px-6 py-4 sm:px-8 sm:py-6">
            {/* GRID OF 4 ELEMENTS PER PAGE WITH 2 ROWS */}
            <div className="grid grid-cols-4 gap-4 ">
                <QuestItemCard gameImg="/assets/ggquest/dashboardGames/game7.png" title="Axie Infinity" reward={75}/>
                <QuestItemCard gameImg="/assets/ggquest/dashboardGames/game2.png" title="Illuvium" reward={75}/>
                <QuestItemCard gameImg="/assets/ggquest/dashboardGames/game3.png" title="Big Time" reward={75}/>
                <QuestItemCard gameImg="/assets/ggquest/dashboardGames/game4.png" title="Sandbox" reward={75}/>
                <QuestItemCard gameImg="/assets/ggquest/dashboardGames/game2.png" title="Illuvium" reward={75}/>
                <QuestItemCard gameImg="/assets/ggquest/dashboardGames/game6.png" title="Star Atlas" reward={75}/>
                <QuestItemCard gameImg="/assets/ggquest/dashboardGames/game7.png" title="Axie Infinity" reward={75}/>
                <QuestItemCard gameImg="/assets/ggquest/dashboardGames/game8.png" title="Sandbox" reward={75}/>

            </div>
          </div>
        </div>
      );
}

export default QuestCard;