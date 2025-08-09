
import ProfileCard from "../Profile_feature/profile";
import {assets} from "../assets/assets"; 

const Profile = () => {
    return(
        <div className="mr-10">
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
                innerGradient={"linear-gradient(80deg,#3484 0%,#71C4FF44 100%)"}
                onContactClick={() => console.log('Contact clicked')}
            />
        </div>
    )
};

 export default Profile;

