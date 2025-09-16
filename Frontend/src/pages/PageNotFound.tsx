import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function PageNotFound() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default",
        textAlign: "center",
        px: 2,
      }}
    >
      <Typography variant="h2" fontWeight="bold" color="error" gutterBottom>
        404
      </Typography>
      <Typography variant="h5" color="text.primary" gutterBottom>
        Oops! Page not found
      </Typography>
      <Typography variant="body1" color="text.secondary" mb={3}>
        The page you’re looking for doesn’t exist or has been moved.
      </Typography>
      <Button variant="contained" color="primary" onClick={() => navigate("/")}>
        Go Home
      </Button>
    </Box>
  );
}
