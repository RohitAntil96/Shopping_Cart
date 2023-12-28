import {MdOutlineDelete} from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../redux/Slices/CartSlice';
import toast from 'react-hot-toast';

const CartItem = ({item}) => {

  const dispatch= useDispatch();

  const removeFromCart = () =>{
    dispatch(remove(item.id))
    toast.error("Item Removed")
  }
  return (
    <div >
      <div className='flex w-[500px] gap-16 border-b-2 border-slate-600 mt-10 mx-auto p-6 mb-4'>
        <div>
          <img src={item.image} alt="" className=' h-full w-full' />
        </div>
        <div className='max-w-[60%]'>
          <p  className="text-gray-700 font-semibold text-lg text-left truncate mt-1">{item.title}</p>
          <p  className="font-normal text-[13px] text-left mt-3">{item.description.split(" ").slice(0,15).join(" ") + "..."}</p>
          <div className=' flex justify-between w-[15rem] items-center mt-5'>
            <p className="text-green-600 font-semibold">${item.price}</p>

            <div onClick={removeFromCart} className=' bg-red-400  rounded-full flex items-center justify-center h-[2rem] 
            w-[2rem] '>
             <MdOutlineDelete className='hover:cursor-pointer'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
