import Checkin from "./components/Checkin";
import Header from "./components/Header";
import ProjectTable from "./components/ProjectTable";

export const revalidate = 60;

export default function Home() {
  return (
    <>
      <Header />
      <Checkin />
      <ProjectTable />
    </>
  );
}
