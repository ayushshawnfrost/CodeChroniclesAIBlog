
import Hero from "../../components/hero";
import Features from "../../components/features";
import Newsletter from "../../components/newsletter";
import Zigzag from "../../components/zigzag";
import Testimonials from "../../components/testimonials";
import { Auth } from "aws-amplify";

export default function Home() {
  // const [post, setPost] = React.useState([]);
  // const [isLoading, setIsLoading] = React.useState(true);

  // React.useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const authToken = (await Auth.currentSession())
  //         .getIdToken()
  //         .getJwtToken();
  //       const myInit = {
  //         headers: {
  //           Authorization: `Bearer ${authToken}`,
  //         },
  //       };

  //       // Make the API GET call
  //       const response = await axios.get(
  //         "https://q92j60kw1f.execute-api.us-east-2.amazonaws.com/dev/blogs",
  //         myInit
  //       );
  //       setPost(response.data.Items);
  //       setIsLoading(false);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <>
      <Hero />
      <Features />
      {/* <Zigzag /> */}
      <Testimonials />
      {/* <Newsletter /> */}
    </>
  );
}
