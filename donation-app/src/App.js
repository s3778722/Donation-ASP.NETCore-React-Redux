import logo from "./logo.svg";
import "./App.css";
import DonationCandidate from "./components/DonationCandidate";
import CandidateForm from "./components/CandidateForm";
import { Container, AppBar, Toolbar, Box, Typography } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="secondary">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Blood Donation App
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Container maxWidth="md">
        <CandidateForm />
        <DonationCandidate />
      </Container>
      <AppBar
        position="fixed"
        color="primary"
        sx={{ top: "auto", bottom: 0, backgroundColor: "#808080" }}
      >
        <Toolbar>
          <Typography variant="caption" component="div" sx={{ flexGrow: 1 }}>
            Full Stack App: ASP.NET Core, React, MSSQL and Entity Framework.
          </Typography>
          <Typography variant="caption" component="div" sx={{ flexGrow: 1 }}>
            Developed by: Han Chien Leow
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default App;
