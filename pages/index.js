import Layout from "../src/component/Layout.jsx";
import PageOne from "../src/component/PageOne.jsx";
import PageTwo from "../src/component/PageTwo.jsx";

export default function Home() {
  return (
    <div className="bg-black">
      <Layout>
        <PageOne />
      </Layout>
      <div className="border-[1px] border-white" />
      <Layout>
        <PageTwo />
      </Layout>
    </div>
  );
}
