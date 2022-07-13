import Header from "../components/Header";
import Home from "../components/Home";
import * as cookie from "cookie";
export async function getServerSideProps(context) {
  const parsedCookies = cookie.parse(context.req.headers.cookie || "");
  console.log(parsedCookies);
  console.log(process.env.NEXT_PUBLIC_VERCEL_URL);
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
    props: {},
  };
}

export default function Main({ auth }) {
  console.log(auth);
  return (
    <div className="w-full">
      <Header />
      <div className="bg-[url(/home-background.png)] relative bg-no-repeat	bg-cover bg-fixed min-h-[calc(100vh_-_70px)] ">
        <Home />
      </div>
    </div>
  );
}
