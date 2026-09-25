import { z } from 'zod';

export const loanSchema = z.object({
  // Step 1: Loan Selection
  loanType: z.enum(['Personal', 'Home', 'Business'], { required_error: "Select a loan type" }),
  loanAmount: z.coerce.number().min(10000, "Minimum loan amount is 10,000"),
  tenureMonths: z.coerce.number().min(6, "Minimum tenure is 6 months"),

  // Step 2: Personal Details
  fullName: z.string().min(3, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^[0-9]{10}$/, "Enter a valid 10-digit phone number"),

  // Step 3: Identity Verification
  panNumber: z.string().regex(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Invalid PAN format (e.g., ABCDE1234F)"),
  aadhaarNumber: z.string().regex(/^[0-9]{12}$/, "Invalid Aadhaar format (12 digits)"),

  // Step 4 & 5: Income & Address
  employmentType: z.enum(['Salaried', 'Self-Employed']),
  monthlyIncome: z.coerce.number().min(1000, "Income is required"),
  address: z.string().min(5, "Address is required"),
  pincode: z.string().regex(/^[0-9]{6}$/, "Invalid Pincode"),

  // Step 6: Conditional Fields (Optional initially depending on type)
  companyName: z.string().optional(),
  businessTurnover: z.string().optional(),
  propertyLocation: z.string().optional(),
});