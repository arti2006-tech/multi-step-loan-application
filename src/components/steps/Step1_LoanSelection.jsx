import React from 'react';
import { useFormContext } from 'react-hook-form';

export default function Step1_LoanSelection() {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-slate-700">Step 1: Select Loan Type & Amount</h2>

      <div>
        <label className="block text-sm font-medium text-slate-600 mb-1">Loan Type</label>
        <select {...register('loanType')} className="w-full p-2 border border-slate-300 rounded-lg">
          <option value="Personal">Personal Loan</option>
          <option value="Home">Home Loan</option>
          <option value="Business">Business Loan</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-600 mb-1">Loan Amount (₹)</label>
        <input 
          type="number" 
          {...register('loanAmount')} 
          className="w-full p-2 border border-slate-300 rounded-lg"
        />
        {errors.loanAmount && <p className="text-red-500 text-xs mt-1">{errors.loanAmount.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-600 mb-1">Tenure (Months)</label>
        <input 
          type="number" 
          {...register('tenureMonths')} 
          className="w-full p-2 border border-slate-300 rounded-lg"
        />
        {errors.tenureMonths && <p className="text-red-500 text-xs mt-1">{errors.tenureMonths.message}</p>}
      </div>
    </div>
  );
}