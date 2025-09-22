type Props = {
    value: string;
    onChange: (val: string) => void;
};

export function PhoneInput({ value, onChange }: Props) {
    return (
        <input
            type="tel"
            placeholder="Phone"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            style={{
                width: '100%',
                padding: '0.5rem',
                fontSize: '1rem',
            }}
        />
    );
}
