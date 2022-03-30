import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../actions/donationCandidate";
import { getAll } from "../actions/testWithoutRedux";

const DonationCandidate = () => {
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
    (state) => state.donationCandidateReducer.list
  );

  console.log(stateDonationCandidate);

  return <div>DonationCandidate</div>;
};

export default DonationCandidate;
