export default function UploadFormTopSpeed({
  formState,
}: {
  formState: { message?: string; errors?: { topSpeed?: string[] } };
}) {
  return (
    <>
      <label htmlFor="topSpeed" className="justify-self-end">
        Top Speed:
      </label>
      <input
        type="number"
        id="topSpeed"
        name="topSpeed"
        aria-describedby="topSpeed-error"
      />
      {formState.errors?.topSpeed && (
        <div
          id="topSpeed-error"
          aria-live="polite"
          aria-atomic="true"
          className="col-start-2"
        >
          {formState.errors.topSpeed.map((error, i) => {
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
