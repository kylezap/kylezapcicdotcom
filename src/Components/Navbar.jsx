import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import OfflineBoltIcon from "@mui/icons-material/OfflineBolt";
import { keyframes } from "@mui/system";



export default function Navbar() {


  const spin = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  `;

  return (
    <AppBar position="sticky" color="inherit" elevation={0}>
      <Toolbar>
        <IconButton
          edge="start"
          aria-label="logo"
          color="inherit"
          component={Link}
          to="/"
          sx={{ animation: `${spin} 10s linear infinite` }}
        >
          <OfflineBoltIcon />
        </IconButton>
        <Typography
          variant="h6"
          underline="none"
          component={Link}
          to="/"
          color="inherit"
          sx={{ flexGrow: 1, textDecoration: "none" }}
        >
          Kyle Zapcic
        </Typography>
        <Stack direction="row" spacing={2} >
          <Button
            component={Link}
            to="/about"
            color="inherit"
            
            underline="hover"
          >
            About
          </Button>
          <Button
            component={Link}
            to="/work"
            color="inherit"
            
            underline="hover"
          >
            Work
          </Button>{" "}
          <Button
            color="inherit"
            
            href="mailto:kzapcic@gmail.com"
            // sx={{ color: "white" }}
            underline="hover"
          >
            Contact
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
