import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../actions/donationCandidate";

const DonationCandidate = () => {

  // utilized useDispatch() hook to replace mapDispatchToProps()
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.fetchAll())
  }, [dispatch])

  
  // utilized useSelector() hook to replace mapStateToProps()
  const stateDonationCandidate = useSelector(
    (state) => state.donationCandidateReducer.list
  );

  console.log(stateDonationCandidate)

  
  return <div>DonationCandidate</div>;
};

export default DonationCandidate;
