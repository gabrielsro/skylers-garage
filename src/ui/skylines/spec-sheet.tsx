export default function SpecSheet({
  transmission,
  engine,
  engineVariation,
  displacement,
  horsepower,
  torque,
  weight,
  acceleration,
  topSpeed,
}: {
  transmission: string | undefined;
  engine: string | undefined;
  engineVariation: string | undefined;
  displacement: number | undefined;
  horsepower: number | undefined;
  torque: number | undefined;
  weight: number | undefined;
  acceleration: number | undefined;
  topSpeed: number | undefined;
}) {
  return (
    <div className="bg-nord-4 p-1 rounded-md text-sm text-nord0">
      <div className="grid grid-cols-2">
        <div>
          <div className="border-b-2 border-r-2">
            <div>
              <p>{`transmission: ${transmission}`}</p>
            </div>
          </div>
          <div className="border-b-2 border-r-2">
            <div>
              <p>{`Engine: ${engine} ${
                engineVariation ? engineVariation : ""
              }`}</p>
            </div>
          </div>
          <div className="border-b-2 border-r-2">
            <div>
              <p>{`Displacement: ${displacement} cc`}</p>
            </div>
          </div>
          <div className="border-b-2 border-r-2">
            <div>
              <p>{`Weight: ${weight} Kg`}</p>
            </div>
          </div>
        </div>
        <div>
          <div className="border-b-2">
            <div>
              <p>{`Torque: ${torque}`}</p>
            </div>
          </div>
          <div className="border-b-2">
            <div>
              <p>{`Horsepower: ${horsepower}`}</p>
            </div>
          </div>
          <div className="border-b-2">
            <div>
              <p>{`0 to 60: ${acceleration} s`}</p>
            </div>
          </div>
          <div className="border-b-2">
            <div>
              <p>{`Top speed: ${topSpeed}`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
