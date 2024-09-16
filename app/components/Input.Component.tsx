type InputType = {
    label: string,
    value?: string,
    type?: string | 'text',
    name: string,
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function InputComponent({ label, value, type, name, handleChange }: InputType): React.ReactNode{
    return(
        <div className="w-3/4 my-2 flex flex-col items-center justify-center">
            <label className="w-full flex items-center justify-start">{ label }</label>
            <input className="w-full h-12 px-2 bg-slate-100 rounded-md outline-none" type={type} value={ value } name={ name } onChange={ handleChange }/>
        </div>
    )
}