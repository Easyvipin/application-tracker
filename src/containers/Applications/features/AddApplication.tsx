import { useForm } from "react-hook-form";
import { Applications, applicationAdded } from "../applicationsSlice";
import { useAppDispatch } from "../../../hooks/redux";

interface IAddApplicationProps {}

const AddApplication: React.FunctionComponent<IAddApplicationProps> = () => {
  const { handleSubmit, register, reset } = useForm<Applications>({
    defaultValues: {
      company: "",
      position: "",
    },
  });

  const dispatch = useAppDispatch();

  const createApplication = (formData: Applications) => {
    const data = {
      id: formData.company,
      company: formData.company,
      position: formData.position,
      date: new Date().toDateString(),
    };

    dispatch(applicationAdded(data));
    reset();
  };

  return (
    <div className="flex flex-col gap-4 border w-full rounded-xl">
      <form
        className="p-4 flex flex-col md:flex-row flex-wrap gap-2"
        onSubmit={handleSubmit(createApplication)}
      >
        <fieldset className="flex-1 flex flex-col justify-start items-start gap-2">
          <label htmlFor="company" className="font-light font-sans text-sm">
            Company
          </label>
          <input
            type="text"
            id="company"
            className="block border w-full p-1 rounded-lg hover:border-stone-500 focus:border-stone-500 outline-none"
            {...register("company")}
          />
        </fieldset>
        <fieldset className="flex-1 flex flex-col justify-start items-start gap-2">
          <label htmlFor="company" className="font-light font-sans text-sm">
            Position
          </label>
          <input
            type="text"
            id="position"
            className="block border w-full p-1 rounded-lg hover:border-stone-500 focus:border-stone-500 outline-none"
            {...register("position")}
          />
        </fieldset>
        <button
          type="submit"
          className=" block border-2 self-end min-w-16 min-h-9 rounded-full font-semibold hover:shadow-md"
        >
          +
        </button>
      </form>
    </div>
  );
};

export default AddApplication;
