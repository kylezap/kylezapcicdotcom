import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
  Container,
} from "@mui/material";
import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';


export default function Navbar() {
  return (
    <Container maxWidth='xl'>
      <AppBar position="static" color="inherit" elevation={0}>
        <Toolbar >
          <IconButton edge='start' aria-label="logo" color="inherit">
            <OfflineBoltIcon/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Kyle Zapcic
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button color="inherit">About</Button>
            <Button color="inherit">Work</Button>
            <Button color="inherit" href='mailto:kzapcic@gmail.com'>Contact</Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Container>
  );
}
