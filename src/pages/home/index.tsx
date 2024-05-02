import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../shared/store/hooks";
import {
  deleteUsers,
  selectSelectedUsers,
  selectSelectedUsersFullNames,
  selectUsers,
} from "../../entities/user/model/userSlice";
import { Button } from "../../shared/ui";
import { Dialog, UserList } from "../../widgets";

export function Home() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isDeletingOpen, setIsDeletingOpen] = useState(false);

  const users = useAppSelector(selectUsers);
  const dispatch = useAppDispatch();
  const selectedUsersId = useAppSelector(selectSelectedUsers);
  const selectedUsers = useAppSelector(selectSelectedUsersFullNames);

  const handleDeleteClick = () => {
    dispatch(deleteUsers(selectedUsersId));
    handleDialogClose();
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

  const handleDeleteDialogOpen = () => {
    setIsDialogOpen(true);
    setIsDeletingOpen(true);
  };

  return (
    <div className="bg-gray-100 min-h-screen screen relative">
      <section className="py-2 md:py-5">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="text-center">
            <h1 className="font-normal text-gray-900 uppercase text-4xl md:text-7xl leading-none mb-8">
              Пользователи
            </h1>
            <div className="flex sm:flex-row mx-auto  justify-center gap-5 flex-col w-fit">
              <Button text={"Добавить"} onClick={handleAddUserButtonClick} />
              {selectedUsersId.length > 0 && (
                <Button
                  text={"Удалить"}
                  onClick={handleDeleteDialogOpen}
                  className={"hover:bg-orange-600"}
                />
              )}
            </div>
          </div>
        </div>
      </section>
      <UserList userList={users} />
      <Dialog
        open={isDialogOpen}
        handleClose={handleDialogClose}
        isFormOpen={isFormOpen}
        isDeletingOpen={isDeletingOpen}
        selectedUsers={selectedUsers}
        handleDeleteClick={handleDeleteClick}
      />
    </div>
  );
}
