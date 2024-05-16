'use client'
import { motion } from "framer-motion";

export default function Upbar() {
  return (
    <motion.div 
    initial={{ y:'-100%' }}
    animate={{ y:0 }}
    transition={{ 
        duration:0.6,
        ease:'easeInOut'
     }}
    className="py-6 border-b-2 flex flex-col border-black items-center">
      <h1 className="font-semibold text-5xl">Inbox</h1>
    </motion.div>
  );
}
