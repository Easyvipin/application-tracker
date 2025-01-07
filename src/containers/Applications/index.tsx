import ApplicationList from "../../components/ApplicationList";
import { useAppSelector } from "../../hooks/redux";
import AddApplication from "./features/AddApplication";

interface IApplicationsProps {}

const Applications: React.FunctionComponent<IApplicationsProps> = () => {
  const applications = useAppSelector((state) => state.applications);
  return (
    <div className="flex flex-col items-center py-4 gap-4 w-full lg:w-1/2 mx-auto">
      <h4 className="text-center text-lg font-bold">Applications</h4>
      <AddApplication />
      <ApplicationList list={applications} />
    </div>
  );
};

export default Applications;
