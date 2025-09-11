import { Typography, Box } from '@mui/material';

export function ProfilePage() {
    return (
        <Box p={2}>
            <Typography variant="h4">Edit Profile</Typography>
            <Typography>Here you can update your personal info.</Typography>
        </Box>
    );
}

export function SettingsPage() {
    return (
        <Box p={2}>
            <Typography variant="h4">Settings</Typography>
            <Typography>Choose your language and preferences.</Typography>
        </Box>
    );
}

export function HistoryPage() {
    return (
        <Box p={2}>
            <Typography variant="h4">History</Typography>
            <Typography>View your past activity here.</Typography>
        </Box>
    );
}
