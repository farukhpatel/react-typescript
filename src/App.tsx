import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Student from "./Student";

type TIdsList = number;
export interface IStudent {
  name: string;
  rollNumber: number;
}

function App() {
  const [count, setCount] = useState<number>(0); //type number
  const [name, setName] = useState<string>(""); //type number
  const [idsList, setIdsList] = useState<TIdsList[]>([]); //array list
  const [student, setStudent] = useState<IStudent[]>([]); //array of an object
  return (
    <div className="App">
      <h1
        onClick={() => {
          setName("okok");
        }}
      >
        hello farukh
      </h1>

      <button
        style={{
          padding: "10px",
        }}
        onClick={() => {
          setIdsList([...idsList, 8]);
          console.log("ok");
        }}
      >
        Push Number
      </button>

      <br />
      <button
        style={{
          padding: "10px",
          marginTop: "10px",
        }}
        onClick={() => {
          setStudent([
            ...student,
            { name: "farukh", rollNumber: student.length + 1 },
          ]);
        }}
      >
        push student
      </button>
      {student?.map((s) => (
        <Student studentData={s} />
      ))}
    </div>
  );
}

export default App;
