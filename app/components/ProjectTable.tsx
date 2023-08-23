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
import ProjectDetails from "./ProjectDetails";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "@/firebase";
import { format } from "date-fns";
import OpenDetails from "./OpenDetails";

const ProjectTable = async () => {
  const q = query(collection(db, "checkins"));
  const checkins = await getDocs(q);

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
            {checkins?.docs.map((checkin) => {
              const data = checkin.data();
              const date = data.createdAt;
              // console.log(date);
              return (
                <TableRow key={checkin.id}>
                  <TableCell>{data.title}</TableCell>
                  <TableCell>{data.owner}</TableCell>
                  <TableCell>
                    <Typography
                      component="span"
                      sx={{ backgroundColor: "cyan", padding: "3px" }}
                    >
                      {data.status}
                    </Typography>
                  </TableCell>
                  <TableCell>{format(date.toDate(), "do MMM yyyy")}</TableCell>
                  <TableCell>
                    <OpenDetails data={data} />
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
