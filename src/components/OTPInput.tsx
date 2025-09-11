// src/components/OTPInput.tsx
import { TextField } from '@mui/material';

export const OTPInput = ({ value, onChange }: any) => (
    <TextField label="OTP" fullWidth value={value} onChange={e => onChange(e.target.value)} />
);
