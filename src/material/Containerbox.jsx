/* eslint-disable react/prop-types */
import { cn } from "../../../lib/cn";

export default function ContainerBox({ children, className }) {
  return (
    <>
      <div className={cn(" max-w-screen-xl mx-auto px-3 lg:px-4  ", className)}>
        {children}
      </div>
    </>
  );
}
