import { ReactNode, createContext, useEffect, useState } from 'react';
export interface statusInt {
   score: number;
   flip: number;
   couple: any[];
}

type GameContextType = {
   status: statusInt;
   setstatus: (status: (prev: statusInt) => statusInt) => void;
};
const GameContext = createContext<GameContextType>({
   status: {
      score: 0,
      flip: 0,
      couple: [''],
   },
   setstatus: () => {},
});

export function GameContextProvider({ children }: { children: ReactNode }) {
   let [status, setstatus] = useState({
      score: 0,
      flip: 0,
      couple: [''],
   });
   return <GameContext.Provider value={{ status, setstatus }}>{children}</GameContext.Provider>;
}

export default GameContext;
