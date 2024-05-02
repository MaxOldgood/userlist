import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../shared/store/hooks";
import { User } from "../model/types";
import { selectUser } from "../model/userSlice";
import { Button, RoundImage } from "../../../shared/ui";
import { DEFAULT_AVATAR_URL } from "../model/initialUsers";

interface UserCardProps {
  user: User;
}

export function UserCard({ user }: UserCardProps) {
  const { avatar, firstName, secondName, lastName, email, id } = user;
  const [isSelected, setIsSelected] = useState(false);
  const dispatch = useAppDispatch();

  const handleSelectUser = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    dispatch(selectUser(id));
    setIsSelected(!isSelected);
  };

  return (
    <Link to={`/users/${id}`}>
      <div
        style={{ backgroundColor: isSelected ? "rgb(103, 232, 249)" : "white" }}
        className="max-w-sm mx-auto w-full bg-white dark:bg-gray-900 rounded-lg overflow-hidden hover:shadow-2xl transition shadow-lg"
      >
        <div className="text-center h-full p-4 flex flex-col justify-start">
          <RoundImage image={avatar ? avatar : DEFAULT_AVATAR_URL} />
          <div className="py-2">
            <h3 className="font-bold text-xl flex justify-center items-center text-gray-800 dark:text-white mb-1 min-h-14">
              {` ${lastName} ${firstName} ${secondName}`}
            </h3>
            <div className="inline-flex text-gray-700 dark:text-gray-300 items-center">
              {email ? email : ""}
            </div>
          </div>
          <div className="flex justify-center mt-auto gap-2 px-2 pt-3">
            <Button
              onClick={handleSelectUser}
              text={isSelected ? "Отменить выбор" : "Выбрать"}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
