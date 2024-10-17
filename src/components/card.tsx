import { useContext, useEffect, useState } from 'react';
import { football, star } from '../assets';
import GameContext from './context/game';

export default function Card() {
   let [content, setcontent] = useState(star);
   let { status, setstatus } = useContext(GameContext);
   return (
      <button
         onClick={(e) => {
            const target = e.currentTarget as HTMLElement;
            const secret = e.currentTarget.id;
            target.id = 'flip';
            setTimeout(() => setcontent(football), 200);
            setstatus((prev) => ({ ...prev, flip: status.flip + 1 }));
            if (status.couple.length == 1 && status.couple[0] == '') {
               setstatus((prev) => ({ ...prev, couple: [secret ?? ''] }));
            } else {
               setstatus((prev) => ({ ...prev, couple: [...status.couple, secret ?? ''] }));
            }
         }}
         id={`${content.split('/')[3].split('.')[0]}`}
         className='w-full h-full cursor-pointer duration-500 sm:min-h-[110px] min-h-[100px] bg-white  p-1 rounded flex justify-center'
      >
         <img src={content} className='sm:w-2/5 w-1/2 object-cover self-center' />
      </button>
   );
}
