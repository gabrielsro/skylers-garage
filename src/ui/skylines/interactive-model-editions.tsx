export default function InteractiveModelEditions({
  editions,
}: {
  editions: string[];
}) {
  return (
    <>
      <label htmlFor="edition" className="justify-self-end">
        Edition:
      </label>
      <select name="edition" id="edition">
        <option value="" hidden={true}>
          Select an edition
        </option>
        {editions.map((edition, i) => {
          return (
            <option value={edition} key={i}>
              {edition}
            </option>
          );
        })}
      </select>
    </>
  );
}
