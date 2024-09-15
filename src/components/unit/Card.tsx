import { CardProps } from "../../shared/models/type"

export const Card = (props: CardProps) => {
    return (
        <div
            className="h-[250px] rounded-lg p-4 ring-2 ring-white bg-white bg-opacity-60"
        >
            <div 
                className="my-2"
            >
                {props.icon}
            </div>
            <div
                className="flex justify-between my-2"
            >
                <div
                    className="text-xl bg-clip-text font-bold text-card-title"
                >{props.title}</div>
                <div className="flex">
                    {props.traillings}
                </div>
            </div>
            <div>
                {props.content}
            </div>
        </div>
    )
}