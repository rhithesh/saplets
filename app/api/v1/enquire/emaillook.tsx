// app/components/EnquiryEmail.tsx
import { Html, Text } from "@react-email/components";

export interface EnquiryEmailProps {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  designation?: string;
  city?: string;
  state?: string;
  country?: string;
  website?: string;
  industry?: string;
  products?: string;
  source?: string;
  message: string;
  consent?: boolean;
}

export default function EnquiryEmail({
  firstName,
  lastName,
  email,
  phone,
  company,
  designation,
  city,
  state,
  country,
  website,
  industry,
  products,
  source,
  message,
  consent,
}: EnquiryEmailProps) {
  return (
    <Html>
      <Text>New Enquiry Received:</Text>
      <Text>First Name: {firstName}</Text>
      <Text>Last Name: {lastName}</Text>
      <Text>Email: {email}</Text>
      {phone && <Text>Phone: {phone}</Text>}
      {company && <Text>Company: {company}</Text>}
      {designation && <Text>Designation: {designation}</Text>}
      {city && <Text>City: {city}</Text>}
      {state && <Text>State: {state}</Text>}
      {country && <Text>Country: {country}</Text>}
      {website && <Text>Website: {website}</Text>}
      {industry && <Text>Industry: {industry}</Text>}
      {products && <Text>Products: {products}</Text>}
      {source && <Text>Source: {source}</Text>}
      <Text>Message: {message}</Text>
      <Text>Consent: {consent ? "Yes" : "No"}</Text>
    </Html>
  );
}
