import { Applications } from "../../containers/Applications/applicationsSlice";

interface IApplicationListProps {
  list: Applications[];
}

const ApplicationList: React.FunctionComponent<IApplicationListProps> = ({
  list,
}) => {
  return (
    <div className="flex justify-center items-center py-4">
      <ul className="flex flex-col gap-4 w-1/2">
        {list.map((eachList) => (
          <li
            key={eachList.id}
            className="border p-4 rounded-sm shadow-sm hover:border-blue-300 hover:cursor-pointer"
          >
            <h3>Company : {eachList.company}</h3>
            <h6>Position : {eachList.position}</h6>
            <span>{eachList.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApplicationList;
