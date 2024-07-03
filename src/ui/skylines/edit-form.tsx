import Link from "next/link";
import { Car } from "@/lib/definitions";
import { updateCar } from "@/lib/actions";

export default function EditForm({ car }: { car: Car }) {
  const updateCarWithId = updateCar.bind(null, car.id);

  return (
    <form className="pt-5" action={updateCarWithId}>
      <fieldset>
        <legend>Basics</legend>
        <div className="grid grid-cols-form-format gap-x-2 gap-y-3">
          <label htmlFor="model" className="justify-self-end">
            Model:
          </label>
          <select id="model" name="model">
            <option value="" hidden={true}>
              Select a model
            </option>
            <option value="R32" selected={car.model === "R32"}>
              R32
            </option>
            <option value="R32" selected={car.model === "R33"}>
              R33
            </option>
            <option value="R32" selected={car.model === "R34"}>
              R34
            </option>
          </select>
          <label htmlFor="year" className="justify-self-end">
            Year:
          </label>
          <input type="number" name="year" id="year" defaultValue={car.year} />
          <label htmlFor="edition" className="justify-self-end">
            Edition:
          </label>
          <select name="edition" id="edition" defaultValue={car.edition}>
            <option value="" hidden={true}>
              Select an edition
            </option>
            <option value="GT-R">GT-R</option>
            <option value="GT-R Group A">GT-R Group A</option>
            <option value="GT-R LM">GT-R LM</option>
            <option value="GT-R N1">GT-R N1</option>
            <option value="GT-R Nismo">GT-R Nismo</option>
            <option value="GT-R Nismo 400R">GT-R Nismo 400R</option>
            <option value="GT-R Nismo S-Tune">GT-R Nismo S-Tune</option>
            <option value="GT-R Nismo Z-Tune">GT-R Nismo Z-Tune</option>
            <option value="GT-R V-Spec">GT-R V-Spec</option>
            <option value="GT-R V-Spec II">GT-R V-Spec II</option>
            <option value="GT-R V-Spec II Nur">GT-R V-Spec II Nur</option>
            <option value="GT-R V-Spec II Nur Nismo">
              GT-R V-Spec II Nur Nismo
            </option>
            <option value="GT-R Z-Tune">GT-R Z-Tune</option>
            <option value="LM Limited">LM Limited</option>
            <option value="M-Spec Nur">M-Spec Nur</option>
            <option value="Nismo">Nismo</option>
            <option value="Nismo 400R">Nismo 400R</option>
            <option value="V-Spec II">V-Spec II</option>
          </select>
          <label htmlFor="transmission" className="justify-self-end">
            Transmission:
          </label>
          <select
            name="transmission"
            id="transmission"
            defaultValue={car.transmission}
          >
            <option value="" hidden={true}>
              Select transmission
            </option>
            <option value="Automatic">Automatic</option>
            <option value="Manual">Manual</option>
          </select>
          <label htmlFor="mileage" className="justify-self-end">
            Mileage:
          </label>
          <input
            type="number"
            id="mileage"
            name="mileage"
            defaultValue={car.mileage}
          />
          <label htmlFor="color" className="justify-self-end">
            Color:
          </label>
          <input type="text" id="color" name="color" defaultValue={car.color} />
          <label htmlFor="location" className="justify-self-end">
            Location:
          </label>
          <input
            type="text"
            name="location"
            id="location"
            defaultValue={car.location}
          />
          <label htmlFor="price" className="justify-self-end">
            Price:
          </label>
          <input
            type="number"
            id="price"
            name="price"
            defaultValue={car.price}
          />
        </div>
      </fieldset>
      <fieldset>
        <legend>Engine</legend>
        <div className="grid grid-cols-form-format gap-x-2 gap-y-3">
          <label htmlFor="engine" className="justify-self-end">
            Type:
          </label>
          <select name="engine" id="engine" defaultValue={car.engine}>
            <option value="" hidden={true}>
              Select engine type
            </option>
            <option value="RB26DETT">RB26DETT</option>
            <option value="RBX-GT2">RBX-GT2</option>
          </select>
          <label htmlFor="engineVariation" className="justify-self-end">
            Variation:
          </label>
          <select
            name="engineVariation"
            id="engineVariation"
            defaultValue={car.engineVariation}
          >
            <option value="" hidden={true}>
              Select engine variation
            </option>
            <option value="Turbo">Turbo</option>
            <option value="Twin Turbo">Twin Turbo</option>
          </select>
          <label htmlFor="displacement" className="justify-self-end">
            Displacement:
          </label>
          <input
            type="number"
            id="displacement"
            name="displacement"
            defaultValue={car.displacement}
          />
          <label htmlFor="horsepower" className="justify-self-end">
            Horsepower:
          </label>
          <input
            type="numbet"
            id="horsepower"
            name="horsepower"
            defaultValue={car.horsepower}
          />
          <label htmlFor="torque" className="justify-self-end">
            Torque:
          </label>
          <input
            type="number"
            id="torque"
            name="torque"
            defaultValue={car.torque}
          />
        </div>
      </fieldset>
      <fieldset>
        <legend>Performance</legend>
        <div className="grid grid-cols-form-format gap-x-2 gap-y-3">
          <label htmlFor="topSpeed" className="justify-self-end">
            Top Speed:
          </label>
          <input
            type="number"
            id="topSpeed"
            name="topSpeed"
            defaultValue={car.topSpeed}
          />
          <label htmlFor="acceleration" className="justify-self-end">
            Acceleration:
          </label>
          <input
            type="number"
            name="acceleration"
            id="acceleration"
            defaultValue={car.topSpeed}
          />
          <label htmlFor="weight" className="justify-self-end">
            Weight:
          </label>
          <input
            type="number"
            id="weight"
            name="weight"
            defaultValue={car.weight}
          />
        </div>
      </fieldset>
      <fieldset>
        <legend>Additional Information</legend>
        <div className="grid grid-cols-form-format gap-x-2 gap-y-3">
          <label htmlFor="src" className="justify-self-end">
            Thumbnail:
          </label>
          <input type="text" name="src" id="src" defaultValue={car.src} />
          <label htmlFor="description" className="justify-self-end">
            Description:
          </label>
          <textarea
            name="description"
            id="description"
            defaultValue={car.description}
          ></textarea>
        </div>
      </fieldset>
      <div className="flex justify-end mt-6 gap-4">
        <Link
          href={`/skylines/${car.id}`}
          className="flex h-7 items-center rounded-md bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <button
          type="submit"
          className="flex h-7 items-center rounded-md bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Update Car
        </button>
      </div>
    </form>
  );
}
