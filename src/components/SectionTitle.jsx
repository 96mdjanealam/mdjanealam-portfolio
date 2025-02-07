import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <div>
      <h3 className="badge badge-soft badge-success text-xl p-5 rounded-full">{title}</h3>
    </div>
  );
};

export default SectionTitle;
