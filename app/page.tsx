import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
