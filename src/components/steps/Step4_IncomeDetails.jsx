import React from 'react';
import { useFormContext } from 'react-hook-form';

export default function Step4_IncomeDetails() {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-slate-700">Step 4: Employment & Income</h2>

      <div>
        <label className="block text-sm font-medium text-slate-600 mb-1">Employment Type</label>
        <select {...register('employmentType')} className="w-full p-2 border border-slate-300 rounded-lg bg-white">
          <option value="Salaried">Salaried</option>
          <option value="Self-Employed">Self-Employed</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-600 mb-1">Monthly Income (₹)</label>
        <input 
          type="number" 
          {...register('monthlyIncome')} 
          className="w-full p-2 border border-slate-300 rounded-lg"
        />
        {errors.monthlyIncome && <p className="text-red-500 text-xs mt-1">{errors.monthlyIncome.message}</p>}
      </div>
    </div>
  );
}