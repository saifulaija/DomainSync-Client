"use client";
import assets from "@/assets";
import { MyAvatar } from "@/components/shadcn/MyAvatar";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/components/ui/use-toast";
import { App_Name } from "@/constants";

import { logoutUser } from "@/services/actions/logoutUser";
import { getUserInfo } from "@/services/authServics";
import { ChevronDown } from "lucide-react";


import { useRouter } from "next/navigation";
import { Link } from "react-router-dom";

const AuthDropdown = () => {
  const { toast } = useToast();
  const user = getUserInfo();

  const router = useRouter();
  const handleLogout = () => {
    logoutUser(router);
    toast({ title: "Logout", description: "User logged out successfully" });
  };

  return (
    <>
      {user && user.userId ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <MyAvatar url={user.profilePhoto} alt="User Avatar" />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <Link to={`/dashboard/${user.role}/profile`}>
              <DropdownMenuItem>Profile</DropdownMenuItem>
            </Link>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Link to="/login">
          <div className="flex items-center gap-1">
            <img
              src={assets.images.profile}
              alt={App_Name}
              width={40}
              height={40}
              className="rounded"
            />
            <ChevronDown size={32} color="#898080" />
          </div>
        </Link>
      )}
    </>
  );
};

export default AuthDropdown;
