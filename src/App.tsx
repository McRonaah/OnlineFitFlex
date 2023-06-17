import Navbar from "@/scenes/navbar";

import { useEffect, useState } from "react";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );

  return (
    <>
      <div className="app bg-gray-20">
      <Navbar
        // isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      {/* <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} /> */}
      </div>
    </>
  )
}

export default App;
