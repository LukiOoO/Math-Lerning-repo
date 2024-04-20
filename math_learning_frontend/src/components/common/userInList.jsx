const UserInList = ({ nickname, score, rating }) => {
  return (
    <li className="li-users-list" key={nickname}>
      {nickname} - {score} ({rating})
    </li>
  );
};

export default UserInList;
