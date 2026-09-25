import React from 'react';
import { useFormContext } from 'react-hook-form';

export default function Step6_ConditionalFields() {
  const { register, watch } = useFormContext();
  const loanType = watch('loanType');

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-slate-700">Step 6: Loan-Specific Details ({loanType} Loan)</h2>

      {loanType === 'Personal' && (
        <div>
          <label className="block text-sm font-medium text-slate-600 mb-1">Company Name</label>
          <input type="text" {...register('companyName')} placeholder="Current Employer" className="w-full p-2 border border-slate-300 rounded-lg" />
        </div>
      )}

      {loanType === 'Home' && (
        <div>
          <label className="block text-sm font-medium text-slate-600 mb-1">Property Location</label>
          <input type="text" {...register('propertyLocation')} placeholder="City / Area of Property" className="w-full p-2 border border-slate-300 rounded-lg" />
        </div>
      )}

      {loanType === 'Business' && (
        <div>
          <label className="block text-sm font-medium text-slate-600 mb-1">Business Annual Turnover (₹)</label>
          <input type="text" {...register('businessTurnover')} placeholder="e.g. 20,00,000" className="w-full p-2 border border-slate-300 rounded-lg" />
        </div>
      )}
    </div>
  );
}