import Footer from './footer';
import Navbar from './navbar';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col h-screen">
      <Navbar></Navbar>
      <main className="flex-grow">{children}</main>
      <Footer></Footer>
    </div>
  );
}
