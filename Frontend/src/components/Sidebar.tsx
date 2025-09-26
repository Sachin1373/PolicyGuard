import {
} from '@mui/icons-material';
import { Box, Typography, Tabs, Tab } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ShieldIcon from '@mui/icons-material/Shield';
import SecurityIcon from '@mui/icons-material/Security';
import AppsIcon from '@mui/icons-material/Apps';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import { useState } from 'react';


export function Sidebar() {

    const [activeTab, setActiveTab] = useState<number>(0);

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setActiveTab(newValue);
    };

    const tabItems = [
        { icon: <DashboardIcon />, label: "Dashboard" },
        { icon: <PeopleAltIcon />, label: "Users" },
        { icon: <ShieldIcon />, label: "Roles" },
        { icon: <AppsIcon />, label: "Apps" },
        { icon: <TextSnippetIcon />, label: "Reports" },
    ];

    return (
        <>
            <Box sx={{ display: 'flex', height: '8%', alignItems: 'center', gap: 1, padding: '1rem', }}>
                <SecurityIcon sx={{
                    color: '#15803d',
                    fontSize: { xs: '1.8rem', sm: '2rem', md: '2.2rem' },
                }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.8rem' }, letterSpacing: '-0.02em' }}>
                    PolicyGuard
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', height: '92%' }}>
                <Box sx={{ padding: '1rem'}}>
                    <Tabs
                        orientation="vertical"
                        value={activeTab}
                        onChange={handleTabChange}
                        sx={{
                            '& .MuiTabs-indicator': {
                                display: 'none',
                            },
                            '& .MuiTabs-flexContainer': {
                                flexDirection: 'column',
                                gap: '0.5rem',
                            },
                        }}
                    >
                        {tabItems.map((item, index) => (
                            <Tab
                                key={item.label}
                                label={
                                    <Box sx={{ 
                                        display: 'flex', 
                                        alignItems: 'center',
                                        width: '100%',
                                    }}>
                                        <div style={{ color: '#15803d' }}>{item.icon}</div>
                                        <Typography 
                                            variant="body1" 
                                            sx={{ 
                                                marginLeft: '0.5rem', 
                                                fontWeight: '500', 
                                                fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.2rem' },
                                                textTransform: 'none',
                                                color: 'inherit',
                                            }}
                                        >
                                            {item.label}
                                        </Typography>
                                    </Box>
                                }
                                sx={{
                                    padding: '0.5rem',
                                    borderRadius: '0.5rem',
                                    '&.Mui-selected': {
                                        backgroundColor: '#d1fae5',
                                        color: '#15803d',
                                    },
                                    '&:hover': {
                                        backgroundColor: activeTab === index ? '#d1fae5' : '#f3f4f6',
                                    },
                                    '&.MuiTab-root': {
                                        textTransform: 'none',
                                        minWidth: 'auto',
                                        width: '100%',
                                    },
                                }}
                            />
                        ))}
                    </Tabs>
                </Box>
            </Box>

        </>
    )
}