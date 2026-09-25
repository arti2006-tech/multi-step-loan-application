import React, { useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';

export default function Step8_ESignature() {
  const sigRef = useRef(null);

  const clearSignature = () => {
    sigRef.current.clear();
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-slate-700">Step 8: E-Signature Capture</h2>
      <p className="text-xs text-slate-500">Please sign in the box below:</p>

      <div className="border border-slate-300 rounded-lg bg-white overflow-hidden">
        <SignatureCanvas 
          ref={sigRef}
          penColor="black"
          canvasProps={{ className: 'w-full h-40 bg-slate-50' }}
        />
      </div>

      <button 
        type="button" 
        onClick={clearSignature}
        className="px-3 py-1 bg-slate-200 text-slate-700 text-xs rounded hover:bg-slate-300"
      >
        Clear Signature
      </button>
    </div>
  );
}