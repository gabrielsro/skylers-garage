"use client";

import { createCar } from "@/lib/actions";
import Link from "next/link";
import InteractiveModelYear from "./interactive-model-year";
import InteractiveYearOptions from "./interactive-year-options";
import InteractiveModelEditions from "./interactive-model-editions";
import UploadFormTransmission from "./upload-from-transmission";
import UploadFormMileage from "./upload-form-mileage";
import UploadFormColor from "./upload-form-color";
import UploadFormLocation from "./upload-form-location";
import UploadFormPrice from "./upload-form-price";
import UploadFormEngineType from "./upload-form-engine-type";
import UploadFormEngineVariation from "./upload-form-engine-variation";
import UploadFormDisplacement from "./upload-form-displacement";
import UploadFormHorsepower from "./upload-form-horsepower";
import UploadFormTorque from "./upload-form-torque";
import UploadFormTopSpeed from "./upload-form-top-speed";
import UploadFormAcceleration from "./upload-form-acceleration";
import UploadFormWeight from "./upload-form-weight";
import UploadFormThumbnail from "./upload-form-thumbnail";
import UploadFormDescription from "./upload-form-description";
import { useState } from "react";
import { useFormState } from "react-dom";

export default function UploadForm() {
  const [period, setPeriod] = useState({ first: 0, last: 0 });
  const [editions, setEditions] = useState([]);
  const initialFormState = { message: "", errors: {} };
  const [formState, formAction] = useFormState(createCar, initialFormState);
  console.log(formState);

  return (
    <form className="pt-5" action={formAction}>
      <fieldset>
        <legend>Basics</legend>
        <div className="grid grid-cols-form-format gap-x-2 gap-y-3">
          <InteractiveModelYear
            setPeriod={setPeriod}
            setEditions={setEditions}
          />
          {period.first > 0 && <InteractiveYearOptions period={period} />}
          {editions.length > 0 && (
            <InteractiveModelEditions editions={editions} />
          )}
          <UploadFormMileage formState={formState} />
          <UploadFormTransmission formState={formState} />
          <UploadFormColor formState={formState} />
          <UploadFormLocation formState={formState} />
          <UploadFormPrice formState={formState} />
        </div>
      </fieldset>
      <fieldset>
        <legend>Engine</legend>
        <div className="grid grid-cols-form-format gap-x-2 gap-y-3">
          <UploadFormEngineType formState={formState} />
          <UploadFormEngineVariation formState={formState} />
          <UploadFormDisplacement formState={formState} />
          <UploadFormHorsepower formState={formState} />
          <UploadFormTorque formState={formState} />
        </div>
      </fieldset>
      <fieldset>
        <legend>Performance</legend>
        <div className="grid grid-cols-form-format gap-x-2 gap-y-3">
          <UploadFormTopSpeed formState={formState} />
          <UploadFormAcceleration formState={formState} />
          <UploadFormWeight formState={formState} />
        </div>
      </fieldset>
      <fieldset>
        <legend>Additional Information</legend>
        <div className="grid grid-cols-form-format gap-x-2 gap-y-3">
          <UploadFormThumbnail formState={formState} />
          <UploadFormDescription formState={formState} />
        </div>
      </fieldset>
      <div className="flex justify-end mt-6 gap-4">
        <Link
          href="/skylines/all"
          className="flex h-7 items-center rounded-md bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <button
          type="submit"
          className="flex h-7 items-center rounded-md bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Upload Car
        </button>
      </div>
    </form>
  );
}
