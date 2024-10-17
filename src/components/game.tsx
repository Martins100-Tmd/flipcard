import { useContext } from 'react';
import { award, flip, timer } from '../assets';
import Card from './card';
import GameContext from './context/game';

export default function Game() {
   let { status } = useContext(GameContext);
   return (
      <section className='flex flex-col items-start w-full sm:gap-3 gap-4'>
         <section className='flex flex-row items-center gap-4 sm:w-4/5 w-[97%] mx-auto'>
            <div className='flex flex-row items-center'>
               <div className='w-[2.5rem] h-[2.5rem] rounded-full bg-white self-center p-1 flex justify-center'>
                  <img src={award} className='w-4/5 mx-auto self-center object-cover' />
               </div>
               <div className='w-auto sm:px-7 px-4 py-1 flex justify-center self-center bg-white -ml-1.5 rounded-r-2xl'>
                  <p className='font-style font-medium text-sm'>
                     Score:
                     <span className='font-bold ml-0.5'>{status.score}</span>
                  </p>
               </div>
            </div>
            <div className='flex flex-row items-center'>
               <div className='w-[2.5rem] h-[2.5rem] rounded-full bg-white self-cente flex p-1 justify-centerr'>
                  <img src={flip} className='w-[80%] mx-auto self-center object-cover' />
               </div>
               <div className='w-auto sm:px-7 px-4 py-1 flex justify-center self-center bg-white -ml-1.5 rounded-r-2xl'>
                  <p className='font-style font-medium text-sm'>
                     Flip:
                     <span className='font-bold ml-0.5'>{status.flip}</span>
                  </p>
               </div>
            </div>
            <div className='flex flex-row items-center'>
               <div className='w-[2.5rem] h-[2.5rem] rounded-full bg-white self-center p-1 flex justify-center'>
                  <img src={timer} className='w-4/5 mx-auto self-center object-cover' />
               </div>
               <div className='w-auto sm:px-7 px-4 py-1 flex justify-center self-center bg-white -ml-1.5 rounded-r-2xl'>
                  <p className='font-style font-medium text-sm'>
                     Timer:
                     <span className='font-bold ml-0.5'>{0}</span>
                  </p>
               </div>
            </div>
         </section>
         <section className='grid grid-cols-4 w-full sm:w-4/5 mx-auto gap-x-1 gap-y-2 p-2'>
            {Array.from(Array(16)).map((item) => {
               return (
                  <div key={item}>
                     <Card />
                  </div>
               );
            })}
         </section>
      </section>
   );
}
