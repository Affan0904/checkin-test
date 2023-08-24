"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Container,
} from "@mui/material";
import { Typography } from "@mui/material";
import { collection, getDocs, onSnapshot, query } from "firebase/firestore";
import { db } from "@/firebase";
import { format } from "date-fns";
import OpenDetails from "./OpenDetails";
import { useEffect, useState } from "react";

const ProjectTable = () => {
  const [checkins, setCheckins] = useState<any[]>([]);

  useEffect(() => {
    const q = query(collection(db, "checkins"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let checkinArr: any = [];

      querySnapshot.forEach((doc) => {
        checkinArr.push({ ...doc.data(), id: doc.id });
      });
      setCheckins(checkinArr);
      return () => unsubscribe();
    });
  }, []);

  return (
    <Container sx={{ paddingY: "20px" }}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Owner</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Created at</TableCell>
              <TableCell>Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {checkins?.map((checkin, id) => {
              const date = checkin.createdAt;
              return (
                <TableRow key={id}>
                  <TableCell>{checkin.title}</TableCell>
                  <TableCell>{checkin.owner}</TableCell>
                  <TableCell>
                    <Typography
                      component="span"
                      sx={{ backgroundColor: "cyan", padding: "3px" }}
                    >
                      {checkin.status}
                    </Typography>
                  </TableCell>
                  <TableCell>{format(date.toDate(), "do MMM yyyy")}</TableCell>
                  <TableCell>
                    <OpenDetails data={checkin} />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ProjectTable;
