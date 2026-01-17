import { faqs } from "@/data/homeData";
import Faq from "@/features/home/Faq";
import WorldMap from "@/components/WorldMap";

export default function FaqPage() {
  return (
    <>
      <Faq faqsData={faqs} />
      <WorldMap />
      <div className="h-24"></div>
    </>
  );
}
