import {
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    IconButton,
    Toolbar,
    AppBar,
    Typography,
    Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import HistoryIcon from '@mui/icons-material/History';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { useSidebar } from './useSidebar';
import { ProfilePage, SettingsPage, HistoryPage } from './routes';

const drawerWidth = 240;

function Layout() {
    const { open, toggleDrawer } = useSidebar();
    const navigate = useNavigate();

    return (
        <Box sx={{ display: 'flex' }}>
            {/* Top AppBar */}
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        edge="start"
                        onClick={toggleDrawer}
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
            My App
                    </Typography>
                </Toolbar>
            </AppBar>

            {/* Sidebar Drawer */}
            <Drawer
                variant="persistent"
                anchor="left"
                open={open}
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
            >
                <Toolbar />
                <List>
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => navigate('/profile')}>
                            <ListItemIcon>
                                <PersonIcon />
                            </ListItemIcon>
                            <ListItemText primary="Edit Profile" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton onClick={() => navigate('/settings')}>
                            <ListItemIcon>
                                <SettingsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Settings (Language)" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton onClick={() => navigate('/history')}>
                            <ListItemIcon>
                                <HistoryIcon />
                            </ListItemIcon>
                            <ListItemText primary="History" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>

            {/* Main Content */}
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, marginLeft: open ? `${drawerWidth}px` : 0 }}
            >
                <Toolbar />
                <Routes>
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/settings" element={<SettingsPage />} />
                    <Route path="/history" element={<HistoryPage />} />
                    <Route
                        path="/"
                        element={<Typography variant="h4">Welcome! Select a menu option.</Typography>}
                    />
                </Routes>
            </Box>
        </Box>
    );
}

export default function Home() {
    return <Layout />;
}
