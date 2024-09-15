import { ButtonProps } from "../../shared/models/type"


export const PrimaryButton = ({text}: ButtonProps) => {
    return (
        <div
            className="text-white w-max rounded-full bg-primary px-4 font-bold py-2 text-base"
        >
            {text}
        </div>
    )
}