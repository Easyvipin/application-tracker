import { useNavigate, useParams } from "react-router";
import { useAppSelector } from "../../hooks/redux";

interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = () => {
  const { id } = useParams();
  let navigate = useNavigate();

  const application = useAppSelector((state) =>
    state.applications.find((eachPost) => eachPost.id === id)
  );

  if (!application) {
    return navigate("*");
  }

  return (
    <section>
      <span>{application?.id}</span>
      <h4 className="text-lg font-semibold">{application?.company}</h4>
    </section>
  );
};

export default Application;
