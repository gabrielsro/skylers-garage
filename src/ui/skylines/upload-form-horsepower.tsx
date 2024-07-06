export default function UploadFormHorsepower({
  formState,
}: {
  formState: { message?: string; errors?: { horsepower?: string[] } };
}) {
  return (
    <>
      <label htmlFor="horsepower" className="justify-self-end">
        Horsepower:
      </label>
      <input
        type="numbet"
        id="horsepower"
        name="horsepower"
        aria-describedby="horsepower-error"
      />
      {formState.errors?.horsepower && (
        <div
          id="horsepower-error"
          aria-live="polite"
          aria-atomic="true"
          className="col-start-2"
        >
          {formState.errors.horsepower.map((error, i) => {
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
