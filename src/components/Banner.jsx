import { StoreContext } from '../utils/store';
import { useContext } from 'react';
import design from '../assets/design.png';

function Banner() {
  const { state } = useContext(StoreContext);
  return (
    <div className='font-Open text-center h-screen p-5 left-10 right-10 bg-gray-100  mx-auto pt-2 '>
      {/* <h1>{state.account || 'loading'}</h1> */}
      <div className='font-extrabold text-7xl p-2  text-gray-800'>
        Decentraskill
      </div>
      <div className='text-4xl p-2 text-gray-800 '>
        Your Verified Virtual Resume
      </div>
      <div class='p-8 w-1/2 mx-auto'>
        <div class='bg-white flex items-center   rounded-full shadow-xl'>
          <input
            class='rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none'
            id='search'
            type='text'
            placeholder='Search'
          />

          <div class='p-4'>
            <button class='bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700 focus:outline-none w-12 h-12 flex items-center justify-center'>
              <i class='material-icons'>search</i>
            </button>
          </div>
        </div>
      </div>
      <img src={design} alt='' className='mx-auto' />
    </div>
  );
}

export default Banner;
