"use client";

import React from "react";
import { useState } from "react";
import { Typography, Drawer, Stack, Divider, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";

const ProjectDetails = ({ data, open, handleClose }: any) => {
  const { title, imageUrl } = data;

  const [opened, setOpened] = useState(open);

  return (
    <>
      <Drawer anchor="right" open={opened}>
        <Stack direction="row" alignItems="center" justifyContent="flex-start">
          <Button onClick={handleClose} sx={{ color: "black" }}>
            <CloseIcon />
          </Button>

          <Typography component="div" variant="h6" sx={{ flexGrow: 1 }}>
            Details
          </Typography>
        </Stack>
        <Divider />
        <Typography
          component="div"
          variant="h5"
          sx={{ fontWeight: "bold", padding: "15px" }}
        >
          {title}
        </Typography>
        <Typography sx={{ padding: "15px" }}>
          <Image
            src={imageUrl}
            alt=""
            width="400"
            height="400"
            style={{ borderRadius: "30px" }}
          />
        </Typography>
      </Drawer>
    </>
  );
};

export default ProjectDetails;
