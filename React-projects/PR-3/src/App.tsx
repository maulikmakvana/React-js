import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Form from "./components/Form";
import Table from "./components/Table";
import { useState, useEffect } from "react";
import type { employeeType } from "./utils/global";

export default function App() {
  const [allEmployees, setAllEmployees] = useState<employeeType[]>(
    JSON.parse(localStorage.getItem("employees") || "[]")
  );
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editEmployee, setEditEmployee] = useState<employeeType>();

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(allEmployees));
  }, [allEmployees]);

  const deleteEmployee = (index: number) => {
    setAllEmployees((prev) => prev.filter((_, i) => i !== index));
    toast.info("Record removed successfully", { theme: "light" });
  };

  const updateEmployee = (index: number) => {
    setEditIndex(index);
    setEditEmployee(allEmployees[index]);
  };

  return (
    <div className="min-h-screen bg-stone-50/50 font-sans antialiased text-stone-800">
      <div className="max-w-6xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        
        <main className="space-y-6">
          <Form
            allEmployees={allEmployees}
            setAllEmployees={setAllEmployees}
            editEmployee={editEmployee}
            editIndex={editIndex}
            setEditIndex={setEditIndex}
          />
          <Table
            allEmployees={allEmployees}
            deleteEmployee={deleteEmployee}
            updateEmployee={updateEmployee}
          />
        </main>

      </div>
      <ToastContainer position="top-right" autoClose={2000} hideProgressBar={false} />
    </div>
  );
}