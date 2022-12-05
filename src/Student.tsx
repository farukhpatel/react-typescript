import { IStudent } from "./App";
interface StudentProps {
  studentData: IStudent;
}
function Student({ studentData }: StudentProps) {
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <table
        style={{
          textAlign: "center",
          border: "1px solid black",
        }}
      >
        <tr>
          <th>Name</th>
          <th>Roll Number</th>
        </tr>

        <td>{studentData.name}</td>
        <td>{studentData.rollNumber}</td>
      </table>
    </div>
  );
}

export default Student;
