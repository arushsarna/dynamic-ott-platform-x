import Header from "../components/Header";
import Home from "../components/Home";
import * as cookie from "cookie";
export async function getServerSideProps(context) {
  const parsedCookies = cookie.parse(context.req.headers.cookie || "");
  const data = await fetch(`${process.env.HOST}/api/getContent`).then((t)=>t.json());
  const auth = await fetch(
    `${process.env.HOST}/api/auth?cookies=` + parsedCookies.JWT
  ).then((t) => t.json());

  if (auth.data == false) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }
  return {
    props: {data},
  };
}


export default function Main({ data }) {
  return (
    <div className="w-full">
      <Header />
      <div className="bg-[url(/home-background.png)] relative bg-no-repeat	bg-cover bg-fixed min-h-[calc(100vh_-_70px)] ">
        <Home data= {data}/>
      </div>
    </div>
  );
}
