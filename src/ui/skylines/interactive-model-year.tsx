import { modelYears, modelEditions } from "@/lib/actions";
import { Dispatch, SetStateAction } from "react";

export default function InteractiveModelYear({
  setPeriod,
  setEditions,
}: {
  setPeriod: Dispatch<SetStateAction<any>>;
  setEditions: Dispatch<SetStateAction<any>>;
}) {
  return (
    <>
      <label htmlFor="model" className="justify-self-end">
        Model:
      </label>
      <select
        id="model"
        name="model"
        onChange={async (e) => {
          const period = await modelYears(e.target.value);
          const editions = await modelEditions(e.target.value);
          setPeriod(period);
          setEditions(editions);
        }}
      >
        <option value="" hidden={true}>
          Select a model
        </option>
        <option value="R32">R32</option>
        <option value="R33">R33</option>
        <option value="R34">R34</option>
      </select>
    </>
  );
}
