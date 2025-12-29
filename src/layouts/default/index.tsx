import Menu from "@/layouts/default/menu";
import Main from "@/layouts/default/main";
import Header from "@/layouts/default/header";
import Footer from "@/layouts/default/footer";

export default function DefaultLayout() {
  return <>
    <div className="default-layout ">
      <Menu></Menu>
      <div className="right-layout relative w-full min-h-screen flex flex-col transition-[padding] duration-300 ease-in-out"
      style={{
        paddingLeft: "var(--layout-menu-aside-width)",
      }}
      >
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </div>
    </div>

  </>
}