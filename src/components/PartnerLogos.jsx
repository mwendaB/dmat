import React from 'react';
import { motion } from 'framer-motion';
import { Box, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { AmericanExpress, Chanel, Colgate,Diageo,Fonterra,Ford,GeneralMills,Honda,Ikea , Nike ,TimeWarner, Ups } from '../assets/images';


const logos = [AmericanExpress, Chanel, Colgate, Diageo, Fonterra, Ford, GeneralMills, Honda, Ikea, Nike, TimeWarner , Ups];
const darkLogos = [AmericanExpress, Chanel, Colgate,Diageo,Fonterra,Ford,GeneralMills,Honda,Ikea , Nike ,TimeWarner, Ups];




const PartnerLogosContainer = styled(Box)`
  display: flex;
  white-space: nowrap;
  overflow: hidden;
  width: 100%; /* Ensure the container takes up the full width */

  & > img {
    margin-right: 20px; /* Adjust spacing between logos as needed */
    width: 100px; /* Set the width of the logo */
    height: auto; /* Maintain aspect ratio */
    animation: moveLogos ${(logos.length * 1.5)}s linear infinite; /* Adjust the animation duration based on the number of logos */
  }

  @keyframes moveLogos {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(calc(-100% * ${logos.length})); /* Adjust the distance to move the logos */
    }
  }
`;


const PartnerLogos = () => {
  return (
    <Box sx={{ overflow: 'hidden', whiteSpace: 'nowrap',  width:"95%", margin:'auto', mt:'28rem'}}>
      <Box sx={{margin:'auto', textAlign:'center'}}>
        <Typography sx={{ fontWeight: '600', fontSize:'20px', fontFamily:'Noto Sans Balinese', color:'#c9c7c7'}}>Already chosen by the leaders</Typography>
      </Box>
      <br></br>
      <br></br>
   

      <PartnerLogosContainer>
        {darkLogos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index + 1}`}
            style={{width: '110px',}}
          />
        ))}
        {/* Duplicate logos for seamless loop */}
        {darkLogos.map((logo, index) => (
          <img
            key={index + logos.length} 
            src={logo}
            alt={`Logo ${index + 1}`}
            style={{width: '110px',}}
          />
        ))}
      </PartnerLogosContainer>
    </Box>
  );
};

export default PartnerLogos;
