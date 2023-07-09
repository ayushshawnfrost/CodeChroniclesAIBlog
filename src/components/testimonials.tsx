// import Image from "next/image";
import axios from "axios";
import React from "react";
import { Auth } from "aws-amplify";

interface Testimonial {
  blog_id: number;
  category: string;
  blog_title: string;
  description: any[];
  blog_author: string;
}

export default function Testimonials() {
  const [post, setPost] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        // const authToken = (await Auth.currentSession())
        //   .getIdToken()
        //   .getJwtToken();
        // const myInit = {
        //   headers: {
        //     Authorization: `Bearer ${authToken}`,
        //   },
        // };
        // localStorage.setItem("auth",authToken);
        const response = await axios.get(
          "*******api**gateway****url****",
          // myInit
        );
        setPost(response.data.Items);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const ItemList = (descArray: any[]) => {
    return descArray.map((item: any, index: number) => (
      <div>
        <svg
          className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
          viewBox="0 0 12 12"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
        </svg>{" "}
        {item}
        <br></br>
        <br></br>
      </div>
    ));
  };

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">***************</h2>
            {/* <p className="text-xl text-gray-400">
              Vitae aliquet nec ullamcorper sit amet risus nullam eget felis
              semper quis lectus nulla at volutpat diam ut venenatis tellus—in
              ornare.
            </p> */}
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8  lg:gap-6 items-start lg:max-w-none">
            {/* 1st testimonial */}
            {post.length > 0 &&
              post.map((postItem: any) => (
                <div
                  className="flex flex-col h-full p-6 bg-gray-800"
                  data-aos="fade-up"
                >
                  <div>
                    <div className="relative inline-flex flex-col mb-4">
                      {/* <Image className="rounded-full" src={TestimonialImage01} width={48} height={48} alt="Testimonial 01" /> */}
                      <div className="font-architects-daughter text-xl text-purple-600 mb-2">
                        {postItem.category}
                      </div>
                      {/* <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                    </svg> */}
                      <h3 className="h3 mb-3"> {postItem.blog_title}</h3>
                    </div>
                  </div>
                  <blockquote className="text-lg text-gray-400 grow">
                    {ItemList(postItem.description)}
                  </blockquote>
                  <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                    <cite className="text-gray-200 not-italic">Author:</cite> -{" "}
                    <a
                      className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"
                      href="#0"
                    >
                      {postItem.blog_author}
                    </a>
                  </div>
                </div>
              ))}
          </div>
          <div className="max-w-3xl mx-auto text-center pt-12 md:pb-20">
            <h2 className="h2 mb-4">***************</h2>
            {/* <p className="text-xl text-gray-400">
              Vitae aliquet nec ullamcorper sit amet risus nullam eget felis
              semper quis lectus nulla at volutpat diam ut venenatis tellus—in
              ornare.
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
}
