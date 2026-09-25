import React, { useState } from 'react';

export default function Step7_DocumentUpload() {
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-slate-700">Step 7: Document Upload (ID Proof / Salary Slip)</h2>

      <div>
        <label className="block text-sm font-medium text-slate-600 mb-1">Upload Document</label>
        <input type="file" onChange={handleFileChange} className="w-full p-2 border border-slate-300 rounded-lg" />
      </div>

      {preview && (
        <div className="mt-2">
          <p className="text-xs text-slate-500 mb-1">Preview:</p>
          <img src={preview} alt="Document Preview" className="h-32 object-contain border rounded" />
        </div>
      )}
    </div>
  );
}