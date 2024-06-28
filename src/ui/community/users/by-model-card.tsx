import { Suspense } from "react";
import ByModelCount from "./by-model-count";
import ByModelList from "./by-model-list";
import GenericFallback from "@/ui/generic/genericFallback";
import ByModelListFallback from "./by-model-list-fallback";

export default function ByModelCard({
  model,
}: {
  model: "R32" | "R33" | "R34";
}) {
  return (
    <div className="flex flex-col shadow-md rounded-sm pb-2 bg-white">
      <div className="flex justify-between items-center px-2">
        <p className="text-lg">{model}</p>
        <div>
          <div className="grid place-content-center min-w-12">
            <Suspense fallback={<GenericFallback size={20} />}>
              <ByModelCount model={model} />
            </Suspense>
          </div>
        </div>
      </div>
      <Suspense fallback={<ByModelListFallback />}>
        <ByModelList model={model} />
      </Suspense>
    </div>
  );
}
