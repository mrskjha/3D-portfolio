import React from "react";

export default function SuccessToast2() {
  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm w-full">
      <div className="flex items-center justify-between rounded-lg border border-green-600 bg-green-100 px-4 py-3 shadow-lg">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-600">
            <svg
              className="h-4 w-4 text-white"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.15 3.35C14.925 3.125 14.575 3.125 14.35 3.35L5.85 11.6L1.65 7.475C1.425 7.25 1.075 7.275 0.85 7.475C0.625 7.7 0.65 8.05 0.85 8.275L5.275 12.575C5.425 12.725 5.625 12.8 5.85 12.8C6.075 12.8 6.25 12.725 6.425 12.575L15.15 4.1C15.375 3.925 15.375 3.575 15.15 3.35Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <p className="text-green-800 font-semibold">Boom! Message landed safely. 📬</p>
        </div>
      </div>
    </div>
  );
}
