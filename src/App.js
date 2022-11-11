import React from "react";
import { NativeBaseProvider, Box, VStack } from "native-base";
import { config, customTheme } from "./theme";
import "./App.css";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import AddCredit from "./Pages/AddCredit";
import AppBar from "./Components/AppBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <NativeBaseProvider theme={customTheme} config={config}>

        
          <Box
            className="bg"
            bg={{
              linearGradient: {
                colors: ["lightBlue.300", "violet.800"],
                start: [0, 0],
                end: [1, 0],
              },
            }}
          >
            <VStack space="6" w="full">
              <AppBar />
              <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/credit" element={<AddCredit />} />
              </Routes>
            </VStack>
          </Box>
       
      
    </NativeBaseProvider>
  );
}

export default App;
