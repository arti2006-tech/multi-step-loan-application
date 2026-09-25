import React from 'react';
import { useFormContext } from 'react-hook-form';

export default function Step2_PersonalDetails() {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-slate-700">Step 2: Personal Details</h2>

      <div>
        <label className="block text-sm font-medium text-slate-600 mb-1">Full Name</label>
        <input 
          type="text" 
          {...register('fullName')} 
          placeholder="John Doe"
          className="w-full p-2 border border-slate-300 rounded-lg"
        />
        {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-600 mb-1">Email Address</label>
        <input 
          type="email" 
          {...register('email')} 
          placeholder="john@example.com"
          className="w-full p-2 border border-slate-300 rounded-lg"
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-600 mb-1">Phone Number</label>
        <input 
          type="text" 
          {...register('phone')} 
          placeholder="9876543210"
          className="w-full p-2 border border-slate-300 rounded-lg"
        />
        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
      </div>
    </div>
  );
}