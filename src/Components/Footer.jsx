// import EmailIcon from '@mui/icons-material/Email';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import { Container, Grid, Typography, Link, IconButton } from '@mui/material';
// import { Box } from '@mui/system';

// export default function Footer() {
//     return (
//         <Container maxWidth='xl'>
//             <Box sx={{ my: 4, py: 4 }}>
//                 <Typography variant='h2' component='div' > Get in touch </Typography>
//                 <Grid container spacing={2} justifyContent='center'>
//                     <Grid item>
//                         <IconButton aria-label='email' href='mailto:kzapcic@gmail.com' />
//                         <EmailIcon />
//                     </Grid>
//                     <Grid item>
//                         <IconButton aria-label='linkedin' href='https://www.linkedin.com/in/kylezapcic/' />
//                         <LinkedInIcon />
//                     </Grid>
//                     <Grid item>
//                         <IconButton aria-label='github' href='https:/www.github.com/kylezap' />
//                         <GitHubIcon />
//                     </Grid>
//                 </Grid>
//             </Box>
//         </Container>
//     );
// }

import { Box, Typography, IconButton, Container, Link } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";

export default function Footer() {
  return (
    <Container maxWidth="xl">
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Typography variant="h2">Get in touch: <Link href='mailto:kzapcic@gmail.com' color='inherit'>kzapcic@gmail.com</Link></Typography>
      <Box color='inherit'>
        <IconButton>
          <EmailIcon href='mailto:kzapcic@gmail.com'/>
        </IconButton>
        <IconButton href='https://linkedin.com/in/kylezapcic'>
          <LinkedInIcon  />
        </IconButton>
        <IconButton href='https://github.com/kylezap' >
          <GitHubIcon />
        </IconButton>
      </Box>
    </Box>
    </Container>
  );
}
