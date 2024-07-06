export default function UploadFormDescription({
  formState,
}: {
  formState: { message?: string; errors?: { description?: string[] } };
}) {
  return (
    <>
      <label htmlFor="description" className="justify-self-end">
        Description:
      </label>
      <textarea
        name="description"
        id="description"
        aria-describedby="description-error"
      ></textarea>
      {formState.errors?.description && (
        <div
          id="description-error"
          aria-live="polite"
          aria-atomic="true"
          className="col-start-2"
        >
          {formState.errors.description.map((error, i) => {
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
