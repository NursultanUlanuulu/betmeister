import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '../components/Header';
import Footer from '../components/Footer';
import Block7 from '../components/Block7'

export default function Layout() {
  const location = useLocation();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet />
      
			<Block7/>
			</main>
      <Footer />
    </div>
  );
}