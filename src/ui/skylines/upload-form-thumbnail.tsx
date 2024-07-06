export default function UploadFormThumbnail({
  formState,
}: {
  formState: { message?: string; errors?: { src?: string[] } };
}) {
  return (
    <>
      <label htmlFor="src" className="justify-self-end">
        Thumbnail:
      </label>
      <input type="text" name="src" id="src" aria-describedby="src-error" />
      {formState.errors?.src && (
        <div
          id="src-error"
          aria-live="polite"
          aria-atomic="true"
          className="col-start-2"
        >
          {formState.errors.src.map((error, i) => {
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
