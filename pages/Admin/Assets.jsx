import React from "react";
import { useSelector } from "react-redux";
import DataTable from "../../components/common/DataTable";

const Assets = () => {
  const { assets } = useSelector((state) => state.admin);

  return (
    <div className="space-y-4">
      <div>
        <p className="text-xs uppercase tracking-wide text-primary font-semibold">
          Asset Register
        </p>
        <h2 className="text-2xl font-bold text-slate-900">Assets</h2>
      </div>
      <DataTable
        columns={[
          { key: "id", label: "Asset ID" },
          { key: "name", label: "Name" },
          { key: "location", label: "Location" },
          { key: "status", label: "Status" },
        ]}
        data={assets}
      />
    </div>
  );
};

export default Assets;

