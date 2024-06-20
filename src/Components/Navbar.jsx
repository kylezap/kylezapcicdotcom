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


export default function Navbar() {
  const location = useLocation();

  const getNavStyle = (path) => {
    switch (path) {
      case "/":
        return "navbar home";
      case "/about":
        return "navbar about";
      case "/work":
        return "navbar work";
      case "/contact":
        return "navbar contact";
      default:
        return {};
    }
  };

  const currentStyle = getNavStyle(location.pathname);
  console.log(currentStyle);

  return (
    <AppBar position="sticky" color="inherit" elevation={0}>
      <Toolbar>
        <IconButton
          edge="start"
          aria-label="logo"
          color="inherit"
          component={Link}
          to="/"
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
            className={currentStyle}
            // sx={{ color: "white" }}
            underline="hover"
          >
            About
          </Button>
          <Button
            component={Link}
            to="/work"
            color="inherit"
            className={currentStyle}
            // sx={{ color: "white" }}
            underline="hover"
          >
            Work
          </Button>{" "}
          <Button
            color="inherit"
            className={currentStyle}
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
