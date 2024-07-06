export default function UploadFormColor({
  formState,
}: {
  formState: { message?: string; errors?: { color?: string[] } };
}) {
  return (
    <>
      <label htmlFor="color" className="justify-self-end">
        Color:
      </label>
      <input
        type="text"
        id="color"
        name="color"
        aria-describedby="color-error"
      />
      {formState.errors?.color && (
        <div
          id="color-error"
          aria-live="polite"
          aria-atomic="true"
          className="col-start-2"
        >
          {formState.errors.color.map((error, i) => {
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
