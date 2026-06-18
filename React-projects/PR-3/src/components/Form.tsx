import React, { useEffect, useState } from 'react';
import { toast } from "react-toastify";
import type { employeeType } from '../utils/global';

interface FormProps {
    allEmployees: employeeType[];
    setAllEmployees: React.Dispatch<React.SetStateAction<employeeType[]>>;
    editEmployee: employeeType | undefined;
    editIndex: number | null;
    setEditIndex: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function Form({
    allEmployees,
    setAllEmployees,
    editEmployee,
    editIndex,
    setEditIndex
}: FormProps) {
    const [fName, setFName] = useState<string>("");
    const [lName, setLName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [gender, setGender] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [address, setAddress] = useState<string>("");

    useEffect(() => {
        if (editIndex !== null && editEmployee) {
            setFName(editEmployee.fName);
            setLName(editEmployee.lName);
            setEmail(editEmployee.email);
            setPhone(editEmployee.phone);
            setGender(editEmployee.gender);
            setCity(editEmployee.city);
            setAddress(editEmployee.address || "");
        }
    }, [editIndex, editEmployee]);

    const employeeFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newEmployee: employeeType = {
            fName, lName, email, phone, gender, city, address,
            skills: editEmployee?.skills || []
        };

        if (editIndex !== null) {
            const updated = [...allEmployees];
            updated[editIndex] = newEmployee;
            setAllEmployees(updated);
            setEditIndex(null);
            toast.success("Profile records updated flawlessly");
        } else {
            setAllEmployees([...allEmployees, newEmployee]);
            toast.success("New personnel added to local database");
        }

        // Form fields reset properly
        setFName(""); setLName(""); setEmail(""); setPhone(""); setGender(""); setCity(""); setAddress("");
    };

    const inputStyle = `w-full px-4 py-2.5 rounded-lg border border-stone-200 bg-stone-50/50 text-stone-800 font-medium text-sm transition-all duration-200 outline-none focus:border-stone-400 focus:bg-white placeholder-stone-300`;

    return (
        <div className="w-full max-w-4xl mx-auto pt-6">
            <div className="bg-white border border-stone-100 p-6 sm:p-10 rounded-2xl shadow-sm">
                
                <div className="mb-8">
                    <h2 className="text-xl font-bold text-stone-900 tracking-tight">
                        {editIndex !== null ? "Modify Profile Index" : "Create New Profile Entry"}
                    </h2>
                    <p className="text-xs text-stone-400 mt-1">Fill out the basic identification parameters below</p>
                </div>

                <form className="space-y-6" onSubmit={employeeFormSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-1.5">
                            <label className="text-xs font-semibold text-stone-500">First Name</label>
                            <input type="text" value={fName} onChange={(e) => setFName(e.target.value)} className={inputStyle} placeholder="John" required />
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-xs font-semibold text-stone-500">Last Name</label>
                            <input type="text" value={lName} onChange={(e) => setLName(e.target.value)} className={inputStyle} placeholder="Doe" required />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-1.5">
                            <label className="text-xs font-semibold text-stone-500">Email Address</label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={inputStyle} placeholder="name@domain.com" required />
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-xs font-semibold text-stone-500">Phone Number</label>
                            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className={inputStyle} placeholder="+91 XXXXX XXXXX" required />
                        </div>
                    </div>

                    {/* Simple aesthetic tab radios */}
                    <div className="space-y-2">
                        <label className="text-xs font-semibold text-stone-500 block">Gender Identity</label>
                        <div className="flex gap-3 max-w-sm">
                            {["Male", "Female", "Other"].map((g) => (
                                <label key={g} className="flex-1 cursor-pointer">
                                    <input type="radio" name="gender" value={g} checked={gender === g} onChange={(e) => setGender(e.target.value)} className="sr-only peer" required />
                                    <div className="py-2 text-center text-xs font-medium rounded-lg border border-stone-200 bg-stone-50 text-stone-500 transition-all peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 hover:bg-stone-100">
                                        {g}
                                    </div>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-1.5">
                            <label className="text-xs font-semibold text-stone-500">Current Station</label>
                            <select value={city} onChange={(e) => setCity(e.target.value)} className={inputStyle} required>
                                <option value="">Select Location</option>
                                {["Surat", "Pune", "Bengaluru", "Mumbai"].map(c => <option key={c} value={c}>{c}</option>)}
                            </select>
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-xs font-semibold text-stone-500">Residential Street Address</label>
                            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className={inputStyle} placeholder="Apartment, Street, Area" required />
                        </div>
                    </div>

                    <div className="pt-2">
                        <button type="submit" className="w-full bg-stone-900 text-white py-3 rounded-xl font-semibold text-sm transition-all hover:bg-stone-800 active:scale-[0.99]">
                            {editIndex !== null ? "Save Structural Changes" : "Register Profile Data"}
                        </button>
                    </div>
                </form>

            </div>
        </div>
    );
}