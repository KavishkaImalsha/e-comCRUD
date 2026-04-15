import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Heart, Trash2 } from 'lucide-react';
import Image from 'next/image'

const SwipeableItem = ({ item }) => {
  const x = useMotionValue(0);
  
  const opacity = useTransform(x, [-100, -150], [0, 1]);

  return (
    <div className="relative overflow-hidden my-3 w-[315px] h-[144px] rounded-xl bg-gray-100">
      
      {/* Background Actions (Visible when swiped) */}
      <motion.div 
        style={{ opacity }}
        className="absolute inset-0 flex justify-end items-center bg-orange-500 pr-4 gap-4"
      >
        <button className="p-2 bg-white rounded-full text-pink-500">
          <Heart size={20} fill="currentColor" />
        </button>
        <button className="p-2 bg-white rounded-full text-red-600">
          <Trash2 size={20} />
        </button>
      </motion.div>

      <motion.div
        drag="x"
        dragConstraints={{ left: -160, right: 0 }} // Limits how far you can swipe
        style={{ x }}
        whileTap={{ cursor: 'grabbing' }}
        className="relative z-10 flex gap-4 w-full h-full bg-white p-2 shadow-sm"
      >
        <div className="flex-shrink-0">
          <Image
            src={item.image}
            alt={item.name}
            width={108}
            height={142}
            className="rounded-lg object-cover"
          />
        </div>
        <div className="flex flex-col justify-between flex-grow">
          <span className="h-[44px]">
            <p className="text-[18px] font-bold font-imprima">{item.name}</p>
          </span>
          <div className="text-[14px] text-[#797780] font-imprima">
            <p>{item.color}</p>
            <p>{item.size}</p>
          </div>
          <div className="text-[26px] font-bold font-imprima flex justify-between items-center">
            <p>${item.price}</p>
            <p className="text-[10px]"><span className="text-[28px]">{item.qty}</span>x</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SwipeableItem