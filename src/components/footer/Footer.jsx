import { FaTelegramPlane, FaWhatsapp, FaTiktok } from 'react-icons/fa'


const data = [
    {
        id: 1,
        url: "https://wa.me/6285745377009",
        icon: <FaWhatsapp />
    },
    {
        id: 2,
        url: 'https://t.me/tridevelop',
        icon: <FaTelegramPlane />
    },
    {
        id: 3,
        url: "https://www.tiktok.com/@heytri.x?_t=8dGyAHsfAIC&_r=1",
        icon: <FaTiktok />
    },
]

export default function Footer() {
    return (
        <footer>
            <ul>
                {data.map(item => (
                    <li key={item.id}><a href={item.url}>{item.icon}</a></li>
                ))}
            </ul>
        </footer>
    )
}