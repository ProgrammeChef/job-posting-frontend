export interface InputProps {
    placeholder: string;
    className: string;
    type: string;
    Name: string;
}

const Input:React.FC<InputProps> = ({placeholder, className, type, Name}) => {
    return (<input name={Name} placeholder={placeholder} max={15} min={10} className={className} style={{ width: "-webkit-fill-available" }} type={ type } />)
}

export default Input;
