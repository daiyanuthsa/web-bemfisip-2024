import { Icon } from '@iconify/react/dist/iconify.js'
import { Link } from '@inertiajs/react'
import React from 'react'


const Footer = ({bg ='bg-transparent'}) => {
  return (
      <div className={bg}>
          <footer className="bg-gradient-to-r  from-white via-[#006181] font-inter to-black rounded-tl-[15rem]">
              <main className="container mx-auto lg:px-16 md:px-10 px-4 py-10 gap-4 flex lg:flex-row flex-col-reverse justify-between">
                  <div className="lg:w-4/6 flex lg:flex-row flex-col">
                      <div className="w-full h-full flex justify-center items-center">
                          <a
                              className="text-[#081F5C] border-[#081F5C] border-2 lg:text-lg rounded-2xl p-1 lg:p-3 h-fit w-fit"
                              href="https://liff.line.me/1645278921-kWRPP32q/?accountId=290krxoq"
                              target="_blank"
                          >
                              ADVO CENTER
                          </a>
                      </div>
                      <div className="w-full grid gap-y-4 mt-10 lg:mt-0 grid-cols-2 text-white">
                          <a
                              className="flex items-center gap-3"
                              href="https://www.tiktok.com/@bemfisipub"
                              target="_blank"
                          >
                              <Icon
                                  icon={"ic:baseline-tiktok"}
                                  className="bg-[#081F5C] lg:p-2 p-1 rounded-full text-3xl lg:text-5xl text-white"
                              />
                              <p>bemfisipub</p>
                          </a>
                          <a
                              className="flex items-center gap-3"
                              href="https://liff.line.me/1645278921-kWRPP32q/?accountId=bemfisipub"
                              target="_blank"
                          >
                              <Icon
                                  icon={"jam:line"}
                                  className="bg-[#081F5C] lg:p-2 p-1 rounded-full text-3xl lg:text-5xl text-white"
                              />
                              <p>@bemfisipub</p>
                          </a>
                          <a
                              className="flex items-center gap-3"
                              href="https://x.com/BEMFISIPUB"
                              target="_blank"
                          >
                              <Icon
                                  icon={"pajamas:twitter"}
                                  className="bg-[#081F5C] lg:p-2 p-1 rounded-full text-3xl lg:text-5xl text-white"
                              />
                              <p>bemfisipub</p>
                          </a>
                          <a
                              className="flex items-center gap-3"
                              href="https://www.linkedin.com/company/bem-fisipub-2024/"
                              target="_blank"
                          >
                              <Icon
                                  icon={"ri:linkedin-fill"}
                                  className="bg-[#081F5C] lg:p-2 p-1 rounded-full text-3xl lg:text-5xl text-white"
                              />
                              <p>bemfisipub2024</p>
                          </a>
                          <a
                              className="flex items-center gap-3"
                              href="https://www.youtube.com/@bemfisipub"
                              target="_blank"
                          >
                              <Icon
                                  icon={"mingcute:youtube-fill"}
                                  className="bg-[#081F5C] lg:p-2 p-1 rounded-full text-3xl lg:text-5xl text-white"
                              />
                              <p>BEM FISIB UB</p>
                          </a>
                          <a
                              className="flex items-center gap-3"
                              href="https://www.instagram.com/bemfisipub/"
                              target="_blank"
                          >
                              <Icon
                                  icon={"hugeicons:instagram"}
                                  className="bg-[#081F5C] lg:p-2 p-1 rounded-full text-3xl lg:text-5xl text-white"
                              />
                              <p>bemfisipub</p>
                          </a>
                      </div>
                  </div>
                  <div className="lg:w-2/6 flex flex-col gap-3 justify-end">
                      <div className="lg:w-full w-3/5 ms-auto aspect-[7/5] rounded-2xl bg-gray-600 overflow-hidden">
                          <iframe
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1382.690219772037!2d112.61134059996876!3d-7.949916168507251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78827bc35467e1%3A0x364f4b5e8098aa2e!2sFISIP%20Universitas%20Brawijaya!5e0!3m2!1sid!2sid!4v1720061622800!5m2!1sid!2sid"
                              className="size-full"
                              allowfullscreen=""
                              loading="lazy"
                              referrerpolicy="no-referrer-when-downgrade"
                          ></iframe>
                      </div>
                      <p className="lg:text-xl text-sm px-3 border-r-2 border-white  font-inter text-right text-white">
                          Gedung Sekretariat LKM FISIP Universitas Brawijaya,
                          Jalan Veteran{" "}
                      </p>
                  </div>
              </main>
          </footer>
      </div>
  );
}

export default Footer
