import Home from "../(default)/page";
import Header from "../../components/ui/header";
import Banner from "../../components/banner";
import Footer from "../../components/ui/footer";
export default function Landing() {
  return (
    <>
      <main className="grow">
        <Header />
        <Home />
        <Footer />
      </main>
      {/* <Banner /> */}
    </>
  );
}
