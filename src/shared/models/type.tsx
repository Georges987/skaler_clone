interface LinkProps {
    href: string,
    text: string,
    className?: string,
}

interface ButtonProps {
    text: string,
}

interface LinksProps {
    links: Array<React.ReactNode>
}

interface CardProps {
    icon?: React.ReactNode,
    title: React.ReactNode,
    content: string,
    traillings?: React.ReactNode[]
}

export type {
    LinkProps,
    ButtonProps,
    LinksProps,
    CardProps,
}