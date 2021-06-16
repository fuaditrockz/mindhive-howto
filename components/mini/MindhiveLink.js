import Link from 'next/link'

export default function MindhiveLink({
    title,
    route,
    href
}) {
    return (
        <li>
            <Link href={href}>
                <a
                    style={{
                        pointerEvents: route !== href ? null : 'none',
                        color: route !== href ? 'inherit' : '#a2a2a2'
                    }}
                >
                    {title}
                </a>
            </Link>
        </li>
    )
}