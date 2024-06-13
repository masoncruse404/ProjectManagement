// - /app/login/_components/_forms/LoginForm.tsx - Authenticates user credentials and sets cookie containing Bearer Token
"use client";
// next
import Link from 'next/link';

// form hook
import { SubmitHandler, useForm } from 'react-hook-form';

// mui
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment } from "@mui/material";

import { useState } from 'react';

// styles
import "@/styles/utils.css"

type Inputs = {
  Admin_Username: string
  Admin_Password: string
}

const SignUpForm = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [apiErrorBool, setApiErrorBool] = useState<boolean>(false)
  const [showPassword, setShowPassword] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      Admin_Username: "",
      Admin_Password: "",
    },
  })

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  
  const formSubmit: SubmitHandler<Inputs> =  async (form) => {
    setLoading(true)
    const { Admin_Username, Admin_Password } = form
    if ( !Admin_Username ) return;
    if ( !Admin_Password ) return;
    const serverUrl = process.env.NEXT_PUBLIC_ENV_API_SIGN_UP_URL || "http://localhost:3000/authentication/sign-up"
    const origin = process.env.NEXT_PUBLIC_ENV_ORIGIN || "http://project-management.masoncruse.com"
    try {
      fetch(serverUrl, {
        method: 'OPTIONS',
        headers: {
          'Origin': `${origin}`, 
          'Access-Control-Request-Method': 'POST',
        },
      })
      .then(response => {
     
        if (!response.ok) {
          throw new Error(`Preflight request failed with status ${response.status}`);
        }
        const sign_up_data = { email: Admin_Username, 
                             password: Admin_Password
                           }
  
        return fetch(serverUrl, {
          method: 'POST',
          headers: {
            'Origin': `${origin}`, 
            'Access-Control-Request-Method': 'POST',
            'content-type' : 'application/json',
          },
          body: JSON.stringify(sign_up_data),
        });
      })
      .then(response => {
        // Process the data returned by the server
        if (response.status === 409){
          setApiErrorBool(true)
          setLoading(false)
          return;
        }
  
        if (response.ok) {
          return window.location.assign("/login")
        } else {
          setApiErrorBool(true)
          setLoading(false)
          return;
        }
      })
    }
    
    catch (error) {
     
      setApiErrorBool(true)
      setLoading(false)
      return;
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      height="97vh"
    >
    <Box
      component="form"
      autoComplete="off"
      onSubmit={handleSubmit(formSubmit)}
     
      sx={{
        width: "350px",
        margin: 'auto',
        padding: '40px 20px 20px 40px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        backgroundColor: 'white',
        borderTop:"5px solid #1565c0",
      }}
    >
     
      <Typography variant="h4" textAlign="left" component="div" sx={{marginBottom:"10px"}} >
      Sign Up 
      </Typography>
      {apiErrorBool ? 
         <Typography variant="subtitle1" sx={{marginLeft:"2px", marginBottom:"20px", color: "#e53e3e"}}>This username is not available.</Typography>
      :
         <Typography variant="subtitle1" sx={{marginLeft:"2px", marginBottom: "20px", color: "#555"}}>Please enter details.</Typography>
      }
      <TextField
        fullWidth
        autoComplete="off"
        placeholder="Username"
        {...register('Admin_Username', {
          required: 'Username is required',
          pattern: {
            value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
            message: "Please enter a valid email"
          },
          minLength: {
            value: 10,
            message: 'Username must be at least 10 characters',
          },
        })}
      sx={{marginBottom:"10px"}}
      className={errors.Admin_Username?.message ? "mb-1" : "mb-10"}
      />
       {errors.Admin_Username?.message && (
          <Typography variant="caption" sx={{marginLeft:"2px", color: "#e53e3e"}}>{errors.Admin_Username.message}</Typography>
        )}
      <TextField
          autoComplete="off"
          {...register('Admin_Password', {
            required: "Password is required",
            minLength: {
              value: 8,
              message: 'Password must be at least 10 characters',
            },
          })}
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          fullWidth
          sx={{marginBottom:"3px"}}
      />
         {errors.Admin_Password?.message && (
          <Typography variant="caption" sx={{marginLeft:"2px", marginBottom:"5px", color: "#e53e3e"}}>{errors.Admin_Password.message}</Typography>
        )}
     
      <LoadingButton loading={loading} type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2, mb: 2 }}>
        Login
      </LoadingButton>
      <Box sx={{display:"flex", justifyContent:"center", marginTop:"10px"}}>
        <Link href="/login" className='no-text-decoration'><Typography variant="caption" sx={{marginLeft:"2px", marginBottom:"5px", color: "#1565c0"}}>Already have an account?</Typography></Link>
      </Box>
    </Box>
    </Box>
  );
};

export default SignUpForm;
