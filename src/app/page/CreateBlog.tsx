import { useState } from "react";
import * as React from "react";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { Auth } from "aws-amplify";
import axios from "axios";
import { Link } from "react-router-dom";
import MobileMenu from "../../components/ui/mobile-menu";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";


const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Landing() {
  const [formData, setFormData] = useState({
    blog_title: "",
    blog_author: "",
    category: "",
    description: ["", "", "", "", ""],
    blog_id: Math.floor(Math.random() * 1000000),
  });
  const [open, setOpen] = React.useState(false);
  const [alertType, setAlertType] = React.useState(false);
  const [alertMessage, setAlertMessage] = React.useState("");

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    if (name === "description") {
      const index = e.target.dataset.index;
      const updatedDescription = [...formData.description];
      updatedDescription[index] = value;
      setFormData((prevData) => ({
        ...prevData,
        description: updatedDescription,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Perform further actions with the form data
    try {
      const authToken = (await Auth.currentSession())
        .getIdToken()
        .getJwtToken();
      const myInit = {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      };

      const response = await axios.post(
        "https://q92j60kw1f.execute-api.us-east-2.amazonaws.com/dev/blogs",
        formData,
        myInit
      );
      setAlertType(true);
      setAlertMessage("Article added Successfully!");
      setOpen(true);
      console.log("Post request successful:", response.data);
    } catch (error) {
      console.error("Error posting data:", error);
      setAlertType(false);
      setAlertMessage("Error posting data");
      setOpen(true);
      // Handle error
    }
  };

  const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  return (
    <>
      <header className="absolute w-full z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-20">
            {/* Site branding */}

            {/* Desktop navigation */}
            <nav className="hidden md:flex md:grow">
              {/* Desktop sign in links */}
              <ul className="flex grow justify-end flex-wrap items-center">
                <li>
                  <Link
                    to="/"
                    className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                  >
                    Go back!
                  </Link>
                </li>
                <li>
                  {/* <Link href="/signup" className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3">
                  Sign up
                </Link> */}
                </li>
              </ul>
            </nav>
            <div className="flex items-center justify-right shrink-0 mr-4">
              <MobileMenu />
              {/* Logo */}
              {/* <svg className="w-8 h-8 fill-current text-purple-600" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path d="M31.952 14.751a260.51 260.51 0 00-4.359-4.407C23.932 6.734 20.16 3.182 16.171 0c1.634.017 3.21.28 4.692.751 3.487 3.114 6.846 6.398 10.163 9.737.493 1.346.811 2.776.926 4.262zm-1.388 7.883c-2.496-2.597-5.051-5.12-7.737-7.471-3.706-3.246-10.693-9.81-15.736-7.418-4.552 2.158-4.717 10.543-4.96 16.238A15.926 15.926 0 010 16C0 9.799 3.528 4.421 8.686 1.766c1.82.593 3.593 1.675 5.038 2.587 6.569 4.14 12.29 9.71 17.792 15.57-.237.94-.557 1.846-.952 2.711zm-4.505 5.81a56.161 56.161 0 00-1.007-.823c-2.574-2.054-6.087-4.805-9.394-4.044-3.022.695-4.264 4.267-4.97 7.52a15.945 15.945 0 01-3.665-1.85c.366-3.242.89-6.675 2.405-9.364 2.315-4.107 6.287-3.072 9.613-1.132 3.36 1.96 6.417 4.572 9.313 7.417a16.097 16.097 0 01-2.295 2.275z" />
              </svg> */}
            </div>
          </div>
        </div>
      </header>
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20 border-t border-gray-800">
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h2 className="h2 mb-4">Create an Article!</h2>
            </div>

            <blockquote className="text-lg text-gray-400 grow">
              <div className="flex justify-center items-center ">
                <div className="max-w-2xl w-full bg-gray-800 p-6 rounded-lg shadow-md">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label
                        htmlFor="blog_title"
                        className="block text-sm font-medium text-white"
                      >
                        Title:
                      </label>
                      <input
                        type="text"
                        id="blog_title"
                        name="blog_title"
                        value={formData.blog_title}
                        onChange={handleChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="blog_author"
                        className="block text-sm font-medium text-white"
                      >
                        Author Name:
                      </label>
                      <input
                        type="text"
                        id="blog_author"
                        name="blog_author"
                        value={formData.blog_author}
                        onChange={handleChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="category"
                        className="block text-sm font-medium text-white"
                      >
                        Category:
                      </label>
                      <input
                        type="text"
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="description"
                        className="block text-sm font-medium text-white"
                      >
                        Description:
                      </label>
                      {[1, 2, 3, 4, 5].map((index) => (
                        <input
                          key={index}
                          type="text"
                          name="description"
                          data-index={index - 1}
                          value={formData.description[index - 1]}
                          onChange={handleChange}
                          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      ))}
                    </div>
                    <div className=" flex justify-center mt-6">
                      <button
                        type="submit"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:text-purple-600"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </blockquote>
            <div className="text-white font-medium mt-6 pt-5 border-t border-white"></div>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert
                onClose={handleClose}
                severity={alertType ? "success" : "error"}
                sx={{ width: "100%" }}
              >
                {alertMessage}
              </Alert>
            </Snackbar>
          </div>
        </div>
      </section>
    </>
  );
}
export default withAuthenticator(Landing);
