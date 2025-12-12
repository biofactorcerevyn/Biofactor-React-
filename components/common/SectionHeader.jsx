import React from "react";

const SectionHeader = ({ title, description, action }) => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
      <div>
        <p className="text-xs uppercase tracking-wide text-primary/80 font-semibold">
          {title}
        </p>
        {description && <p className="text-slate-500 text-sm">{description}</p>}
      </div>
      {action}
    </div>
  );
};

export default SectionHeader;

