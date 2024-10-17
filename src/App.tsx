import { GameContextProvider } from './components/context/game';
import Game from './components/game';
import GameNav from './components/gameNav';

export default function App() {
   return (
      <GameContextProvider>
         <main>
            <GameNav />
            <Game />
         </main>
      </GameContextProvider>
   );
}
