import React from "react";

type Title = { title: string; url: string; color: string; size: string };
type Titles = {
  title: string;
  url: string;
  color: string;
  size: string;
  items?: Title[];
};
export default function RecommedCard({
  title,
  children,
  className
}: {
  title: Titles;
  children?: React.ReactNode;
  className?:string
}) {
  return (
    <div className={className}>
      <div className="top border-b-solid border-b-#C10D0C border-b-2px flex justify-between items-center">
        <div className="flex items-center">
          <span style={{ color: title.color, fontSize: title.size }}>
            {title.title}
          </span>
          {title.items && (
            <ul className=" list-none m-0 p-0  flex ml-10px">
              {title?.items.map((item, index) => (
                <li
                  key={index}
                  style={{ color: item.color, fontSize: item.size }}
                  className="flex items-center"
                >
                  <span>{item.title}</span>
                  {index < (title.items as Title[]).length - 1 && (
                    <span className="mx-10px text-#ccc">|</span>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div>
          <span>更多</span>
        </div>
      </div>
      <div className="bottom ">{children}</div>
      <div></div>
    </div>
  );
}
