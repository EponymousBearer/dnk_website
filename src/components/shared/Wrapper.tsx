import { FC, ReactNode } from "react";

const Wrapper: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div
      className="mx-4 px-4 md:mx-9 md:px-9"
    >
      {children}
    </div>
  );
};

export default Wrapper;

