import { useAuth } from "@/contexts/AuthContext";

export default function Profile() {
  const { isLoggedIn } = useAuth();

  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Profile</h1>
        <p className="mt-4 text-slate-300">
          This is the profile page. Same layout, different route.
        </p>
        <p className="mt-2 text-slate-400">
          You are {isLoggedIn ? "logged in" : "logged out"}.
        </p>
      </div>
    </div>
  );
}
