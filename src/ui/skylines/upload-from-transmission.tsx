export default function UploadFormTransmission({
  formState,
}: {
  formState: { message?: string; errors?: { transmission?: string[] } };
}) {
  return (
    <>
      <label htmlFor="transmission" className="justify-self-end">
        Transmission:
      </label>
      <select
        name="transmission"
        id="transmission"
        aria-describedby="transmission-error"
      >
        <option value="" hidden={true}>
          Select transmission
        </option>
        <option value="Automatic">Automatic</option>
        <option value="Manual">Manual</option>
      </select>
      {formState.errors?.transmission && (
        <div
          id="transmission-error"
          aria-live="polite"
          aria-atomic="true"
          className="col-start-2"
        >
          {formState.errors.transmission.map((error, i) => {
            return (
              <p key={i} className="text-sm text-red-500">
                {error}
              </p>
            );
          })}
        </div>
      )}
    </>
  );
}
