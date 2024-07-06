export default function InteractiveYearOptions({
  period,
}: {
  period: { first: number; last: number };
}) {
  let years = [];
  for (let i = period?.first; i <= period?.last; i++) {
    years.push(i);
  }
  return (
    <>
      <label htmlFor="year" className="justify-self-end">
        Year:
      </label>
      <select name="year" id="year">
        <option value={0} hidden={true}>
          Select year
        </option>
        {years.map((year) => {
          return (
            <option key={year} value={year}>
              {year}
            </option>
          );
        })}
      </select>
    </>
  );
}
