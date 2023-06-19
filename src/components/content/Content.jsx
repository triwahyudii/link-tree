/* eslint-disable react/jsx-no-undef */
import {
    FaTelegramPlane,
    FaTiktok,
    FaGlobe,
    FaGithub,
    FaLinkedin
} from 'react-icons/fa'
import {RiWhatsappFill} from 'react-icons/ri'

const data = [
    {
        id: 1,
        name: "Website",
        url: "https://triwahyudii.github.io/",
        icon: <FaGlobe />
    },
    {
        id: 2,
        name: "GitHub",
        url: "https://github.com/triwahyudii",
        icon: <FaGithub />
    },
    {
        id: 3,
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/triwahyudii",
        icon: <FaLinkedin />
    },
    {
        id: 4,
        name: "WhatsApp",
        url: "https://wa.me/6285745377009",
        icon: <RiWhatsappFill />
    },
    {
        id: 5,
        name: "Telegram",
        url: 'https://t.me/tridevelop',
        icon: <FaTelegramPlane />
    },
    {
        id: 6,
        name: "Tik Tok",
        url: "https://www.tiktok.com/@heytri.x?_t=8dGyAHsfAIC&_r=1",
        icon: <FaTiktok />
    },
]

export default function Content() {
    return (
        <div>
            <ul className="list">
                {data.map(item => (
                    <li key={item.id}>
                        <a href={item.url}>
                            <span className="text">{item.name}</span>
                            <span className='icon'>{item.icon}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}