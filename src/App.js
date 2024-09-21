import React from 'react';
import Homepage from './components/Homepage';
import CelebrationDetails from './components/CelebrationDetails';
import ChurchHistory from './components/ChurchHistory';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import EventRegistration from './components/EventRegistration';
import PrayerRequests from './components/PrayerRequests';
import SocialMedia from './components/SocialMedia';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Homepage />
      <CelebrationDetails />
      <ChurchHistory />
      <Gallery />
      <Testimonials />
      {/* <EventRegistration /> */}
      <PrayerRequests />
      <SocialMedia />
      <Footer />
    </div>
  );
}

export default App;
