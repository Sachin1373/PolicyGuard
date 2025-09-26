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
    InputAdornment,
    IconButton,
  } from "@mui/material";
  import ShieldIcon from "@mui/icons-material/Security";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { login } from "../redux/AuthHandler";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

type FormValues = {
  email: string;
  password: string;
}
  
  export function Login() {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
      } = useForm<FormValues>();

      const [showPassword, setShowPassword] = useState(false);

      const onSubmit = async (data: FormValues) => {
          try {
            const response = await login(data.email, data.password);
            toast.success(response.data.message);
            localStorage.setItem('token', response.data.token);
            navigate('/dashboard');
            reset();
          } catch (error: unknown) {
            console.error('Signup error:', error);
            const errorMessage = 
              error instanceof Error && error.message 
                ? error.message 
                : 'Signup failed. Please try again.';
            toast.error(errorMessage);
          }
        };

    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "linear-gradient(to bottom right, #f8fafc, #f1f5f9)",
          p: 2,
          width: "100vw",
        }}
      >
        <Card
          sx={{
            width: {
              xs: "18vw", // phones
              sm: "20vw", // tablets
              md: "28vw", // small laptops
              lg: "30vw", // large laptops
              xl: "25vw", // desktops / 150% zoom
            },
            height: {
              sm: '20rem',
              md: '25rem',
              lg: '30rem',
              xl: '33rem',
            },
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
                  <ShieldIcon fontSize="large" sx={{ color: "green" }} />
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    color="text.primary"
                    sx={{
                      fontSize: { xs: "1.25rem", sm: "1.5rem" },
                    }}
                  >
                    PolicyGuard
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  mt={1}
                  sx={{
                    fontSize: { xs: "0.8rem", sm: "0.9rem" },
                  }}
                >
                  Get started with PolicyGuard today.
                </Typography>
              </Box>
            }
          />
  
          <CardContent>
            <Box component="form" display="flex" flexDirection="column" gap={2}>
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
  
              <Button
                type="submit"
                variant="contained"
                color="success"
                fullWidth
                sx={{ height: 44, fontWeight: 500 }}
                onClick={handleSubmit(onSubmit)}
                disabled={isSubmitting}
              >
                Login
              </Button>
            </Box>
  
            {/* Divider */}
            <Divider sx={{ my: 3 }}>
              <Typography variant="caption" color="text.secondary">
                Or continue with
              </Typography>
            </Divider>
  
            {/* Google button */}
            <Button
              variant="outlined"
              fullWidth
              sx={{ height: 44 }}
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
              mt={3}
            >
              Don't have an account?{" "}
              <Link  color="success.main" fontWeight={500}  sx={{ cursor: 'pointer' }} onClick={() => navigate('/signup')}>
                Sign up
              </Link>
            </Typography>
          </CardContent>
        </Card>
      </Box>
    );
  }
  