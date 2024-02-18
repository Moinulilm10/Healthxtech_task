import { MdPriceCheck } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";
import { TbTruckDelivery, TbTruckReturn } from "react-icons/tb";

export const servicesData = [
  {
    icon: <TbTruckDelivery />,
    title: "Free Shipping",
    subTitle: "Minimum order $90.",
  },
  {
    icon: <RiCustomerService2Line />,
    title: "24/7 Support",
    subTitle: "Contact us 24 Hours",
  },
  {
    icon: <MdPriceCheck />,
    title: "Best Prices & offers",
    subTitle: "Order $100 or more",
  },
  {
    icon: <TbTruckReturn />,
    title: "Easy Returns",
    subTitle: "Within 30 Days",
  },
];
