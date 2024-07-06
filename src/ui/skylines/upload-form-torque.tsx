export default function UploadFormTorque({
  formState,
}: {
  formState: { message?: string; errors?: { torque?: string[] } };
}) {
  return (
    <>
      <label htmlFor="torque" className="justify-self-end">
        Torque:
      </label>
      <input
        type="number"
        id="torque"
        name="torque"
        aria-describedby="torque-error"
      />
      {formState.errors?.torque && (
        <div
          id="torque-error"
          aria-live="polite"
          aria-atomic="true"
          className="col-start-2"
        >
          {formState.errors.torque.map((error, i) => {
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
