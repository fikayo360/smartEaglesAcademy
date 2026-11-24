import { Navbar } from "./components/navbar"
import { AboutSection } from "./pages/about"
import { UpcomingActivities } from "./pages/activities"
import { ContactSection } from "./pages/contact"
import { Footer } from "./pages/footer"
import { Hero} from "./pages/home"
import { SportCategories } from "./pages/programs"
import { InternationalTours } from "./pages/tours"



function App() {

  return (
     <>
     <Navbar />
     <Hero />
     <AboutSection />
     <SportCategories />
     {/* <UpcomingActivities /> */}
     {/* <InternationalTours /> */}
     <ContactSection />
     <Footer />
    </>
  )
}

export default App


