import { Outlet } from "react-router";

interface IApplicationLayoutProps {}

const ApplicationLayout: React.FunctionComponent<
  IApplicationLayoutProps
> = ({}) => {
  return (
    <div className="px-4 border">
      <Outlet />
    </div>
  );
};

export default ApplicationLayout;
