export default function UploadFormWeight({
  formState,
}: {
  formState: { message?: string; errors?: { weight?: string[] } };
}) {
  return (
    <>
      <label htmlFor="weight" className="justify-self-end">
        Weight:
      </label>
      <input
        type="number"
        id="weight"
        name="weight"
        aria-describedby="weight-error"
      />
      {formState.errors?.weight && (
        <div
          id="weight-error"
          aria-live="polite"
          aria-atomic="true"
          className="col-start-2"
        >
          {formState.errors.weight.map((error, i) => {
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
