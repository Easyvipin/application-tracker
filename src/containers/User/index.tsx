import React from "react";
import { useAppSelector } from "../../hooks/redux";
import { userDetailSelector } from "./userSlice";

interface IUserContainerProps {}

const UserContainer: React.FunctionComponent<IUserContainerProps> = (props) => {
  const user = useAppSelector(userDetailSelector);

  return (
    <div className="flex flex-col">
      <div className="border rounded-md p-4 box-border">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <h4 className="text-lg font-semibold">{user.name}</h4>
            <p className="font-lighter text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
              ipsum deserunt voluptatum officiis voluptatibus ipsa nihil alias,
              molestias tempore veniam?
            </p>
          </div>
          <div className="object-cover w-[8rem] h-[8rem]">
            <img src="https://avatar.iran.liara.run/public/boy?username=Ash" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-4 justify-end items-center gap-4">
          <h5 className="text-md font-lighter border p-2 rounded-md">
            Ex: {user.experience}
          </h5>
          <h5 className="text-md font-lighter border p-2 rounded-md">
            Current ORG: {user.currentOrg}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default UserContainer;
