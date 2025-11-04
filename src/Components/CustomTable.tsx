
import './CustomTable.css';

export type ColumnType<K> = {
  header: React.ReactNode;
  property: string;
  size: string;
  render: (row: K) => JSX.Element;
};

export type Student = {
  studentName: string;
  emailId: string;
  rollNumber: number;
  phoneNumber: string;
  schoolName: string;
};
const CustomTable = () => {
  const students: Student[] = [
    {
      studentName: "Aarav Mehta",
      emailId: "aarav.mehta@example.com",
      rollNumber: 101,
      phoneNumber: "9876543210",
      schoolName: "Rampur high school",
    },
    {
      studentName: "Sneha Reddy",
      emailId: "sneha.reddy@example.com",
      rollNumber: 102,
      phoneNumber: "9123456780",
      schoolName: "Sunrise Public School",
    },
    {
      studentName: "Rohan Sharma",
      emailId: "rohan.sharma@example.com",
      rollNumber: 103,
      phoneNumber: "9988776655",
      schoolName: "Hilltop Academy",
    },
  ];

  const columns: ColumnType<Student>[] = [
    {
      header: "Student Name",
      property: "studentName",
      size: "20%",
      render: (row) => <>{row.studentName}</>,
    },
    {
      header: "Emaild",
      property: "emailId",
      size: "30%",
      render: (row) => <>{row.emailId}</>,
    },
    {
      header: "Roll Number",
      property: "rollNumber",
      size: "15%",
      render: (row) => <>{row.rollNumber}</>,
    },
    {
      header: "Phone Number",
      property: "phoneNumber",
      size: "20%",
      render: (row) => <>{row.phoneNumber}</>,
    },
    {
      header: "School Name",
      property: "schoolName",
      size: "20%",
      render: (row) => <>{row.schoolName}</>,
    },
  ];

  return (
    <>
      <div
        style={{
          marginTop: "70px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <h2>Custom Table Component</h2>
        <table
          className='custom-table'
        >
          <caption>Student Table</caption>
          <thead>
            {columns.map((column) => {
              return (
                <>
                  <th>
                    {column.header}
                  </th>
                </>
              );
            })}
          </thead>
          <tbody>
            {students.map((student) => {
              return (
                <tr>
                  {columns.map((column) => {
                    return (
                      <>
                        <td>
                          {column.render(student)}
                        </td>
                      </>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CustomTable;
