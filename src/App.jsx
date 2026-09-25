import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loanSchema } from './schemas/loanSchema';
import Step1_LoanSelection from './components/steps/Step1_LoanSelection';
import Step2_PersonalDetails from './components/steps/Step2_PersonalDetails';
import Step3_IdentityVerification from './components/steps/Step3_IdentityVerification';
import Step4_IncomeDetails from './components/steps/Step4_IncomeDetails';
import Step5_AddressDetails from './components/steps/Step5_AddressDetails';
import Step6_ConditionalFields from './components/steps/Step6_ConditionalFields';
import Step7_DocumentUpload from './components/steps/Step7_DocumentUpload';
import Step8_ESignature from './components/steps/Step8_ESignature';
import Step9_Summary from './components/steps/Step9_Summary';

export default function App() {
  const [currentStep, setCurrentStep] = useState(1);

  const methods = useForm({
    resolver: zodResolver(loanSchema),
    mode: 'onChange',
    defaultValues: {
      loanType: 'Personal',
      loanAmount: 50000,
      tenureMonths: 12,
    }
  });

  const onSubmit = (data) => {
    console.log('Final Application Submitted:', data);
    alert('Loan Application Submitted Successfully!');
  };

  return (
    <FormProvider {...methods}>
      <div className="min-h-screen bg-slate-100 py-10 px-4">
        <div className="max-w-xl mx-auto bg-white rounded-xl shadow-md p-6">
          <h1 className="text-2xl font-bold text-slate-800 mb-1">Multi-Step Loan Application</h1>
          <p className="text-sm text-slate-500 mb-6">Step {currentStep} of 9</p>

          <form onSubmit={methods.handleSubmit(onSubmit)}>
            {currentStep === 1 && <Step1_LoanSelection />}
            {currentStep === 2 && <Step2_PersonalDetails />}
            {currentStep === 3 && <Step3_IdentityVerification />}
            {currentStep === 4 && <Step4_IncomeDetails />}
            {currentStep === 5 && <Step5_AddressDetails />}
            {currentStep === 6 && <Step6_ConditionalFields />}
            {currentStep === 7 && <Step7_DocumentUpload />}
            {currentStep === 8 && <Step8_ESignature />}
            {currentStep === 9 && <Step9_Summary />}

            <div className="flex justify-between mt-8 pt-4 border-t border-slate-100">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={() => setCurrentStep((prev) => prev - 1)}
                  className="px-4 py-2 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50"
                >
                  Back
                </button>
              )}
              {currentStep < 9 ? (
                <button
                  type="button"
                  onClick={() => setCurrentStep((prev) => prev + 1)}
                  className="ml-auto px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Next Step
                </button>
              ) : (
                <button
                  type="submit"
                  className="ml-auto px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                  Submit Application
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </FormProvider>
  );
}