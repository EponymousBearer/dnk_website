import Hero from "@/views/Hero";
import ProductList from "@/views/ProductList";
import LogoRotator from "@/components/LogoRotator";

export default async function Home() {
  return (
    <section className="">
        <Hero></Hero>
        <LogoRotator/>
        <ProductList></ProductList>
    </section>
  );
}
