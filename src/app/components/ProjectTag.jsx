import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white border-primary-500"
    : "text-black border-slate-600 hover:border-white";
  return (
    <button
      className={`${buttonStyles} rounded-se-3xl rounded-bl-3xl bg-gradient-to-br from-primary-500 to-secondary-500 border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
