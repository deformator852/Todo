import { useSelector } from "react-redux";
import "../assets/pages/home.scss";
import AddTask from "../components/addTask";

export default function Home() {
  const tasks = useSelector((state) => state.tasks)
  console.log(tasks)
  return (
    <main className="main">
      <div className="tasks-list"></div>
      <AddTask />
    </main>);
}
