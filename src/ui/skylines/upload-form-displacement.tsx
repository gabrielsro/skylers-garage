export default function UploadFormDisplacement({
  formState,
}: {
  formState: { message?: string; errors?: { displacement?: string[] } };
}) {
  return (
    <>
      <label htmlFor="displacement" className="justify-self-end">
        Displacement:
      </label>
      <input
        type="number"
        id="displacement"
        name="displacement"
        aria-describedby="displacement-error"
      />
      {formState.errors?.displacement && (
        <div
          id="displacement-error"
          aria-live="polite"
          aria-atomic="true"
          className="col-start-2"
        >
          {formState.errors.displacement.map((error, i) => {
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
