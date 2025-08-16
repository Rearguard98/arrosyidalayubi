
import { DarkModeToggle } from "@/components/darkmode-toggle";
import { NavigationMenuFront } from "@/components/nav-front";
export default function Home() {
  return (
    <div className="flex items-center w-full flex-col-2 justify-between p-24">
      <header>
        <div className=""><NavigationMenuFront /></div>
        <div className=""><DarkModeToggle /></div>
      </header>
    </div>
  );
}