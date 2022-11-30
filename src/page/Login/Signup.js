import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { setAuthToken } from "../../api/auth";
import loginIMg from "../../assets/login.png";
import PrimaryButton from "../../Components/Button/PrimaryButton";
import SmallSpinner from "../../Components/Spinner/SmallSpinner";
import { AuthContext } from "../../contexts/AuthProvider";

const Signup = () => {
  const [accuntType, setAccountType] = useState("user");
  const {
    createUser,
    updateUserProfile,
    verifyEmail,
    signInWithGoogle,
    loading,
    setLoading,
  } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handelSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const image = event.target.image.files[0];
    const email = event.target.email.value;
    const password = event.target.password.value;
    const accountType = accuntType;

    // console.log("zx ---->", name, email, password, accountType);

    const formData = new FormData();
    formData.append("image", image);

    // b44cfcd23ef7fd73c5884fdb49060a89
    const url = process.env.REACT_APP_imgbblink;

    fetch(url, { method: "POST", body: formData })
      .then((res) => res.json())
      .then((imgUrls) => {
        const imgUrl = imgUrls.data.display_url;
        //createUser
        createUser(email, password)
          .then((result) => {
            //updateUserProfile
            updateUserProfile(name, imgUrl).then(() => {
              setAuthToken(result, accountType);
              navigate(from, { replace: true });
            });
            // console.log(" result :>> ", result);
          })
          .catch((err) => {
            toast.error(err.message);
            setLoading(false);
            event.target.reset();
          });
      })
      .catch((err) => {
        toast.error(err.message);
        setLoading(false);
        event.target.reset();
      });
  };

  const handelSignInWithGoogle = () => {
    signInWithGoogle().then((result) => {
      setAuthToken(result, accuntType);
      navigate(from, { replace: true });
      console.log("Google user :>> ", result);
    });
  };

  return (
    <div className="flex justify-center items-end pt-0 gap-5">
      <div className="flex flex-col max-w-md px-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
        <div className="mb-1 text-center">
          <h1 className="my-1 text-4xl font-bold">Signup</h1>
          <p className="text-sm text-gray-400">Create a new account</p>
        </div>
        <form
          onSubmit={handelSubmit}
          noValidate=""
          action=""
          className="space-y-5 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-1">
            <div>
              <div className="w-full px-4 py-5">
                <fieldset>
                  <legend className="block mb-1 text-sm">
                    Creates a seller account
                  </legend>
                  <input
                    onChange={(event) => setAccountType(event.target.value)}
                    id="draft"
                    className="peer/draft w-4 h-4 mt-2"
                    type="radio"
                    value="seller"
                    name="seller"
                  />
                  <label
                    for="draft"
                    className="peer-checked/draft:text-secondary text-xl pl-2"
                  >
                    seller account
                  </label>

                  <div className="hidden peer-checked/draft:block">
                    Seller account selacted
                  </div>
                </fieldset>
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Enter Your Name Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <label htmlFor="image" className="block mb-2 text-sm">
                Select Image:
              </label>
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                required
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                required
                placeholder="*******"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:outline-green-500 text-gray-900"
              />
            </div>
          </div>
          <div className=" mt-0">
            <div>
              <PrimaryButton
                type="submit"
                classes="w-full px-8 py-3 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100"
              >
                {loading ? <SmallSpinner></SmallSpinner> : "Sign up"}
              </PrimaryButton>
            </div>
          </div>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Signup with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <button
            onClick={handelSignInWithGoogle}
            aria-label="Log in with Google"
            className="p-3 rounded-sm "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
          </button>
        </div>
        <p className="px-6 text-sm text-center text-gray-400">
          Already have an account yet?{" "}
          <Link
            to="/login"
            className="hover:underline text-green-700 hover:text-secondary font-semibold"
          >
            Sign In
          </Link>
          .
        </p>
      </div>
      <div>
        <img src={loginIMg} alt="" />
      </div>
    </div>
  );
};

export default Signup;
