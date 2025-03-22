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
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-60 h-30 bg-[#FFDA44] rounded-t-lg" />
          <motion.div
            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-65 h-40 bg-white rounded-md shadow-md p-2 text-xs overflow-hidden"
            initial={{ y: 0 }}
            animate={{ y: open ? -80 : hover ? -20 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <p>BUAT CEN</p>
          </motion.div>
          <div className="w-80 h-40 bg-[#EE8700] rounded-4xl relative overflow-hidden shadow-lg cursor-pointer mb-3"/>
          <p className='justify-center items-center text-center'>INI CERITANYA SURAT<br/> COBA DI KLIK</p>
        </motion.div>
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 flex justify-center items-center bg-black/50 p-4">
          <Card className="w-full md:w-1/2 bg-white p-5 rounded-lg max-h-[80vh] flex flex-col overflow-y-auto mb-2 mt-2">
            <CardContent className="flex-grow overflow-y-auto p-4">
              <p className="text-sm md:text-base">
                oi Cen!! <br />

                DAMN 20!! udah ngerasa tua lom, fase "dewasa" bro kalo biasanya di meme-meme "hidup mulai serius". DAMN AKU BINGUNG NULIS APA LAGI!! <br/> <br/>

                Tapi yaudah kita mulai dari yang jelas-jelas dulu. Selamat Ulang Tahun, Cen!. Umur nambah tanggung jawab makin banyak, terus giat juga kek ada aja ada aja bjir ga ngerem. Giat ini ke itu lah gantian ini dan anu lah HAHHAAHA. Semoga kamu bisa terus semangat njalanin hari, njalanin giatmu yang ga ada abisnya itu yaa. <br/><br/>

                Aku tau, dan orang-orang mungkin juga berpikir hal yang sama kalau kamu tuh rill bisa semuanya, INDEPENDEN DAN MANDIRI semuanya aja dibabat abis dasar manusia super anomali. tapi ya cen, serius inimah, aku yakin juga kalau manusia juga bisa cape, kamu juga manusia, jadi kalau harimu jelek atau sekedar "aku lelah" itu gapapa banget kok gaperlu merasa kayak kamu akan jadi "aleman" karena itu dan kamu selalu bisa cerita soal itu untuk yapping yapping ke siapapun, ke aku juga oke kokk, daripada kamu sikatin terus tu kamar mandi. BRANDINGAN WANITA TANGGUH KUAT TEGAR SEGALA MEDAN APALAH. Aku ga janji sih bisa selalu ngasih advice yang tepat, tapi serius aku dengerin. Aku juga sekalian berterimakasih kamu udh mau mendengarkan aku yapping tiap hari sepertinya jadi jangan sungkan HEHE. <br/><br/>

                Aku kan dah pernah bilang ya, kalau kamu jadi bunga, bunganya tuh bunga matahari coy. Gini, mungkin udh beberapa kali ya aku bilang dan kamu lupa atau kamu bosan atau kamu bodoamat tapi ini aku ulangi. Kamu tuh bawaannya tuh hepi-hepi dan itu bikin orang-orang disekitar juga ikut hepi tauu. Seengganya itu sih sepengetahuanku dan yang kurasa juga. Jadi, sadar ngga sadar, kalau kamu ada di satu lingkungan tuh suasananya jadi oke aja, kayak vibe positif yang kamu bawa, jadi seperti matahari kecil tuh disitu. (DAMN INI GAK LEBAY YA SEMOGA (TAPI BY MEANING INI BENERAN)). NAH, kita buat nyambung nih (ceritanya bridging), Bunga Matahari tu kan juga butuh yang namanya matahari, butuh air, butuh tanah juga, kamu juga gitu. Kamu boleh kok menjadi Wanita dengan branding mandiri kuat Tangguh tegar bisa segalanya itu, tapi bukan berarti harus sendirian trs. yh aku dh bilang lh tadi di atas, ini kayak reminder lagi aja soalnya ni lumayan penting dan perlu di highlight, ya semoga dimengerti dengan baik. <br/><br/>

                Anyway, 20 tu kayak angka yang rame bgt ya (pikirku). Aku yakin bakal ada lebih banyak hal-hal baru yang harus kamu hadapin nanti, pastinya juga makin banyak momen-momen yang bikin "INILAH HIDUP DEWASA" HAHAHA, ya apapun itu ya mau seru, mau absurd, mau sedih, mau bagaimanapun ya cobalah dijalani sepenuhnya. KAMU INGETKAN AKU SURUH KAMU DENGARKAN LAGUNYA HINDIA YANG LIRIKNYA "LAKUKAN APA YANG KAU MAU SEKARANG, SAAT HATIMU BERGERAK JANGAN KAU LARANG BLBABLABA" dan yap, semoga hidupmu seterusnya bisa se hepi hepi lagu itu sembari menjalani hidup makin banyak tanggung jawab. <br/><br/>

                Ngomong-ngomong soal tanggung jawab, ini kedokteran ni dok. Kamu nantinya kan akan menjadi seseorang yang bakal nolongin banyak orang nantinya ya. Menjadi dokter. Dokter Centryn, goks dh. Semoga dalam prosesnya, kamu selalu diberi kekuatan, ketabahan, kesabaran, dan semangat ya buat cita-cita mulia itu. Kalau satu titik nanti tiba tiba kamu rasa cape ya istirahat dan liat kebelakang sudah sejauh mana kamu berproses (YA WALAUPUN AKU JUGA TAU KAMU BUKAN TIPIKAL ORG YANG AKAN MENYERAH). Terus juga kan sekarang kamu lagi ujian nih yaa, semoga diperlancar segala-galanya, bisa garap dengan tenang, ga panikan dan maksimal. JANGAN LUPA ISTIRAHAT JUGA KOCAK <br/><br/>

                Ya intinya sih, semoga kamu bisa tetep terus happy yaa. Aku tau kamu sibuk, jangan lupa istirahat, jangan lupa nikmatin hal-hal kecil di hidup dan rayain tiap-tiap keberhasilan sekecil apapun.   <br/><br/>

                OYA, inimah notes tambahan aja. Kalau kamu dh baca ini, dan kamu sudah di kost, dan senggang (tidak akan ada acara bepergian). kabarin aku. Ada yang perlu kukasi tau. <br/><br/>
                
                
             </p>
            </CardContent>
            <Button className="mt-4 cursor-pointer self-end" onClick={() => setOpen(false)}>
              Tutup
            </Button>
          </Card>
        </div>
      )}
    </div>
  );
}
