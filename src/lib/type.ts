export type Studio = {
  _id: string;
  title: string;
  category: string;
  hourlyRate: string;
  securityDeposit: string;
  maxCapacity: string;
  location: string;
  images: string[];
  amenities: string[];
  overview: string;
  username:string;
  email:string
};
export type Booking = {
  _id: string;
  title: string;
  category: string;
  hourlyRate: string;
  securityDeposit: string;
  maxCapacity: string;
  location: string;
  images: string[];
  amenities: string[];
  overview: string;
  username:string;
  email:string;
  bookedBy:string;
  bookingEmail:string,
  bookingImage:string,
 hostName:string ,
 hostEmail:string ,
 bookingDate:string,
 startTime:string,
 endTime:string,
  createdAt:string,
  status: "Pending" | "Confirmed" | "Completed" | "Cancelled";
};