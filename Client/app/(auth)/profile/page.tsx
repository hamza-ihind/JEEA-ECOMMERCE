import { UserProfile } from "@clerk/nextjs";
 
const UserProfilePage = () => (
    <div className="flex justify-center p-20">
     <UserProfile />
    </div >
);
 
export default UserProfilePage;