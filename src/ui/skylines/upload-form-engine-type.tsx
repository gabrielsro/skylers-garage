export default function UploadFormEngineType({
  formState,
}: {
  formState: { message?: string; errors?: { engine?: string[] } };
}) {
  return (
    <>
      <label htmlFor="engine" className="justify-self-end">
        Type:
      </label>
      <select name="engine" id="engine" aria-describedby="engine-error">
        <option value="" hidden={true}>
          Select engine type
        </option>
        <option value="RB20E">RB20E</option>
        <option value="RB20DE">RB20DE</option>
        <option value="RB20DE NEO">RB20DE NEO</option>
        <option value="RB20DET">RB20DET</option>
        <option value="RB25DE">RB25DE</option>
        <option value="RB25DE NEO">RB25DE NEO</option>
        <option value="RB25DET">RB25DET</option>
        <option value="RB25DET NEO">RB25DET NEO</option>
        <option value="RB26DE">RB26DE</option>
        <option value="RB26DETT">RB26DETT</option>
        <option value="RB30DE">RB30DE</option>
        <option value="RBX-GT2">RBX-GT2</option>
      </select>
      {formState.errors?.engine && (
        <div
          id="engine-error"
          aria-live="polite"
          aria-atomic="true"
          className="col-start-2"
        >
          {formState.errors.engine.map((error, i) => {
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
