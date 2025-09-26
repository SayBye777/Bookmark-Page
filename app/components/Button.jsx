export default function Button({label}) {
    return (
        <button className="px-6 py-2 mx-auto bg-blue-500 text-white shadow-lg rounded-lg cursor-pointer border-2 border-transparent
        hover:bg-white hover:text-blue-500 hover:border-blue-500 hover:border-2">
            {label}
        </button>
    )
}