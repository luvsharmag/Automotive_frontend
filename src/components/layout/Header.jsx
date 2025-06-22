import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link, useLocation } from "react-router-dom";
import { LogIn, ChevronDown, User } from "lucide-react";
import { cn } from "@/lib/utils";
import BorderIcon from "../../assets/Border.png";
import { useAuth, useAuthWithNavigation } from "@/context/AuthContext";

const Header = () => {
  const { token } = useAuth();
  const { logout } = useAuthWithNavigation();
  console.log("object", token);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <header
      className={cn(
        "w-full sticky top-0 z-50 transition-all duration-300",
        isHomePage ? "bg-transparent" : "bg-white/80 backdrop-blur-md"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <Link
          to="/"
          className={cn(
            "text-2xl font-normalt font-sans",
            isHomePage ? "text-white/80" : "text-gray-800"
          )}
        >
          BOXCARS
        </Link>

        <div className="flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList className="hidden md:flex gap-4">
              {[
                { name: "Home", path: "/" },
                { name: "Listing", path: "/vehicles" },
                { name: "Blog", path: "/blog" },
                { name: "Pages", path: "/pages" },
                { name: "About", path: "/about" },
                { name: "Contact", path: "/inquiry" },
              ].map((item) => (
                <NavigationMenuItem key={item.name}>
                  <Link
                    to={item.path}
                    className={cn(
                      "text-sm font-medium hover:text-primary transition-colors duration-300 flex items-center gap-1",
                      isHomePage ? "text-white/80" : "text-gray-700"
                    )}
                  >
                    <NavigationMenuLink className={cn("px-2 py-1")}>
                      {item.name}
                    </NavigationMenuLink>
                    <ChevronDown className="w-3 h-3 mt-[1px]" />
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center space-x-2">
            {token ? (
              <>
                <Button
                  variant="ghost"
                  className={cn(
                    "rounded-full px-4 py-2 bg-transparent transition duration-300",
                    isHomePage ? "text-white" : "text-gray-700"
                  )}
                  onClick={logout}
                  asChild
                >
                  <Link to="/profile" className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>logout</span>
                  </Link>
                </Button>
              </>
            ) : (
              <Button
                variant="ghost"
                className={cn(
                  "rounded-full px-4 py-2 bg-transparent transition duration-300",
                  isHomePage ? "text-white" : "text-gray-700"
                )}
                asChild
              >
                <Link to="/login" className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span>Sign In</span>
                </Link>
              </Button>
            )}

            <Button
              variant="outline"
              className={cn(
                "rounded-full px-4 py-2 border transition duration-300",
                isHomePage
                  ? "text-black border-white hover:bg-white hover:text-primary"
                  : "border-gray-300 hover:bg-gray-100 text-gray-800"
              )}
              asChild
            >
              <Link to="/inquiry">Submit Listing</Link>
            </Button>
          </div>
        </div>
      </div>
      {/* <Separator className="bg-white/30" /> */}
    </header>
  );
};

export default Header;
