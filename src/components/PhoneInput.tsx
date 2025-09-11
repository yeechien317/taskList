// src/components/PhoneInput.tsx
import { TextField } from '@mui/material';

export const PhoneInput = ({ value, onChange }: any) => (
    <TextField label="Phone" fullWidth value={value} onChange={e => onChange(e.target.value)} />
);
