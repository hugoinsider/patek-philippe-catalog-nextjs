import React from 'react'

interface ICustonLinkProps {
    title: string
    url: string
    text_transform?: 'uppercase' | 'lowercase' | 'capitalize' | 'initial'
}

const CustonLink = ({ title, text_transform }:ICustonLinkProps) => (
    <a style={{
        textTransform: text_transform
    }} className='flex flex-col items-center hover:bg-[#C0AF9F] px-[1rem] group cursor-pointer'>
        <div className='py-[2rem] text-[#C0AF9F] group-hover:text-white text-[1.2rem]'>
            <span>{title}</span>
        </div>
        <div className='w-[100%] h-[4px] bg-[#C0AF9F] group-hover:bg-white'>

        </div>
    </a>
)

interface ILink {
    title: string
    url: string
    text_transform?: 'uppercase' | 'lowercase' | 'capitalize' | 'initial'
}

export function Topbar(){

    const linkList : ILink[] = [
        {
            title: 'Home',
            url: '#',
        },
        {
            title: 'COLLECTION',
            url: '#',
            text_transform: 'uppercase'
        },
        {
            title: 'COMPANY',
            url: '#',
            text_transform: 'uppercase'
        },
        {
            title: 'RETAIL & SERVICE',
            url: '#',
            text_transform: 'uppercase'
        },
    ]

    return (
        <header className='flex flex-col items-center'>
            <div>
                <img className='h-[180px] w-[180px]' src='/logo_patek_text_beige.svg' />
            </div>
            <nav className='mt-[1rem]'>
                <ul>
                    <li className='flex flex-row'>
                        {linkList?.map((props, idx) => <CustonLink key={idx} {...props} />)}
                    </li>
                </ul>
            </nav>
        </header>
    )
}