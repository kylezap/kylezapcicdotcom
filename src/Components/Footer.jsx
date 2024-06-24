import { Box, Typography, IconButton, Container, Link } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

export default function Footer() {
  return (
    <Box maxWidth="xl" className="footer-container">
        <Typography variant="h2">
          Get in touch:{" "}
          <Link href="mailto:kzapcic@gmail.com" color="inherit">
            kzapcic@gmail.com
          </Link>
        </Typography>
        <Box color="inherit">
          <IconButton sx={{ "&:hover": { color: "black" } }}>
            <EmailIcon href="mailto:kzapcic@gmail.com" />
          </IconButton>
          <IconButton
            href="https://linkedin.com/in/kylezapcic"
            sx={{ "&:hover": { color: "black" } }}
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            href="https://github.com/kylezap"
            sx={{ "&:hover": { color: "black" } }}
          >
            <GitHubIcon />
          </IconButton>
        </Box>
      
    </Box>
  );
}
