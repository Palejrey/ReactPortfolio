import React from "react";
import List from "./components/List";
import Header from "./components/Header";

const projects = [
  {
    id: 1,
    name: "Project-1",
    completed: true
  },
  {
    id: 2,
    name: "Project-2",
    completed: true
  },
  {
    id: 3,
    name: "Project-3",
    completed: true
  },
  {
    id: 4,
    name: "Project-4",
    completed: true
  },
  {
    id: 5,
    name: "Project-5",
    completed: true
  },
  {
    id: 6,
    name: "Project-6",
    completed: true
  }
];

function App() {
  return  <div>
    <Header />
    <List projects={projects} />
    </div>;
}

export default App;
