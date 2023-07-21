import React from "react";
import {
  FormControl,
  FormHelperText,
  Input,
  InputAdornment,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { Meteor } from "meteor/meteor";

export const EmployerDashboard = () => {
  const [positionName, setPositionName] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [compensation, setCompensation] = useState<Number>(0);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    createPosting();
  };

  const createPosting = () => {
    Meteor.call("postings.insertPosting", {
        name: positionName,
        company: "ActualFood",
        location: location,
        pay: compensation,
        description: description
    })
    console.log("added new posting called: " + positionName);
  };

  return (
    <div className="employer-dashboard">
      <div className="create-posting">
        <form className="create-posting-form" onSubmit={handleSubmit}>
          <TextField
            id="outlined-basic"
            label="Position Name"
            variant="outlined"
            onChange={(e) => setPositionName(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Location"
            variant="outlined"
            onChange={(e) => setLocation(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Description"
            variant="outlined"
            multiline
            minRows={3}
            onChange={(e) => setDescription(e.target.value)}
          />
          <FormControl>
            <Input
              id="outlined-basic"
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
              onChange={(e) => setCompensation(Number(e.target.value))}
            />
            <FormHelperText id="standard-weight-helper-text">
              Compensation for position
            </FormHelperText>
          </FormControl>
          <button type="submit">
              Submit
          </button>
        </form>
      </div>
    </div>
  );
};
