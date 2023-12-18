import Cartcontent from "@/components/cartcontent";
import Carttitle from "@/components/carttitle";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function cartpage() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Carttitle />
      </div>
      <div>
        <Cartcontent />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
