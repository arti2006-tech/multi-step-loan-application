import React from 'react';
import { useFormContext } from 'react-hook-form';

export default function Step5_AddressDetails() {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-slate-700">Step 5: Address Details</h2>

      <div>
        <label className="block text-sm font-medium text-slate-600 mb-1">Complete Address</label>
        <textarea 
          {...register('address')} 
          rows="3"
          placeholder="House No, Street, City"
          className="w-full p-2 border border-slate-300 rounded-lg"
        />
        {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-600 mb-1">Pincode</label>
        <input 
          type="text" 
          {...register('pincode')} 
          placeholder="110001"
          className="w-full p-2 border border-slate-300 rounded-lg"
        />
        {errors.pincode && <p className="text-red-500 text-xs mt-1">{errors.pincode.message}</p>}
      </div>
    </div>
  );
}