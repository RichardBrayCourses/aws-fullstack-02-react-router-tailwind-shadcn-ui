import { useAuth } from "@/context/AuthContext";

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="flex-1">
      <div className="w-full max-w-5xl mx-auto px-4">
        <div className="bg-card rounded-lg border shadow-sm p-6">
          <p className="text-sm text-muted-foreground mb-1">Status</p>
          <p className="text-lg font-medium mb-4">
            {user.isLoggedIn ? "Logged in" : "Logged out"}
          </p>
          {user.isLoggedIn && user.email && (
            <>
              <p className="text-sm text-muted-foreground mb-1">Email</p>
              <p className="text-lg">{user.email}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
