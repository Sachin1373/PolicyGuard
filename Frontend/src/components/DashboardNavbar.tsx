import { Avatar, Box, IconButton, Menu, MenuItem, Typography, Divider, Badge } from "@mui/material";
import { useEffect, useState, type MouseEvent } from "react";
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { userDetails } from "../utils/Utility";
import { logout } from "../redux/AuthHandler";
import { useNavigate } from "react-router-dom";

function DashboardNavbar() {
    const navigate = useNavigate();
    const [userIntial, setUserIntial] = useState<string>("");
    const [userEmail, setUserEmail] = useState<string>("");
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = async() => {
        const res = await logout();
        if(res){
            navigate('/login');
        }
        handleClose();
    };

    useEffect(() => {
        const user = userDetails();
        if (user && user.username && user.email) {
          setUserIntial(user.username.charAt(0).toUpperCase());
          setUserEmail(user.email);
        }
    }, []);

    return (
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '1rem', padding: "0.5rem 2rem", borderBottom: "1px solid #E5E7EB", background: "#FFFFFF" }}>
            {/* Notification Bell */}
            <IconButton sx={{ color: '#6B7280' }}>
                <Badge badgeContent={1} color="error">
                    <NotificationsIcon />
                </Badge>
            </IconButton>

            {/* User Avatar with Dropdown */}
            <IconButton
                onClick={handleClick}
                sx={{ p: 0 }}
            >
                <Avatar sx={{ backgroundColor: '#d1fae5', color: '#000000', cursor: 'pointer' }}>{userIntial}</Avatar>
            </IconButton>

            {/* Dropdown Menu */}
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    sx: {
                        mt: 1.5,
                        minWidth: 200,
                        borderRadius: 2,
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                    }
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                {/* User Info Section */}
                <Box sx={{ px: 2, py: 1.5 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold', fontSize: '1rem' }}>
                        Admin User
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#6B7280', fontSize: '0.875rem' }}>
                        {userEmail}
                    </Typography>
                </Box>

                <Divider />

                {/* Menu Items */}
                <MenuItem onClick={handleClose} sx={{ py: 1.5 }}>
                    <PersonIcon sx={{ mr: 1.5, color: '#6B7280', fontSize: '1.25rem' }} />
                    <Typography variant="body2">Profile</Typography>
                </MenuItem>

                <MenuItem onClick={handleClose} sx={{ py: 1.5 }}>
                    <SettingsIcon sx={{ mr: 1.5, color: '#6B7280', fontSize: '1.25rem' }} />
                    <Typography variant="body2">Settings</Typography>
                </MenuItem>

                <MenuItem onClick={handleLogout} sx={{ py: 1.5 }}>
                    <LogoutIcon sx={{ mr: 1.5, color: '#6B7280', fontSize: '1.25rem' }} />
                    <Typography variant="body2">Log out</Typography>
                </MenuItem>
            </Menu>
        </div>
    )
}
export default DashboardNavbar;