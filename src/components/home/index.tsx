import { getHome } from "./logic/getHome";
import HomeClient from "./component/HomeClient";


export default async function HomeComponent() {
  const { title, CVLink, } = await getHome();

  return (
    <HomeClient title={title} CVLink={CVLink}  />
  );
}
