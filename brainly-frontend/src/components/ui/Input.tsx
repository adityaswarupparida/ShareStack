export const Input = ({ placeholder, reference }: {
    placeholder: string;
    reference?: any;
}) => {
    return <div className="py-2">
        <input ref={reference} type="text" placeholder={placeholder} className="p-2 w-full border border-gray-100 rounded"></input>
    </div>
}