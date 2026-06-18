import React, { useState } from 'react';
import type { employeeType } from '../utils/global';

interface TableProps {
    allEmployees: employeeType[];
    deleteEmployee: (index: number) => void;
    updateEmployee: (index: number) => void;
}

export default function Table({ allEmployees, deleteEmployee, updateEmployee }: TableProps) {
    const [search, setSearch] = useState<string>("");

    const filterEmployees = allEmployees.filter((emp: employeeType) =>
        emp.fName.toLowerCase().includes(search.toLowerCase()) ||
        emp.city.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="w-full max-w-4xl mx-auto mt-10 pb-20">
            
            {/* Simple aesthetic search filter bar */}
            <div className="max-w-md mx-auto mb-8">
                <input
                    type="text"
                    placeholder="Search by name or hub location..."
                    className="w-full bg-white border border-stone-200 text-stone-800 px-4 py-2.5 text-xs rounded-xl outline-none focus:border-stone-400 transition-colors shadow-sm"
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            {/* Clean Pure Table View */}
            <div className="bg-white border border-stone-100 rounded-2xl overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-left">
                        <thead>
                            <tr className="bg-stone-50 border-b border-stone-100">
                                {["Ref Code", "Full Name", "Contact Matrix", "Branch", "Modify / Drop"].map((header) => (
                                    <th key={header} className="px-6 py-3.5 text-[11px] font-bold text-stone-400 uppercase tracking-wider">
                                        {header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-stone-100 text-sm">
                            {filterEmployees.map((emp: employeeType, index: number) => (
                                <tr key={index} className="hover:bg-stone-50/50 transition-colors">
                                    <td className="px-6 py-4 font-mono text-xs text-stone-400">
                                        #ID-0{index + 101}
                                    </td>
                                    <td className="px-6 py-4 font-semibold text-stone-800">
                                        {emp.fName} {emp.lName}
                                    </td>
                                    <td className="px-6 py-4 text-stone-500 text-xs">
                                        <div>{emp.email}</div>
                                        <div className="text-stone-300 mt-0.5">{emp.phone}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-[10px] font-bold bg-stone-100 text-stone-700 px-2 py-1 rounded-md">
                                            {emp.city.toUpperCase()}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-xs">
                                        <div className="flex items-center gap-4">
                                          <button onClick={() => updateEmployee(index)} className="text-stone-600 font-semibold hover:text-stone-900 transition-colors">
                                              Edit
                                          </button>
                                          <button onClick={() => deleteEmployee(index)} className="text-rose-400 font-semibold hover:text-rose-600 transition-colors">
                                              Delete
                                          </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {filterEmployees.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-xs font-medium text-stone-400">No synchronized records match the query field.</p>
                    </div>
                )}
            </div>

        </div>
    );
}