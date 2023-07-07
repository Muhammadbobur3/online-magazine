import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ items, activeLink }) => {
  const breadcrumbs = items.map((item, index) => (
    <li key={index} className="flex items-center">
      {item.link ? (
        <Link to={item.link} className={"text-blue-500 hover:text-blue-700"}>
          {item.text}
        </Link>
      ) : (
        <span className=" text-blue-500">{item.text}</span>
      )}

      <svg
        className="w-3 h-3 mx-2 text-blue-500"
        fill="currentColor"
        viewBox="0 0 12 12"
      >
        <path d="M5.828 9.172a.5.5 0 0 1-.707 0L1.172 5.828a.5.5 0 0 1 0-.707l4.95-4.95a.5.5 0 0 1 .707.707L2.707 5l3.829 3.828a.5.5 0 0 1 0 .707z" />
      </svg>
    </li>
  ));
  return (
    <nav className="text-sm md:text-base">
      <ol className="list-none p-0 inline-flex">
        {breadcrumbs}{" "}
        <li className="flex items-center text-gray-500">
          <div className={" hover:text-gray-700"}>{activeLink}</div>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
