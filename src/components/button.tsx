export interface ButtonProps {
    text: string;
    className: string;
    type?: string;
}

const Button:React.FC<ButtonProps> = ({text, className, type="button"}) => {
    return (<input className={className} type={type} value={text}/>)
}

export default Button;
