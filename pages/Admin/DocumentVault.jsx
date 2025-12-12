import React from "react";
import { useSelector } from "react-redux";
import DataTable from "../../components/common/DataTable";

const DocumentVault = () => {
  const { documents } = useSelector((state) => state.admin);

  return (
    <div className="space-y-4">
      <div>
        <p className="text-xs uppercase tracking-wide text-primary font-semibold">
          Document Vault
        </p>
        <h2 className="text-2xl font-bold text-slate-900">Licenses & Certificates</h2>
      </div>
      <DataTable
        columns={[
          { key: "id", label: "Doc ID" },
          { key: "name", label: "Name" },
          { key: "expires", label: "Expiry" },
        ]}
        data={documents}
      />
    </div>
  );
};

export default DocumentVault;

