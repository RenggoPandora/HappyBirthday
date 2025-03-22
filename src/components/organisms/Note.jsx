
import { useState } from "react";
import { motion } from "framer-motion";
import Card from "../ui/Card";
import CardContent from "../ui/CardContent";
import Button from "../ui/Button";

export default function NotesPage() {
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div 
        className="relative"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <motion.div
          className="w-80 h-40 bg-[#EE8700] rounded-lg relative shadow-lg cursor-pointer"
          onClick={() => setOpen(true)}
          initial={{ y: 0 }}
          animate={{ y: open ? -80 : hover ? -20 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-60 h-30 bg-yellow-300 rounded-t-lg" />
          <motion.div
            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-65 h-40 bg-white rounded-md shadow-md p-2 text-xs overflow-hidden"
            initial={{ y: 0 }}
            animate={{ y: open ? -80 : hover ? -20 : 0 }}
            transition={{ duration: 0.5 }}
          >
            
            <p>SURAT SURATAN COY</p>
          </motion.div>
          <div className="w-80 h-40 bg-[#EE8700] rounded-4xl relative  overflow-hidden shadow-lg cursor-pointer mb-3"/>
          <p className='justify-center items-center text-center'>INI CERITANYA SURAT<br/> COBA DI KLIK</p>
        </motion.div>
        
      </div>
      {open && (
        <div className="fixed inset-0 flex justify-center items-center">
          <Card className="w-96 bg-white p-5">
            <CardContent>
              <p>Isi lengkap surat ini...</p>
              <Button className="mt-4 cursor-pointer" onClick={() => setOpen(false)}>
                Tutup
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
