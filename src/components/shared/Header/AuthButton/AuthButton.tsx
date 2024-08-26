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

import { App_Name } from "@/constants";
import { logout, useCurrentUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hokks";

import { ChevronDown } from "lucide-react";



import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const AuthDropdown = () => {

  const user = useAppSelector(useCurrentUser);
  const dispatch=useAppDispatch()
 


  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logout successfully");
  };

  return (
    <>
      {user && user.role ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <MyAvatar url={user.email} alt="User Avatar" />
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
