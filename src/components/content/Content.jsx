const data = [
    {
        id: 1,
        name: "Website",
        url: "https://triwahyudii.github.io/"
    },
    {
        id: 2,
        name: "GitHub",
        url: "https://github.com/triwahyudii"
    },
    {
        id: 3,
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/triwahyudii"
    }
]

export default function Content() {
    return (
        <div>
            <ul className="list">
                {data.map(item => (
                    <li key={item.id}>
                        <a href={item.url}>{item.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}