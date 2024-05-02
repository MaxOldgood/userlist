import moment from "moment";
import { User, UserCard } from "../../entities/user";

interface UserListProps {
  userList: User[];
}

export function UserList({ userList }: UserListProps) {
  function compareCreationDates(a: User, b: User) {
    const dateA = moment(a.creationDate, "DD.MM.YY HH:mm:ss");
    const dateB = moment(b.creationDate, "DD.MM.YY HH:mm:ss");
    return dateB.diff(dateA);
  }
  const sortedUserList = [...userList].sort(compareCreationDates);

  return (
    <section className="py-5 md:py-10">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 auto-cols-max auto-rows-fr md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {sortedUserList.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </div>
    </section>
  );
}
