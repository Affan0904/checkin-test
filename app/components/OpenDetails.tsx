"use client";

import { Button } from "@mui/material";
import React, { useState } from "react";
import ProjectDetails from "./ProjectDetails";

const OpenDetails = ({ data }: any) => {
  const [opened, setOpened] = useState(false);

  const handleOpen = () => {
    setOpened(true);
  };

  const handleClose = () => {
    setOpened(false);
  };

  return (
    <>
      <Button
        variant="contained"
        sx={{ backgroundColor: "black" }}
        onClick={handleOpen}
      >
        Open Details
      </Button>
      {opened && (
        <ProjectDetails data={data} open={opened} handleClose={handleClose} />
      )}
    </>
  );
};

export default OpenDetails;
