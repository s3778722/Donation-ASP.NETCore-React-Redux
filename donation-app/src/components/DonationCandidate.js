import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../actions/donationCandidate";
import { getAll } from "../actions/testWithoutRedux";
import CandidateForm from "./CandidateForm";
import {
  Grid,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  ButtonGroup,
  Button,
} from "@mui/material";

const DonationCandidate = () => {
  const [currentId, setCurrentId] = useState(0);
  //const [candidate, setCandidate] = useState([])
  /* we can use this and call candidate without using redux
  useEffect(() => {
   async function loadCandidate() {
     const currentCandidates = await getAll()
     setCandidate(currentCandidates)
   }
   loadCandidate();
  }, []);
  */

  // utilized useDispatch() hook to replace mapDispatchToProps()
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.fetchAll());
  }, [dispatch]);

  // utilized useSelector() hook to replace mapStateToProps()
  const stateDonationCandidate = useSelector(
    (state) => state.donationCandidateReducer.data
  );

  const onDelete = (id) => {
    if (window.confirm("Are you sure to delete this record?"))
      dispatch(actions.deleteCandidate(id));
  };
  return (
    <>
      <CandidateForm
        currentId={currentId}
        setCurrentId={setCurrentId}
        stateDonationCandidate={stateDonationCandidate}
      />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Full Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Email Address</TableCell>
              <TableCell>Mobile Number</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Blood Group</TableCell>
              <TableCell>Actions Type</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {stateDonationCandidate.map((record) => {
              return (
                <TableRow key={record.id} hover>
                  <TableCell>{record.fullName}</TableCell>
                  <TableCell>{record.age}</TableCell>
                  <TableCell>{record.email}</TableCell>
                  <TableCell>{record.mobile}</TableCell>
                  <TableCell>{record.address}</TableCell>
                  <TableCell>{record.bloodGroup}</TableCell>
                  <TableCell> 
                    <ButtonGroup >
                      <Button color="primary" onClick={() => setCurrentId(record.id)}>
                        Edit
                      </Button>
                      <Button color="error" onClick={() => onDelete(record.id)}>
                        Delete
                      </Button>
                    </ButtonGroup>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default DonationCandidate;
