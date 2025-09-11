// src/components/SubmitButton.tsx
import { Button, CircularProgress } from '@mui/material';

export const SubmitButton = ({ onClick, loading, label }: any) => (
    <Button fullWidth variant="contained" onClick={onClick} disabled={!!loading}>
        {loading ? <CircularProgress size="1rem" /> : label}
    </Button>
);
