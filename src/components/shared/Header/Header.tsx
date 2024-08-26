// import { useState, useEffect } from "react";

// import { TextAlignCenterIcon } from "@radix-ui/react-icons";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import { Button } from "@/components/ui/button";

// import assets from "@/assets";

// import { motion } from "framer-motion";
// import { Link, Navigate, NavLink } from "react-router-dom";
// import AuthDropdown from "./AuthButton/AuthButton";
// import { cn } from "@/lib/utils";
// import { Input } from "@/components/ui/input";

// const Header = () => {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const handleSearch = (value: any) => {
//    console.log(value);
   
//   };

//   const menuItems = [
//     { label: "Home", path: "/", show: true },
//     { label: "Flats", path: "/flats", show: true },
//     { label: "About Us", path: "/about-us", show: true },
//   ];

//   return (
//     <div
//       className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 h-16 ${
//         scrolled
//           ? "shadow-md border-b bg-background/90 backdrop-blur-lg"
//           : "bg-background/70 border-b"
//       }`}
//     >
//       <div className="container mx-auto md:px-4">
//         <header className="flex h-16 items-center justify-between gap-6">
//           <div className="flex items-center">
//             <Sheet>
//               <SheetTrigger asChild>
//                 <Button variant="link" size="icon" className="lg:hidden">
//                   <TextAlignCenterIcon className="h-6 w-6" />
//                   <span className="sr-only">Toggle Navigation menu</span>
//                 </Button>
//               </SheetTrigger>
//               <SheetContent side="left">
//                 <Link
//                   to="/"
//                   className="flex items-center gap-2 font-semibold text-foreground"
//                 >
//                   <img
//                     src={assets.images.logo}
//                     width={30}
//                     height={30}
//                     alt="logo"
//                   />
//                   <span className="tracking-wide">
//                     DomainSync
//                     <span className="text-primary text-xl">N</span>est
//                   </span>
//                 </Link>
//                 <div className="grid gap-2 py-6">
//                   {menuItems.map((menuItem, index) =>
//                     menuItem.show ? (
//                       <NavLink
//                         key={index}
//                         to={menuItem.path}
//                         className={({ isActive }) =>
//                           cn(
//                             "flex items-center justify-between gap-3 px-3 py-2 transition-all",
//                             isActive
//                               ? "text-primary bg-muted"
//                               : "text-muted-foreground hover:text-primary"
//                           )
//                         }
//                       >
//                         {menuItem.label}
//                       </NavLink>
//                     ) : null
//                   )}
//                 </div>
//               </SheetContent>
//             </Sheet>

//             <motion.div
//               className="hidden md:flex"
//               whileHover={{ x: 10 }}
//               transition={{ type: "spring", stiffness: 200, damping: 20 }}
//             >
//               <Link
//                 to="/"
//                 className="flex items-center gap-2 font-semibold text-foreground"
//               >
//                 {/* <Package2 className="h-6 w-6" /> */}
//                 <img
//                   src={assets.images.logo}
//                   width={30}
//                   height={30}
//                   alt="logo"
//                 />
//                 <span className="tracking-wide">
//                   Domain<span className="text-primary text-xl">S</span>ync
//                 </span>
//               </Link>
//             </motion.div>
//           </div>

//           <nav className="hidden lg:flex gap-6">
//             {menuItems.map((menuItem, index) =>
//               menuItem.show ? (
//                 <NavLink
//                   key={index}
//                   to={menuItem.path}
//                   className={({ isActive }) =>
//                     cn(
//                       "flex items-center justify-between gap-3 px-3 py-2 transition-all",
//                       isActive
//                         ? "text-primary bg-muted"
//                         : "text-muted-foreground hover:text-primary"
//                     )
//                   }
//                 >
//                   {menuItem.label}
//                 </NavLink>
//               ) : null
//             )}
//           </nav>
//           <div className="max-w-lg flex-1 justify-center items-center">
//             <Input
//               type="search"
//               placeholder="Search your product ..."
//               onChange={handleSearch}

//               className={cn("rounded")}
//             />
//           </div>
//           <div className="flex items-center gap-2">
//             <AuthDropdown />
//           </div>
//         </header>
//       </div>
//     </div>
//   );
// };

// export default Header;



import { useState, useEffect } from "react";
import { TextAlignCenterIcon } from "@radix-ui/react-icons";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import assets from "@/assets";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import AuthDropdown from "./AuthButton/AuthButton";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue.trim()) {
      console.log("Searching for:", searchValue);
      // Perform the search action, e.g., navigate to a search results page or call an API
    }
  };

  const menuItems = [
    { label: "Home", path: "/", show: true },
    { label: "Flats", path: "/flats", show: true },
    { label: "About Us", path: "/about-us", show: true },
  ];

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 h-16 ${
        scrolled
          ? "shadow-md border-b bg-background/90 backdrop-blur-lg"
          : "bg-background/70 border-b"
      }`}
    >
      <div className="container mx-auto md:px-4">
        <header className="flex h-16 items-center justify-between gap-6">
          <div className="flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="link" size="icon" className="lg:hidden">
                  <TextAlignCenterIcon className="h-6 w-6" />
                  <span className="sr-only">Toggle Navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <Link
                  to="/"
                  className="flex items-center gap-2 font-semibold text-foreground"
                >
                  <img
                    src={assets.images.logo}
                    width={30}
                    height={30}
                    alt="logo"
                  />
                  <span className="tracking-wide">
                    DomainSync
                    <span className="text-primary text-xl">N</span>est
                  </span>
                </Link>
                <div className="grid gap-2 py-6">
                  {menuItems.map(
                    (menuItem, index) =>
                      menuItem.show && (
                        <NavLink
                          key={index}
                          to={menuItem.path}
                          className={({ isActive }) =>
                            cn(
                              "flex items-center justify-between gap-3 px-3 py-2 transition-all",
                              isActive
                                ? "text-primary bg-muted"
                                : "text-muted-foreground hover:text-primary"
                            )
                          }
                        >
                          {menuItem.label}
                        </NavLink>
                      )
                  )}
                </div>
              </SheetContent>
            </Sheet>

            <motion.div
              className="hidden md:flex"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <Link
                to="/"
                className="flex items-center gap-2 font-semibold text-foreground"
              >
                <img
                  src={assets.images.logo}
                  width={30}
                  height={30}
                  alt="logo"
                />
                <span className="tracking-wide">
                  Domain<span className="text-primary text-xl">S</span>ync
                </span>
              </Link>
            </motion.div>
          </div>

          <nav className="hidden lg:flex gap-6">
            {menuItems.map(
              (menuItem, index) =>
                menuItem.show && (
                  <NavLink
                    key={index}
                    to={menuItem.path}
                    className={({ isActive }) =>
                      cn(
                        "flex items-center justify-between gap-3 px-3 py-2 transition-all",
                        isActive
                          ? "text-primary bg-muted"
                          : "text-muted-foreground hover:text-primary"
                      )
                    }
                  >
                    {menuItem.label}
                  </NavLink>
                )
            )}
          </nav>

          <form
            className="max-w-lg flex-1 justify-center items-center"
            onSubmit={handleSearchSubmit}
          >
            <Input
              type="search"
              placeholder="Search users..."
              value={searchValue}
              onChange={handleSearchChange}
              className={cn(
                "focus:border-none",
              
              )}
            />
          </form>

          <div className="flex items-center gap-2">
            <AuthDropdown />
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;

