import { Box, Button, Modal, Typography } from "@mui/material";

interface IntegrationProps {
    title: string;
    description: string;
    apps: Array<{
        name: string;
        icon: React.ReactNode;
        disc: string;
    }>,
    handleClose: () => void;
    open: boolean;
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    borderRadius: 3,
    boxShadow: 24,
    p: 3,
};

const IntegrationModal: React.FC<IntegrationProps> = ({ title, description, apps, handleClose, open }) => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Box>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {title}
                    </Typography>
                    <Typography id="modal-modal-description">
                        {description}
                    </Typography>
                </Box>
                <Box sx={{ marginTop: 2 }}>
                    {apps.map((app) => (
                        <Box key={app.name} sx={{ display: 'flex', alignItems: 'center', marginBottom: 2, border: '1px solid gray', padding: 1, borderRadius: 2 }}>
                            <Box sx={{ marginRight: 2 }}>
                                {app.icon}
                            </Box>
                            <Box>
                                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                                    {app.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {app.disc}
                                </Typography>
                            </Box>
                            <Button color="success" sx={{
                                marginLeft: 'auto', 
                                backgroundColor: '#45a049', 
                                color: 'white',
                                '&:hover': {
                                    backgroundColor: '#45a049',
                                },
                            }}>Connect</Button>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Modal>
    );
}

export default IntegrationModal;