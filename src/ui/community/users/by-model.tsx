import ByModelCard from "./by-model-card";

export default function ByModel() {
  return (
    <div>
      <p>ByModel</p>
      <div className="flex flex-col gap-2 px-1">
        <ByModelCard model="R32" />
        <ByModelCard model="R33" />
        <ByModelCard model="R34" />
      </div>
    </div>
  );
}
