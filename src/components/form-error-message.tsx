interface FormErrorMessageProps {
    error: string
}

export function FormErrorMessage({ error }: FormErrorMessageProps) {
    return (
        <p className="text-sm mt-1 text-rose-500">{error}</p>
    )
}