
import ProfileCard from "../Profile_feature/profile";
import {assets} from "../assets/assets"; 

const Profile = () => {
    return(
        <ProfileCard
            name="Tyrone Mrenje"
            title="Software Engineer"
            handle="tyrone_mrenje"
            status="Online"
            contactText="Contact Me"
            iconUrl={assets.profile_icon}
            avatarUrl={assets.profile_icon}
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            innerGradient={"linear-gradient(50deg,#3484 0%,#71C4FF44 100%)"}
            onContactClick={() => console.log('Contact clicked')}
        />
    )
};

 export default Profile;

