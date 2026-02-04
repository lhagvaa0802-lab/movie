import { Film } from "lucide-react";
export const Footer = () => {
  return (
    <div className="mx-5">
      <div className=" gap-4 ">
        <div className="flex">
          <Film className="text-indigo-700" />
          <p className="text-indigo-700 italic font-semibold">Movie Z</p>
        </div>

        <p>© 2024 Movie Z. All Rights Reserved.</p>
      </div>
      <div className="flex justify-between">
        <div>
          <p>Contact Information</p>
          <p>Email:support@movieZ.com</p>
          <p>Phone: +976 (11) 123-4567</p>
        </div>
        <div>
          <p>Follow us </p>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>Twitter</p>
          <p>Youtube</p>
        </div>
      </div>
    </div>
  );
};
