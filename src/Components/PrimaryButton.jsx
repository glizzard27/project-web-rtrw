export default function PrimaryButton({ className, children }) {
    return (
        <button className={`bg-blue-500 hover:bg-blue-700 duration-200 py-1.5 px-3 text-white font-medium rounded transition ${className}`}>{children}</button>
    )
}