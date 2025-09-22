import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,
  TextField,
  Button,
  Divider,
  Link,
  IconButton,
  InputAdornment,
} from "@mui/material";
import ShieldIcon from "@mui/icons-material/Security";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import { toast } from "react-toastify"

type FormValues = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export function SignUp() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
  } = useForm<FormValues>();

  const password = watch("password");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onSubmit = async (data: FormValues) => {

    try {
      const response = await axios.post("http://localhost:8000/api/auth/signup", data);
      console.log('res :', response);
      toast.success(response.data.message || "Signup successful! Please log in.");
      reset();
    } catch (err: unknown) {
      console.error("Signup failed:", err);
    }
  };
  
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(to bottom right, #f8fafc, #f1f5f9)",
        p: { xs: 1, sm: 2 },
        width: "100%",
      }}
    >
      <Card
        sx={{
          width: {
            xs: "calc(100% - 32px)", // Full width with margin on mobile
            sm: "400px", // Fixed width on small screens and up
            md: "420px",
            lg: "440px",
          },
          maxWidth: "500px", // Maximum width constraint
          minWidth: "320px", // Minimum width constraint
          boxShadow: 4,
          borderRadius: 3,
          backdropFilter: "blur(8px)",
          bgcolor: "rgba(255,255,255,0.8)",
        }}
      >
        <CardHeader
          title={
            <Box textAlign="center" mb={1}>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                gap={1}
                mb={2}
              >
                <ShieldIcon 
                  sx={{ 
                    color: "green",
                    fontSize: { xs: "2rem", sm: "2.5rem" }
                  }} 
                />
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  color="text.primary"
                  sx={{
                    fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem" },
                  }}
                >
                  PolicyGuard
                </Typography>
              </Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color="text.primary"
                sx={{
                  fontSize: { xs: "1.1rem", sm: "1.25rem", md: "1.4rem" },
                }}
              >
                Create your account
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                mt={1}
                sx={{
                  fontSize: { xs: "0.85rem", sm: "0.9rem" },
                }}
              >
                Get started with PolicyGuard today.
              </Typography>
            </Box>
          }
          sx={{
            pb: { xs: 1, sm: 2 }
          }}
        />

        <CardContent
          sx={{
            pt: 0,
            px: { xs: 2, sm: 3 },
            pb: { xs: 2, sm: 3 }
          }}
        >
          <Box component="form" display="flex" flexDirection="column" gap={2}>
            <TextField 
              label="Full Name" 
              variant="outlined" 
              fullWidth 
              required 
              size="medium"
              {...register("name", { required: "Name is required" })}
              error={!!errors.name}
              sx={{
                '& .MuiInputBase-root': {
                  fontSize: { xs: '0.9rem', sm: '1rem' }
                }
              }}
            />
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              required
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: "Invalid email address",
                },
              })}
              error={!!errors.email}
              size="medium"
              sx={{
                '& .MuiInputBase-root': {
                  fontSize: { xs: '0.9rem', sm: '1rem' }
                }
              }}
            />
            <TextField
              label="Password"
              type={showPassword ? "text" : "password"}
              variant="outlined"
              fullWidth
              required
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Password must be 6+ characters" },
              })}
              error={!!errors.password}
              size="medium"
              sx={{
                '& .MuiInputBase-root': {
                  fontSize: { xs: '0.9rem', sm: '1rem' }
                }
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label="Confirm Password"
              type={showConfirmPassword ? "text" : "password"}
              variant="outlined"
              fullWidth
              required
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword?.message}
              size="medium"
              sx={{
                '& .MuiInputBase-root': {
                  fontSize: { xs: '0.9rem', sm: '1rem' }
                }
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      edge="end"
                    >
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Button
              type="submit"
              variant="contained"
              color="success"
              fullWidth
              sx={{ 
                height: { xs: 40, sm: 44 }, 
                fontWeight: 500,
                fontSize: { xs: '0.9rem', sm: '1rem' },
                mt: 1
              }}
              onClick={handleSubmit(onSubmit)}
              disabled={isSubmitting}
            >
              Sign Up
            </Button>
          </Box>

          {/* Divider */}
          <Divider sx={{ my: { xs: 2, sm: 3 } }}>
            <Typography 
              variant="caption" 
              color="text.secondary"
              sx={{
                fontSize: { xs: '0.75rem', sm: '0.8rem' }
              }}
            >
              Or continue with
            </Typography>
          </Divider>

          {/* Google button */}
          <Button
            variant="outlined"
            fullWidth
            sx={{ 
              height: { xs: 40, sm: 44 },
              fontSize: { xs: '0.9rem', sm: '1rem' }
            }}
            startIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="currentColor"
              >
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
            }
          >
            Sign up with Google
          </Button>

          {/* Footer */}
          <Typography
            variant="body2"
            textAlign="center"
            color="text.secondary"
            sx={{ 
              mt: { xs: 2, sm: 3 },
              fontSize: { xs: '0.85rem', sm: '0.9rem' }
            }}
          >
            Already have an account?{" "}
            <Link 
              color="success.main" 
              fontWeight={500} 
              sx={{ 
                cursor: 'pointer',
                '&:hover': {
                  textDecoration: 'underline'
                }
              }} 
              onClick={() => navigate('/login')}
            >
              Login
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

