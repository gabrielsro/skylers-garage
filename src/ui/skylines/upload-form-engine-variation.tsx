export default function UploadFormEngineVariation({
  formState,
}: {
  formState: { message?: string; errors?: { engineVariation?: string[] } };
}) {
  return (
    <>
      <label htmlFor="engineVariation" className="justify-self-end">
        Variation:
      </label>
      <select
        name="engineVariation"
        id="engineVariation"
        aria-describedby="engineVariation-error"
      >
        <option value="" hidden={true}>
          Select engine variation
        </option>
        <option value="Default">Default</option>
        <option value="Turbo">Turbo</option>
        <option value="Twin Turbo">Twin Turbo</option>
      </select>
      {formState.errors?.engineVariation && (
        <div
          id="engineVariation-error"
          aria-live="polite"
          aria-atomic="true"
          className="col-start-2"
        >
          {formState.errors.engineVariation.map((error, i) => {
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
