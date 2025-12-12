import React from "react";
import { FiArrowUpRight, FiArrowDownRight } from "react-icons/fi";

const StatCard = ({ label, value, delta, icon: Icon, tone = "positive" }) => {
  const DeltaIcon = tone === "negative" ? FiArrowDownRight : FiArrowUpRight;
  const deltaColor =
    tone === "negative" ? "text-rose-500 bg-rose-50" : "text-emerald-600 bg-emerald-50";

  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-wide text-slate-500">{label}</p>
          <p className="text-2xl font-semibold text-slate-900 mt-1">{value}</p>
        </div>
        <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
          {Icon ? <Icon className="text-xl" /> : <span className="font-semibold">BF</span>}
        </div>
      </div>
      {delta && (
        <div className="mt-3 inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium">
          <span className={`flex items-center gap-1 ${deltaColor} px-2 py-1 rounded-full`}>
            <DeltaIcon className="text-sm" />
            {delta}
          </span>
        </div>
      )}
    </div>
  );
};

export default StatCard;

