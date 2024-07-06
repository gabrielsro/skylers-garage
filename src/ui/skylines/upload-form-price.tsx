export default function UploadFormPrice({
  formState,
}: {
  formState: { message?: string; errors?: { price?: string[] } };
}) {
  return (
    <>
      <label htmlFor="price" className="justify-self-end">
        Price:
      </label>
      <input
        type="number"
        id="price"
        name="price"
        aria-describedby="price-error"
      />
      {formState.errors?.price && (
        <div
          id="price-error"
          aria-live="polite"
          aria-atomic="true"
          className="col-start-2"
        >
          {formState.errors.price.map((error, i) => {
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
