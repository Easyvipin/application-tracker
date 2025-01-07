interface INotFoundProps {}

const NotFound: React.FunctionComponent<INotFoundProps> = (props) => {
  return (
    <div className="flex flex-col justify-center items-center h-[60vh]">
      404 not found
    </div>
  );
};

export default NotFound;
