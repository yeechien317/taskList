type Props = {
    onClick: () => void;
    loading: boolean;
    disabled: boolean;
    label: string;
};

export function SubmitButton({ onClick, loading, disabled, label }: Props) {
    return (
        <button
            onClick={onClick}
            disabled={disabled || loading}
            style={{
                width: '100%',
                padding: '0.75rem',
                marginTop: '0.5rem',
                backgroundColor: '#1976d2',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: disabled ? 'not-allowed' : 'pointer',
            }}
        >
            {loading ? 'Loading...' : label}
        </button>
    );
}
