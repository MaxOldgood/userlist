import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { MouseEvent, useEffect, useState } from "react";

import {
  addNewUser,
  editUser,
  selectEmails,
} from "../../entities/user/model/userSlice";
import { useGetRandomCatsQuery } from "../../shared/api/apiSlice";
import { User } from "../../entities/user";
import { DEFAULT_AVATAR_URL } from "../../entities/user/model/initialUsers";
import { Button } from "../../shared/ui";
import { FormAvatar } from "../../features";
import { Gallery } from "../gallery";
import { FormValues, UserForm } from "../../features/addUserForm/ui/userForm";

const EMAIL_ALREADY_TAKEN_MSG = "Выбранная почта уже используется";
const DATE_FORMAT = "DD.MM.YY HH:mm:ss";

interface DialogProps {
  open: boolean;
  handleClose: () => void;
  isFormOpen: boolean;
  isDeletingOpen: boolean;
  selectedUsers?: string[];
  handleDeleteClick: () => void;
  initialFormValues?: Partial<FormValues>;
  user?: User | undefined;
}

export function Dialog(props: DialogProps) {
  const {
    open,
    isFormOpen,
    isDeletingOpen,
    selectedUsers,
    handleClose,
    handleDeleteClick,
    initialFormValues,
    user,
  } = props;

  const [emailIsTaken, setEmailIsTaken] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [avatar, setAvatar] = useState(DEFAULT_AVATAR_URL);

  useEffect(() => {
    const avatar = user?.avatar ? user.avatar : DEFAULT_AVATAR_URL;
    setAvatar(avatar);
  }, [open]);

  const { data: catImages } = useGetRandomCatsQuery(undefined, {
    skip: !isGalleryOpen,
  });

  const dispatch = useDispatch();
  const EMAILS = useSelector(selectEmails);

  function handleGalleryOpen() {
    setIsGalleryOpen(true);
  }

  function handleImageClick(e: MouseEvent<HTMLImageElement>) {
    setAvatar(e.currentTarget.src);
    setIsGalleryOpen(false);
  }

  function handleSubmit(values: FormValues) {
    const isNewEmail = values.email !== user?.email;
    const isEmailTaken = EMAILS.includes(values.email);

    if (initialFormValues && isNewEmail && isEmailTaken) {
      setEmailIsTaken(true);
      return;
    }

    if (!initialFormValues && isEmailTaken) {
      setEmailIsTaken(true);
      return;
    }

    setEmailIsTaken(false);

    const userPayload = {
      avatar,
      lastName: values.lastName,
      firstName: values.firstName,
      secondName: values.secondName,
      email: values.email,
      about: values.about,
    };

    if (initialFormValues) {
      dispatch(editUser({ userId: user?.id, ...userPayload }));
    } else {
      dispatch(
        addNewUser({
          creationDate: moment().format(DATE_FORMAT),
          ...userPayload,
        })
      );
    }

    handleClose();
  }

  return (
    <>
      {open && (
        <div className="w-full h-full fixed top-0 left-0 bg-cyan-600 bg-opacity-20 backdrop-blur-sm flex justify-center items-center">
          <div className="relative max-w-screen-sm min-lg:h-fit max-sm:h-4/5 h-auto transform flex flex-col py-2 justify-start items-center overflow-x-hidden max-lg:overflow-y-scroll rounded-lg bg-white text-left shadow-lg transition-all sm:my-8 sm:w-full sm:max-w-lg">
            {isDeletingOpen && (
              <div className="flex w-full flex-col gap-2 justify-center items-center py-2 px-3">
                <p className="font-bold text-center pb-2">
                  Будут удалены следующие пользователи:
                </p>
                {selectedUsers?.map((user) => (
                  <p key={user}>{user}</p>
                ))}
                {user && (
                  <p>
                    {user.lastName} {user.firstName} {user.secondName}
                  </p>
                )}

                <div className="flex max-sm:flex-col gap-2 pt-3">
                  <Button
                    text="Удалить"
                    onClick={handleDeleteClick}
                    className="hover:bg-orange-600"
                  />
                  <Button
                    onClick={handleClose}
                    text="отмена"
                    className="hover:bg-orange-600"
                  />
                </div>
              </div>
            )}

            {isFormOpen && (
              <>
                <FormAvatar avatar={avatar} onClick={handleGalleryOpen} />
                <UserForm
                  clearTakenEmailError={() => setEmailIsTaken(false)}
                  initialValues={initialFormValues}
                  emailIsTaken={emailIsTaken ? EMAIL_ALREADY_TAKEN_MSG : false}
                  handleClose={handleClose}
                  onSubmit={handleSubmit}
                />
              </>
            )}

            {isGalleryOpen && (
              <Gallery
                defaultAvatar={avatar}
                images={catImages}
                onClick={handleImageClick}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}
