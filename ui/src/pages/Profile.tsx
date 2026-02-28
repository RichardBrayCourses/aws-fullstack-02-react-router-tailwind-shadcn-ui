import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";

export default () => {
  const { user, isLoggedIn, login, logout } = useAuth();

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Profile</h1>
      <div className="space-y-6">
        <Card>
          <CardContent className="p-6 text-center space-y-4">
            {!isLoggedIn ? (
              <p className="text-muted-foreground">Click below to log in.</p>
            ) : (
              <p>
                You are logged in as <strong>{user?.email || "User"}</strong>.
              </p>
            )}
          </CardContent>
        </Card>
        {isLoggedIn && (
          <Card>
            <CardHeader>
              <CardTitle>User Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-left wrap-break-word">
              <p className="text-muted-foreground">
                <span className="font-medium">Email:</span>{" "}
                {user?.email || "N/A"}
              </p>
            </CardContent>
          </Card>
        )}
        <div className="text-center">
          <Button onClick={() => (isLoggedIn ? logout() : login())}>
            {isLoggedIn ? "Logout" : "Login"}
          </Button>
        </div>
      </div>
    </div>
  );
};
