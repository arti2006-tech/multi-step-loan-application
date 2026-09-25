import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';

export default function Step3_IdentityVerification() {
  const { register, formState: { errors } } = useFormContext();
  const [verified, setVerified] = useState(false);
  const [loading, setLoading] = useState(false);

  const simulateVerification = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setVerified(true);
    }, 1500);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-slate-700">Step 3: Identity Verification</h2>

      <div>
        <label className="block text-sm font-medium text-slate-600 mb-1">PAN Card Number</label>
        <input 
          type="text" 
          {...register('panNumber')} 
          placeholder="ABCDE1234F"
          className="w-full p-2 border border-slate-300 rounded-lg uppercase"
        />
        {errors.panNumber && <p className="text-red-500 text-xs mt-1">{errors.panNumber.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-600 mb-1">Aadhaar Number</label>
        <input 
          type="text" 
          {...register('aadhaarNumber')} 
          placeholder="123456789012"
          className="w-full p-2 border border-slate-300 rounded-lg"
        />
        {errors.aadhaarNumber && <p className="text-red-500 text-xs mt-1">{errors.aadhaarNumber.message}</p>}
      </div>

      <div className="pt-2">
        <button 
          type="button" 
          onClick={simulateVerification}
          className="px-4 py-2 bg-slate-800 text-white text-sm rounded-lg hover:bg-slate-700"
        >
          {loading ? "Verifying..." : "Simulate ID Verification"}
        </button>
        {verified && <span className="ml-3 text-green-600 text-sm font-medium">✓ Verified Successfully</span>}
      </div>
    </div>
  );
}