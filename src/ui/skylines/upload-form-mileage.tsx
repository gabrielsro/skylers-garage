export default function UploadFormMileage({
  formState,
}: {
  formState: { message?: string; errors?: { mileage?: string[] } };
}) {
  return (
    <>
      <label htmlFor="mileage" className="justify-self-end">
        Mileage:
      </label>
      <input
        type="number"
        id="mileage"
        name="mileage"
        aria-describedby="mileage-error"
      />
      {formState.errors?.mileage && (
        <div
          id="mileage-error"
          aria-live="polite"
          aria-atomic="true"
          className="col-start-2"
        >
          {formState.errors.mileage.map((error, i) => {
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
