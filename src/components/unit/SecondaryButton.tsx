import { ButtonProps } from "../../shared/models/type"

export const SecondaryButton = ({text}: ButtonProps) => {
    return (
        <div
            className="text-primary cursor-pointer w-max rounded-full border px-4 font-bold py-2 text-base"
        >
            {text}
        </div>
    )
}