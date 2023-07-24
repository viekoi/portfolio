import React from "react";


export const tags = [
  { value: "React", label: "React", color: "#61DBFB" },
  { value: "NextJs", label: "Next Js", color: "#79869c" },
  { value: "Personal", label: "Personal", color: "#87A173" },
  { value: "Team", label: "Team", color: "#97AEDF" },
];

export const findTagByValue = (value) =>
  tags.find((tag) => tag.value === value);

export const Tag = ({ label, color}) => {

  return (
    <div
      className={`w-fit flex justify-center items-center px-[6px] gap-[5px] border-solid border-[2px] bg-transparent rounded-[5px] cursor-pointer`}
      style={{
        color: color,
        borderColor: color,
      }}
    >
      <span className=" font-medium leading-[18px] text-[14px] flex items-center">
        {label}
      </span>
    </div>
  );
};
