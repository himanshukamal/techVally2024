import Checkouttitle from "@/components/checkouttile";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Ordercompletecontent from "@/components/ordercompletecontent";

export default function ordercomplete() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Checkouttitle />
      </div>
      <Ordercompletecontent />
      <Footer />
    </div>
  );
}
