import {useState} from 'react';import {MotionConfig} from 'framer-motion';
import Navbar from './components/layout/Navbar';import Footer from './components/layout/Footer';
import {Hero,HowItWorks,About,Contact,FAQ} from './components/home/Sections';
import ServicesSection from './components/services/ServicesSection';import AppointmentModal from './components/appointment/AppointmentModal';
import {FloatingWhatsApp} from './components/common/WhatsAppButton';
export default function App(){
  const [book,setBook]=useState(null);const onBook=(serviceId='')=>setBook({serviceId});
  return <MotionConfig reducedMotion="user"><Navbar onBook={onBook}/><main><Hero onBook={onBook}/><ServicesSection onBook={onBook}/><HowItWorks/><About onBook={onBook}/><Contact onBook={onBook}/><FAQ/></main><Footer/><FloatingWhatsApp/>
    {book&&<AppointmentModal initialService={book.serviceId} onClose={()=>setBook(null)}/>}</MotionConfig>;
}
