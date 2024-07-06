export default function UploadFormAcceleration({
  formState,
}: {
  formState: { message?: string; errors?: { acceleration?: string[] } };
}) {
  return (
    <>
      <label htmlFor="acceleration" className="justify-self-end">
        Acceleration:
      </label>
      <input
        type="number"
        name="acceleration"
        id="acceleration"
        aria-describedby="acceleration-error"
      />
      {formState.errors?.acceleration && (
        <div
          id="acceleration-error"
          aria-live="polite"
          aria-atomic="true"
          className="col-start-2"
        >
          {formState.errors.acceleration.map((error, i) => {
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
