import Tabs from "../atoms/Tabs";
import TotalUserData from "../molecules/TotalUserData";
import UserWiseTotalData from "../molecules/UserWiseTotalData";

const UserDetails = () => {
  return (
    <Tabs>
      <div label="Cummulitive">
        <UserWiseTotalData />
      </div>
      <div label="Individual">
        <TotalUserData />
      </div>
    </Tabs>
  );
};

export default UserDetails;
