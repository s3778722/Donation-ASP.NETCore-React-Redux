import logo from "./logo.svg";
import "./App.css";
import DonationCandidate from "./components/DonationCandidate";
import CandidateForm from "./components/CandidateForm";
import {
  Container,
  AppBar,
  Toolbar,
  Box,
  Typography,
  BottomNavigation,
  Paper,
} from "@mui/material";

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
        <DonationCandidate />
      </Container>
      <br />
    </div>
  );
}

export default App;
