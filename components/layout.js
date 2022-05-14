import Footer from './footer';
import Header from './header';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col h-screen bg-clanders-white">
      <Header></Header>
      <main className="flex-grow">{children}</main>
      <Footer></Footer>
    </div>
  );
}
