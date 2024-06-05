import { AppBar, Toolbar, IconButton, Typography, Stack, Button } from "@mui/material";

export default function Navbar() {
    return (
        <AppBar position='static' color="primary.main" shape='0'>
            <Toolbar>
                <IconButton size="large" edge='start'  aria-label="logo">
                    {/* Insert imported Logo component here */}
                </IconButton>
                <Typography variant="h6" component='div' sx={{ flexGrow: 1}}>
                    Kyle Zapcic
                </Typography>
                <Stack direction='row' spacing={2}>
                    <Button color='black'>About</Button>
                    <Button color='black'>Work</Button>
                    <Button color='black'>Contact</Button>

                </Stack>
            </Toolbar>
        </AppBar> 



    )
} 