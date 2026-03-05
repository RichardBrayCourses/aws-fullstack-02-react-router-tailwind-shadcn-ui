import { useAuth } from "@/context/AuthContext";

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="w-full max-w-5xl mx-auto pt-0 px-4 pb-4 flex-1 flex flex-col justify-center min-h-0">
      <div className="w-full rounded-lg border bg-card p-6 shadow-sm">
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
  );
};

export default Profile;
