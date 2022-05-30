import React from 'react';
import { Box, Button, Flex, Image, Link, Spacer } from '@chakra-ui/react';
import Facebook from "./assets/social-media-icons/facebook_32x32.png";
import Twitter from "./assets/social-media-icons/twitter_32x32.png";
import Email from "./assets/social-media-icons/email_32x32.png";

const NavBar = ({ accounts, setAccounts }) => {
    const isConnected = Boolean(accounts[0]);

    async function connectAccount() {
        if (window.ehthereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            setAccounts(accounts);
        } 
    }

    return(
        <Flex justify="space-between" aling="center" padding="30px">
            {/* Left Side - Social Media Icons */}
            <Flex justify="space-between" width="40%" padding="0 75">
            <Link href="https://www.facebook.com/">
                <Image scr={Facebook} boxSize="42px" margin="0 15px" /> 
                </Link>
            <Link href="https://www.twitter.com/">
                <Image scr={Twitter} boxSize="42px" margin="0 15px" /> 
                </Link>
            <Link href="https://www.gmail.com/">
                <Image scr={Email} boxSize="42px" margin="0 15px" /> 
                </Link> 
                </Flex>   

            {/* Right Side - Sections and Connect */}
            <Flex 
                justify="space-around"
                align="center"
                width="40%"
                padding="30px"
               >
                <Box margin="0 15">About</Box>
                <Spacer /> 
                <Box margin="0 15">Mint</Box>
                <Spacer /> 
                <Box margin="0 15">Team</Box>
                <Spacer /> 
            
            {/* Connect */}
            {isConnected ? (
              <Box margin="0 15px">Connected</Box>
            ) : (
              <Button
              backgroundColor="#D6517D"
              borderRadius="5px"
              boxShadow="0px 2px 2px 1px #0F0F0F"
              color="white"
              cursor="pointer"
              fontFamily="inherit"
              padding="15px"
              marginTop="0 15px"
              onClick={connectAccount}
              >
                Connect
                </Button>
            )}
        </Flex>
        </Flex>
    );
};

export default NavBar;