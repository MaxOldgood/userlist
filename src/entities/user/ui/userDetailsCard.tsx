import { User } from "../model/types";

interface UserDetailsCardProps {
  user: User | undefined;
}

export function UserDetailsCard({ user }: UserDetailsCardProps) {
  const { avatar, firstName, secondName, lastName, about, email } = user || {};

  return (
    <div className="container bg-white p-10 rounded-2xl flex justify-start max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:mx-2 gap-24 max-sm:gap-8 items-start max-w-screen-xl mx-auto px-4">
      <div className="text-center">
        <div className="w-64 h-64  place-self-center justify-center items-center rounded-full flex-shrink-0 overflow-hidden bg-gray-300">
          <img
            src={avatar}
            alt="avatar"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div>
        <div className="py-2">
          <h3 className="font-bold text-xl flex justify-start items-start text-gray-800 dark:text-white mb-1">
            {`${lastName} ${firstName} ${secondName}`}
          </h3>
          <div className="inline-flex text-gray-700 dark:text-gray-300 items-center">
            {email}
          </div>
          <h3 className="font-bold text-xl pt-5 flex justify-start items-start text-gray-800 dark:text-white mb-1">
            О Себе:
          </h3>
          <div className="inline-flex text-gray-700 dark:text-gray-300 items-center">
            {about}
          </div>
        </div>
      </div>
    </div>
  );
}
