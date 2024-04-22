export function LinkButton({ caption, href, target }: { caption: string; href: string; target?: string }) {
    return (
        <a href={href} target={target}>
            <div className="cursor-pointer border-2 rounded w-fit px-4 text-yellow-400 border-yellow-400 hover:bg-[#1b1a1f] hover:text-yellow-500 hover:border-yellow-500">
                {caption}
            </div>
        </a>
    )
}