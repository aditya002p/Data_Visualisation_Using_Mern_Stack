import React, { useState } from "react";
import {
  Box,
  Container,
  FormControl,
  FormLabel,
  Input,
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";

const LoginPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    setIsOpen(true);
    setTimeout(() => {
      setIsOpen(false);
      window.location.href = "/dashboard";
    }, 2000);
  };

  return (
    <Box
      bg="linear-gradient(to bottom, #cccccc, #e0e0e0, #ffffff)"
      minH="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      boxShadow="10px 20px 30px rgba(0, 0, 0, 10)"
    >
      <Container
        p={8}
        borderWidth={1}
        borderRadius="lg"
        boxShadow="lg"
        borderColor="white"
        textAlign="center"
      >
        <h1
          style={{
            color: "black",
            fontWeight: "bold",
            fontSize: "1.4rem",
            paddingBottom: "2rem",
          }}
        >
          Welcome Admin !!!
        </h1>
        <form>
          <FormControl>
            <FormLabel style={{ color: "black" }}>Admin Email</FormLabel>
            <Input
              type="text"
              placeholder="Enter your username"
              value="admin@gmail.com"
              borderColor="white"
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel style={{ color: "black" }}>Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter your password"
              value="admin"
              borderColor="white"
            />
          </FormControl>
          <Button colorScheme="red" mt={6} w="100%" onClick={handleLogin}>
            Login
          </Button>
          {/* AlertDialog */}
          <AlertDialog isOpen={isOpen} leastDestructiveRef={undefined}>
            <AlertDialogOverlay>
              <AlertDialogContent bg="purple.800" color="white">
                <AlertDialogHeader>Welcome Admin !!!</AlertDialogHeader>
                <AlertDialogBody>
                  Redirecting to the dashboard page...
                </AlertDialogBody>
                <AlertDialogFooter>
                  <Button onClick={() => setIsOpen(false)}>Cancel</Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>
        </form>
      </Container>
    </Box>
  );
};

export default LoginPage;
