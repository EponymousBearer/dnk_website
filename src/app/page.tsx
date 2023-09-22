import Hero from "@/views/Hero";
import ProductList from "@/views/ProductList";
import LogoRotator from "@/components/LogoRotator";
import Header from "@/components/layout/Header";

export default async function Home() {
  return (
    <section className="">
      <Header></Header>
        <Hero></Hero>
        <LogoRotator/>
        <ProductList></ProductList>
    </section>
  );
}
