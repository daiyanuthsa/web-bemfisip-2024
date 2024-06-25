import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import gedung from "../../assets/Tentang/tentangImage.png";
const Tentang = () => {
  return (
    <div className="bg-[#F7EDE4]">
      <header className="w-full h-screen flex flex-col justify-center items-center gap-4 font-inter text-[#805555]">
        <h3 className="text-7xl font-bold">SEJARAH</h3>
        <h1 className="text-8xl w-4/5 mx-auto text-center text-balance font-black">
          FAKULTAS ILMU SOSIAL DAN POLITIK
        </h1>
      </header>
      <section className=" relative h-screen w-full mt-72">
        <div className=" w-2/4 h-fit z-10   font-inter     absolute top-1/2 -translate-y-1/2 left-1/3 -translate-x-1/2 ">
          <div className="  size-full rounded-l-3xl text-sm relative  z-20 ">
            <img
              src={gedung}
              alt="img"
              className="w-full aspect-auto absolute bottom-1/4 -z-10  left-3/4"
              draggable="false"
            />
            <div className="bg-[#FCEDE0] text-[#4C2C17] size-full p-10 flex flex-col gap-4">
              <p>
                Berdirinya Fakultas Ilmu Sosial dan Ilmu Politik ini, bermula
                dari Pertemuan antara Rektor Universtas Brawijaya yang saat itu
                dijabat Prof. Dr. Eka Afnan Troena, SE dengan Dr. Ir. Darsono
                Wisadirana, MS., yang ketika itu melaporkan bila sudah
                menyelesaikan pendidikan doktornya dari Program Pascasarjana
                Universitas Padjadjaran Bandung dengan menyerahkan surat
                kelulusan dan surat untuk penempatan kembali sebagai dosen pada
                Fakultas Peternakan pada tanggal 28 November 2001. Pada
                pertemuan tersebut Darsono,WS menjelaskan, bahwa telah lulus
                sebagai doktor di bidang sosiologi pada Program Studi Ilmu
                Sosial.
              </p>
              <p>
                {" "}
                Berdasarkan keahlian yang dimiliki tersebut, kemudian Rektor
                menawarkan untuk mendirikan atau membuka fakultas baru di
                Universitas Brawijaya yaitu Fakultas Ilmu Sosial dan Ilmu
                Politik (FISIP). Tawaran tersebut diterima dan disanggupi
                Darsono,WS dengan syarat minta didukung pihak Rektorat, yang
                dimaksud adalah dukungan dari Rektor dan pembantu Rektor.
                Selanjutnya guna menjawab permohonan Dr. Darsono,WS, Rektor
                memanggil Pembantu Rektor I ketika itu (Prof.Dr.Yogi Sugito)
                agar mendukung rencana pendirian FISIP. PR I. sangat mendukung
                dan sanggup untuk membantu secara penuh rencana pendirian FISIP
                tersebut.
              </p>
              <p>
                {" "}
                Berdasarkan kesepakatan mendirikan FISIP, kemudian dilakukan
                pertemuan bertiga (Rektor, PR I dan Darsono,WS) di ruang Rektor,
                membahas dan mematangkan rencana pendirian fakultas baru. Pada
                pertemuan itu Rektor menyerahkan secara penuh kepada PR I untuk
                mengawal dan memimpin pendirian FISIP. Darsono mengusulkan
                kepada Rektor untuk dibentuk Tim Kecil yang bertanggung jawab
                kepada PR I. Tanggal 22 April 2002 melalui Surat Tugas Rektor
                yang ditandatangani PR. I (Prof.Yogi Sugito) atas nama Rektor
                (Prof.Dr.Ir. Bambang Guritno) Nomor 956/J10/AK/2002 dibentuk tim
                perumus Program Ilmu Sosial.
              </p>
            </div>
          </div>

          <div className="bg-[#805555]   font-inter size-full  rounded-l-3xl flex flex-col gap-4 absolute -z0 bottom-10 right-10"></div>
        </div>
      </section>
    </div>
  );
};

export default Tentang;
