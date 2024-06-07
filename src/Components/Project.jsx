// import React from "react";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import { Link } from 'react-router-dom';

// export default function Project({ name, image, link, description, tech }) {
//   return (
//     <Box
//       component={Link}
//       to={link}
//       sx={{
//         position: 'relative',
//         p: 2,
//         m: 2,
//         borderRadius: 2,
//         bgcolor: 'background.default',
//         height: '250px',
//         width: '47%',
//         boxShadow: 2,
//         overflow: 'hidden',
//         '&:hover::before': {
//           filter: 'blur(8px)',
//         },
//         '&:hover div': {
//           opacity: 1,
//         },
//         '&::before': {
//           content: '""',
//           position: 'absolute',
//           top: 0,
//           right: 0,
//           bottom: 0,
//           left: 0,
//           backgroundImage: `url(${image})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'top',
//           backgroundRepeat: 'no-repeat',
//           transition: '0.3s',
//         },
//       }}
//     >
//       <Box
//         sx={{
//           position: 'absolute',
//           top: '50%',
//           left: '50%',
//           transform: 'translate(-50%, -50%)',
//           opacity: 0,
//           transition: 'opacity 0.3s',
//           zIndex: 1,
//           color: 'black', // Adjusted to ensure text is visible over background
//           textAlign: 'center',
//         }}
//       >
//         {/* <div>{name}</div> */}
//         <Typography variant="h2" component="div">
//           {name}
//         </Typography>
//         <div>{description}</div>
//       </Box>
//       <Box sx={{
//         position: 'absolute',
//         bottom: '10px',
//         left: '50%',
//         transform: 'translateX(-50%)',
//         opacity: 0,
//         transition: '0.3s',
//         zIndex: 30000,
//         color: 'black',
//       }}>
//         {tech}
//       </Box>
//     </Box>
//   );
// }

import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link } from 'react-router-dom';

export default function Project({ name, image, link, description, tech }) {
  return (
    <Box
      component={Link}
      to={link}
      elevation={4}
      sx={{
        position: 'relative',
        p: 2,
        m: 2,
        borderRadius: 2,
        bgcolor: 'background.default',
        height: '300px',
        width: '100%',
        boxShadow: 2,
        overflow: 'hidden',
        '&:hover div': {
          opacity: 1,
          transform: 'translateY(0)',
        },
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          backgroundRepeat: 'no-repeat',
          transition: '0.3s',
        },
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          transform: 'translateY(100%)',
          opacity: 0,
          transition: 'opacity 0.3s, transform 0.3s',
          zIndex: 1,
          color: 'black', // Adjusted to ensure text is visible over background
          textAlign: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.9)', 
          display: 'flex', // Added to use flexbox
    flexDirection: 'column', // Added to stack the children vertically
    justifyContent: 'center', // Added to center the children vertically
    alignItems: 'center',
        }}
      >
        <Typography variant="h2" component="div">
          {name}
        </Typography>
        <div>{description}</div>
      </Box>
      <Box sx={{
        position: 'absolute',
        bottom: '10px',
        top: '50%',
        left: '50%',
        transform: 'translateX(-50%)',
        opacity: 0,
        transition: '0.3s',
        zIndex: 30000,
        color: 'black',
        textAlign: 'center',
        display: 'flex', // Added to use flexbox
    flexDirection: 'column', // Added to stack the children vertically
    justifyContent: 'center', // Added to center the children vertically
    alignItems: 'center',
      }}>
        <br />
        <div>Tech 🧑‍💻: {tech}</div>
      </Box>
    </Box>
  );
}

