import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import OfflineBoltIcon from "@mui/icons-material/OfflineBolt";

export default function Navbar() {
  return (
    <AppBar
      position="sticky"
      color="inherit"
      elevation={0}
      sx={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}
    >
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
        <Stack direction="row" spacing={2}>
          <Button component={Link} to="about" color="inherit" underline="hover">
            About
          </Button>
          <Button component={Link} to="work" color="inherit" underline="hover">
            Work
          </Button>{" "}
          <Button
            color="inherit"
            href="mailto:kzapcic@gmail.com"
            underline="hover"
          >
            Contact
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
