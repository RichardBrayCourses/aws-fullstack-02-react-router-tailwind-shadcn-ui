import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default () => {
  const { userInfo, loginUser, logoutUser } = useAuth();

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Profile</h1>
      <div className="space-y-6">
        <Card>
          <CardContent className="p-6 text-center space-y-4">
            {!userInfo?.isLoggedIn ? (
              <p className="text-muted-foreground">Click below to log in.</p>
            ) : (
              <p>
                You are logged in as{" "}
                <strong>{userInfo?.email || "User"}</strong>.
              </p>
            )}
          </CardContent>
        </Card>
        {userInfo?.isLoggedIn && (
          <Card>
            <CardHeader>
              <CardTitle>User Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-left wrap-break-word">
              <p className="text-muted-foreground">
                <span className="font-medium">Email:</span>{" "}
                {userInfo?.email || "N/A"}
              </p>
            </CardContent>
          </Card>
        )}
        <div className="text-center">
          <Button
            onClick={() => (userInfo?.isLoggedIn ? logoutUser() : loginUser())}
          >
            {userInfo?.isLoggedIn ? "Logout" : "Login"}
          </Button>
        </div>
      </div>
    </div>
  );
};
