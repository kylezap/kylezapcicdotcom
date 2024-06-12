import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import catalina from "../assets/images/catalina-square.jpeg";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <Container maxWidth="xl">
      <Box sx={{ my: 4, py: 4 }} alignItems="center">
        <Typography variant="h2" component="div">
          About
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="body1" component="div">
              {
                "I am a passionate and curious lifelong learner with a rich and varied career spanning multiple industries. As a fullstack developer, my deep-seated love for problem-solving drives me to continuously seek new knowledge and innovative solutions in the tech world. Throughout my professional journey, I have honed my skills in relationship building and client engagement, consistently fostering strong connections and delivering exceptional results. My proactive nature and hands-on approach have established me as a doer, always ready to tackle challenges head-on and drive projects to successful completion. This blend of enthusiasm, technical expertise, curiosity, and experience enables me to thrive in dynamic environments and make meaningful contributions wherever I go. "
              }{" "}
              <Link to="/work">Check out my work</Link>
            </Typography>
            <br />
          </Grid>
          <Grid item xs={6}>
            <img src={catalina} alt="catalina" className="about" />
          </Grid>
        </Grid>
        
          <Typography variant="body1" component="div" sx={{ m: 4}} maxWidth='xl'>
            {
              "React, Node.js, Express, and MongoDB are just a few of the tools in my developer toolkit. I am also well-versed utilizing things other tools like GraphQL, REST API's, and Postgres, and I am always eager to learn new technologies and frameworks. My passion for creating modern, responsive, and impactful web applications is matched only by my dedication to building user-friendly interfaces that enhance the user experience. I am excited to continue growing as a developer and to leverage my skills to create innovative solutions that make a difference in the world. When I am not coding, you can find me surfing, hiking, or exploring the great outdoors. I am also an avid reader, a music lover, and a lifelong learner who is always seeking new adventures and experiences. I am excited to connect with like-minded individuals and collaborate on exciting projects that push the boundaries of what is possible in the tech world. Let's build something amazing together!"
            }
          </Typography>
        
      </Box>
    </Container>
  );
}
