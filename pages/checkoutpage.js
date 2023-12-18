import Checkout from "@/components/checkout";
import Checkouttitle from "@/components/checkouttile";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Ordersummary from "@/components/ordersummary";
import Placeorder from "@/components/placeorder";

export default function checkoutpage() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Checkouttitle />
      </div>
      <div className="flex flex-col lg:flex-row justify-center mx-auto">
        <Checkout />
        <Ordersummary />
      </div>

      <div>
        <Placeorder />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
