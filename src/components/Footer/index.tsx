import React from 'react'
import { GrInstagram, GrYoutube  } from "react-icons/gr";

export function Footer() {
    return (
        <footer className='w-full bg-white flex flex-col items-center mt-[5rem]'>
            <div className='w-[770px] mt-[2rem] mb-[3rem] grid grid-cols-4 gap-x-[20px]'>
                <div className='flex flex-col gap-y-[2rem]'>
                    <div>
                        <span className='text-[#ab947d] uppercase text-[1.2rem] font-[500]'>Collection</span>
                        <ul>
                            <li className='font-[500]'>All models</li>
                            <li className='font-[300] italic'>New Models 2024</li>
                        </ul>
                    </div>
                    <ul>
                        <li className='font-[300] italic'>Grand Complications</li>
                        <li className='font-[300] italic'>Complications</li>
                        <li className='font-[300] italic'>Calatrava</li>
                        <li className='font-[300] italic'>Gondolo</li>
                        <li className='font-[300] italic'>Golden Ellipse</li>
                        <li className='font-[300] italic'>Nautilus</li>
                        <li className='font-[300] italic'>Aquanaut</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-y-[2rem]'>
                    <ul>
                        <li className='font-[300] italic'>Twenty~4</li>
                        <li className='font-[300] italic'>Pocket Watches</li>
                        <li className='font-[300] italic'>Rare Handcrafts</li>
                    </ul>
                    <div>
                        <span className='text-[#ab947d] uppercase text-[1.2rem] font-[500]'>Company</span>
                        <ul>
                            <li className='font-[500]'>Savoir-Faire</li>
                            <li className='font-[300]'>The Manufacture</li>
                        </ul>
                    </div>
                    <div>
                        <span className='text-[#ab947d] uppercase text-[1.2rem] font-[500]'>Others</span>
                        <ul>
                            <li className='font-[300]'>Wallpapers</li>
                            <li className='font-[300]'>Glossary</li>
                            <li className='font-[300]'>Cookie Settings</li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-col gap-y-[2rem]'>
                    <div>
                        <span className='text-[#ab947d] uppercase text-[1.2rem] font-[500]'>Retail</span>
                        <ul>
                            <li className='font-[300]'>Patek Philippe Salons</li>
                            <li className='font-[500]'>Authorized Retailers</li>
                        </ul>
                    </div>
                    <div>
                        <span className='text-[#ab947d] uppercase text-[1.2rem] font-[500]'>Services</span>
                        <ul>
                            <li className='font-[500]'>Owners </li>
                            <li className='font-[300]'>Service Centers</li>
                            <li className='font-[300]'>Extract from the archives</li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-col gap-y-[2rem]'>
                    <div>
                        <span className='text-[#ab947d] uppercase text-[1.2rem] font-[500]'>Contact</span>
                        <ul>
                            <li className='font-[500]'>Contact </li>
                            <li className='font-[300]'>Careers</li>
                            <li className='font-[300]'>Press</li>
                        </ul>
                    </div>
                    <div>
                        <span className='text-[#ab947d] uppercase text-[1.2rem] font-[500]'>Follow us</span>
                        <ul>
                            <li className='font-[300]'>Press Releases</li>
                        </ul>
                        <div className='mt-[10px] flex flex-row items-center gap-x-[20px]'>
                            <a>
                                <GrInstagram size={32} color='#ab947d' />
                            </a>
                            <a>
                                <GrYoutube size={43} color='#ab947d' />
                            </a>
                        </div>
                    </div>
                    <div>
                        <span className='text-[#ab947d] uppercase text-[1.2rem] font-[500]'>Site Map </span>
                    </div>
                </div>
            </div>
            <div className='w-[890px] mb-[2rem]'>
                <hr className='border-[#C0AF9F]'></hr>
                <div className='flex flex-col items-center mt-[2rem]'>
                    <p className='text-[13px] text-[#ab947d]'> [  Legal notices  ]  -  © 2024 Patek Philippe SA </p>
                    <div>
                        <img className='h-[80px] w-[180px]' src='/logo_patek_text_beige.svg' />
                    </div>
                </div>
            </div>
        </footer>
    )
}