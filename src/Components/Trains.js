import React from "react";
import { trainData } from "../traindata";
import { Link } from "react-router-dom";

  
  export default function Trains() {
    return (
      <ul role="list" className="divide-y divide-gray-100">
        {trainData.map((train) => (
          <li key={train.trainNumber} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <div className="min-w-0 flex-auto">
              <Link to={`/train/${train.trainNumber}`}>
              <p className="text-sm font-semibold leading-6 text-gray-900">{train.trainName} - {train.trainNumber}</p>
              </Link>
                
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{train.trainNumber}</p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-gray-900">{train.departureTime.Hours}:{train.departureTime.Minutes? train.departureTime.Minutes:"00"}</p>
            </div>
          </li>
        ))}
      </ul>
    )
  }
  
