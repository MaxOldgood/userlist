import { useState } from "react";
import {
  deleteUsers,
  selectUserById,
} from "../../entities/user/model/userSlice";
import { Dialog } from "../../widgets";
import { Button } from "../../shared/ui";
import { useAppDispatch, useAppSelector } from "../../shared/store/hooks";
import { Link, useNavigate, useParams } from "react-router-dom";
import { UserDetailsCard } from "../../entities/user";

export function UserPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isDeletingOpen, setIsDeletingOpen] = useState(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { userId } = useParams();

  const user = useAppSelector(selectUserById(Number(userId)));
  const { lastName, firstName, secondName, email, about, id } = user || {};

  const handleDeleteClick = () => {
    dispatch(deleteUsers([id]));
    navigate("/users/");
  };

  const handleAddUserButtonClick = () => {
    setIsDialogOpen(true);
    setIsFormOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
    setIsFormOpen(false);
    setIsDeletingOpen(false);
  };

  const handleDeletingOpen = () => {
    setIsDialogOpen(true);
    setIsDeletingOpen(true);
  };

  return (
    <div className="bg-gray-100 min-h-screen screen relative">
      <section className="py-2 md:py-5">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="text-center w-full flex flex-col justify-center items-center gap-4">
            <Link to="/users/">
              <p className="p-3 bg-cyan-600 text-white w-fit text-center rounded-xl hover:bg-cyan-700">
                На главную
              </p>
            </Link>
            <h1 className="font-normal text-gray-900 uppercase text-4xl md:text-7xl leading-none ">
              {lastName} {firstName} {secondName}
            </h1>

            <div className="flex sm:flex-row mx-auto justify-center items-center gap-5 flex-col w-fit">
              <Button
                text={"Редактировать"}
                onClick={handleAddUserButtonClick}
              />
              <Button
                text={"Удалить"}
                onClick={handleDeletingOpen}
                className={"hover:bg-orange-600"}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-2 md:py-5 ">
        <UserDetailsCard user={user} />
      </section>

      <Dialog
        user={user}
        initialFormValues={{
          lastName,
          firstName,
          secondName,
          email,
          about,
        }}
        open={isDialogOpen}
        handleClose={handleDialogClose}
        isFormOpen={isFormOpen}
        isDeletingOpen={isDeletingOpen}
        handleDeleteClick={handleDeleteClick}
      />
    </div>
  );
}
