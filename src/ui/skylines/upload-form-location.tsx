export default function UploadFormLocation({
  formState,
}: {
  formState: { message?: string; errors?: { location?: string[] } };
}) {
  return (
    <>
      <label htmlFor="location" className="justify-self-end">
        Location:
      </label>
      <input
        type="text"
        name="location"
        id="location"
        aria-describedby="location-error"
      />
      {formState.errors?.location && (
        <div
          id="location-error"
          aria-live="polite"
          aria-atomic="true"
          className="col-start-2"
        >
          {formState.errors.location.map((error, i) => {
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
