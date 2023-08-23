import { Box, Button, Stack, Typography, Divider } from "@mui/material";
import React from "react";
import AddCheckin from "./AddCheckin";

const Checkin = () => {
  return (
    <>
      <Box sx={{ paddingY: "30px" }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-around"
        >
          <div>
            <Typography variant="h4" component="span">
              CheckIns
            </Typography>
            <p>Lorem ipsum dolor sit amen, say something important here</p>
          </div>
          <div>
            <AddCheckin />
          </div>
        </Stack>
      </Box>
      <Divider />
    </>
  );
};

export default Checkin;
