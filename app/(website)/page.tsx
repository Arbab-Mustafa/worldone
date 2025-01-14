import { Hero } from "@/components/sections/hero";'''''''''''
import { OWCNotes } from "@/components/sections/owc-notes";
import OWCTokenInfo from "@/components/sections/owct";
import { QuickLinks } from "@/components/sections/quick-links";




export default async function HomePage() {
  return (
 

    <div className=" flex w-full  flex-col gap-20 py-24 overflow-x-clip">
      <div className="max-w-7xl ">
        <Hero />
        <QuickLinks />
        <OWCNotes />
        <OWCTokenInfo />
      </div>
    </div>


  );
}
