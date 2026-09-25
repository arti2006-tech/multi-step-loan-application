import React from 'react';
import { useFormContext } from 'react-hook-form';

export default function Step9_Summary() {
  const { watch } = useFormContext();
  const values = watch();

  // Function to download form data as a JSON file
  const downloadJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(values, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `Loan_Application_${values.fullName || 'Draft'}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-slate-700">Step 9: Pre-Approval Summary</h2>
      
      <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-sm space-y-2">
        <p><strong>Loan Type:</strong> {values.loanType}</p>
        <p><strong>Loan Amount:</strong> ₹{values.loanAmount}</p>
        <p><strong>Tenure:</strong> {values.tenureMonths} Months</p>
        <p><strong>Full Name:</strong> {values.fullName}</p>
        <p><strong>Email:</strong> {values.email}</p>
        <p><strong>Phone:</strong> {values.phone}</p>
        <p><strong>Monthly Income:</strong> ₹{values.monthlyIncome}</p>
      </div>

      <div className="flex gap-3 pt-2">
        <button
          type="button"
          onClick={downloadJSON}
          className="px-4 py-2 bg-slate-800 text-white text-sm rounded-lg hover:bg-slate-700"
        >
          Download Application (JSON)
        </button>
      </div>

      <p className="text-xs text-slate-500">Review your details and download a copy before final submission.</p>
    </div>
  );
}