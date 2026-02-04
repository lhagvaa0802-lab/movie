import { Film } from "lucide-react";
import { Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <div className="bg-indigo-700 text-white">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className=" flex flex-col gap-8 lg:flex-row justify-between">
          <div>
            <div className="flex items-center gap-2 font-bold text-lg">
              <Film className="h-4 w-4" />
              <span className="italic">Movie Z</span>
            </div>
            <p className="mt-2 text-sm text-white/80">
              © 2024 Movie Z. All Rights Reserved.
            </p>
          </div>

          <div className="flex gap-20 ">
            <div>
              <h3 className="mb-3 font-semibold">Contact information</h3>
              <ul className="space-y-2 text-sm text-white/90">
                <li className="flex items-center gap-4">
                  <Mail className="h-4 w-4" />
                  <div>
                    <p>Email:</p>
                    <p> support@moviez.com</p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <Phone className="h-4 w-4" />
                  <div>
                    <p>Phone:</p>
                    <p> +976 (11) 123-4567</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* SOCIAL */}
            <div>
              <h3 className="mb-3 font-semibold">Follow us</h3>
              <ul className="space-y-2 text-sm text-white/90 lg:flex gap-3">
                <li className="hover:underline cursor-pointer">Facebook</li>
                <li className="hover:underline cursor-pointer">Instagram</li>
                <li className="hover:underline cursor-pointer">Twitter</li>
                <li className="hover:underline cursor-pointer">Youtube</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
