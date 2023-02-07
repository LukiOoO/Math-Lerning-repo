const UserInList = ({ nickname, score, rating }) => {
  return (
    <li key={nickname}>
      {nickname} - {score} ({rating})
    </li>
  );
};

export default UserInList;
