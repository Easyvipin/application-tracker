import ApplicationList from "../../components/ApplicationList";
import { useAppSelector } from "../../hooks/redux";

interface IApplicationsProps {}

const Applications: React.FunctionComponent<IApplicationsProps> = () => {
  const applications = useAppSelector((state) => state.applications);
  return (
    <div className="py-4">
      <h4 className="text-center text-lg font-bold">Applications</h4>
      <ApplicationList list={applications} />
    </div>
  );
};

export default Applications;
