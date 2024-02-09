import { DrawerMenu, NavMenu } from ".";

export const NavBar = () => {
  return (
    <div className="flex justify-end p-4">
      <DrawerMenu />
      <NavMenu />
    </div>
  );
};
