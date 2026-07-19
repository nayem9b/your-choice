import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import ProductSection from "@/components/ProductSection";
import CustomDesignBanner from "@/components/CustomDesignBanner";
import GirlSquadBanner from "@/components/GirlSquadBanner";
import InstagramFeed from "@/components/InstagramFeed";
import FAQAccordion from "@/components/FAQAccordion";
import ValueProps from "@/components/ValueProps";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import {
  animeJerseys,
  acidWashCollection,
  bestSellers,
  oversizedTees,
  girlSquad,
} from "@/data/products";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main className="flex-1">
        <HeroBanner />

        <ProductSection
          title="Anime Jerseys"
          products={animeJerseys}
        />

        <ProductSection
          title="Acid Wash Drop Collection"
          products={acidWashCollection}
        />

        <CustomDesignBanner />

        <ProductSection
          title="Best Sellers"
          products={bestSellers}
        />

        <ProductSection
          title="Oversized T-Shirts & Gaming"
          products={oversizedTees}
        />

        <GirlSquadBanner products={girlSquad} />

        <InstagramFeed />

        <FAQAccordion />

        <ValueProps />

        <Newsletter />
      </main>

      <Footer />
    </>
  );
}
