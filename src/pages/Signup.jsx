import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import  {signup} from "../Redux/authSlice";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { message, status} = useSelector((state) => state.auth);
  const [countdown, setCountdown] = useState(7);

  useEffect(() => {
    if(status === "succeeded") {
      const timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown -1);
      }, 1000);
      const redirectTimeout = setTimeout(() => {
        navigate("/login");
      }, countdown * 1000);
      return () => {
        clearInterval(timer);
        clearTimeout(redirectTimeout);
      };
    }
  }, [status, navigate, countdown]);

  const formik = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      email: "",
      password: "",
      address: "",
      city: "",
      state: "",
      zipcode: "",
    },
    validationSchema: yup.object({
      fname: yup.string().required("Enter your first name"),
      lname: yup.string().required("Enter your last name"),
      email: yup
        .string()
        .required("Enter your email")
        .email("Enter a valid email"),
      password: yup.string().required("Enter password").min(8,"Password must be at least 8 characters long"),
      address: yup.string().required("Enter your street address"),
      city: yup.string().required("Enter your city"),
      state: yup.string().required("Select your state"),
      zipcode: yup
        .number()
        .required("Enter your zipcode")
        .min(10000, "Enter a valid zipcode")
        .max(99999, "Enter a valid zipcode"),
    }),
    onSubmit: async (values, {resetForm, setStatus}) => {
      try {
        const result = await dispatch(signup(values));
        if (signup.fulfilled.match(result)) {
          resetForm();
        } else {
          setStatus(result.payload);
        }
      } catch (error) {
        console.error("Signup error:", error);
        setStatus("An uexpected error occured!");
      }
    }
  });
  return (
    <section className="p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 container mx-auto shadow-2xl rounded-3xl my-5">
        <div className="bg-gradient-to-r from-white to-lime-50 p-8">
          <div className="m-5">
            <img src="/images/citywheellogo.png" alt="citywheel logo" />
          </div>
          <div>
            <h1 className="text-3xl font-medium mt-8 ml-5 mb-5 lg:w-3/4">
              Create an account today to enjoy discounted prices on our exotic
              rides.
            </h1>
            <p className="font-medium ml-5">
              This will only take a short moment.
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto w-4/5 h-4/5 lg:block"
              data-name="Layer 1"
              width="500.80767"
              height="400.31651"
              viewBox="0 0 824.80767 438.31651"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <path
                id="b4c13b4e-8ef9-4732-a242-1b77a57c7078-122"
                data-name="Path 141"
                d="M1007.06582,668.02575h-459.267a5.345,5.345,0,0,1-5.338-5.338v-426.508a5.345,5.345,0,0,1,5.338-5.338h459.267a5.345,5.345,0,0,1,5.338,5.338v426.507a5.344,5.344,0,0,1-5.338,5.338Zm-459.267-435.053a3.207,3.207,0,0,0-3.2,3.2v426.514a3.207,3.207,0,0,0,3.2,3.2h459.267a3.206,3.206,0,0,0,3.2-3.2v-426.507a3.207,3.207,0,0,0-3.2-3.2Z"
                transform="translate(-187.59617 -230.84175)"
                fill="#e6e6e6"
              />
              <path
                id="b86923e0-dd17-408d-8c65-7675907766e6-123"
                data-name="Path 142"
                d="M764.81082,341.67124a3.624,3.624,0,0,0,0,7.248h198.856a3.624,3.624,0,0,0,0-7.248Z"
                transform="translate(-187.59617 -230.84175)"
                fill="#e6e6e6"
              />
              <path
                id="b7c93af7-a9b3-4ec5-8b9c-228075bea008-124"
                data-name="Path 143"
                d="M764.81082,363.41725a3.624,3.624,0,0,0,0,7.248h101.52a3.624,3.624,0,0,0,0-7.248Z"
                transform="translate(-187.59617 -230.84175)"
                fill="#e6e6e6"
              />
              <path
                id="bf6f3c94-5d99-4a3b-bad8-b2235a5a7f19-125"
                data-name="Path 142"
                d="M591.00433,468.67124a3.624,3.624,0,0,0,0,7.248h372.856a3.624,3.624,0,0,0,0-7.248Z"
                transform="translate(-187.59617 -230.84175)"
                fill="#e6e6e6"
              />
              <path
                id="b0a6cee6-456b-42c7-b828-32d4ce813421-126"
                data-name="Path 143"
                d="M591.00433,490.41725a3.624,3.624,0,0,0,0,7.248h275.52a3.624,3.624,0,0,0,0-7.248Z"
                transform="translate(-187.59617 -230.84175)"
                fill="#e6e6e6"
              />
              <path
                id="b1178f6f-c479-4db7-b1bf-97b40cae8cd0-127"
                data-name="Path 142"
                d="M591.00433,511.67124a3.624,3.624,0,0,0,0,7.248h372.856a3.624,3.624,0,0,0,0-7.248Z"
                transform="translate(-187.59617 -230.84175)"
                fill="#e6e6e6"
              />
              <path
                id="ad9199b6-e18d-416a-bbd3-7817c0554bff-128"
                data-name="Path 143"
                d="M591.00433,533.41725a3.624,3.624,0,0,0,0,7.248h275.52a3.624,3.624,0,0,0,0-7.248Z"
                transform="translate(-187.59617 -230.84175)"
                fill="#e6e6e6"
              />
              <path
                id="f7d611df-d029-4cc6-9561-be5a6829cf65-129"
                data-name="Path 154"
                d="M714.55483,418.02525h-288.268a5.344,5.344,0,0,1-5.338-5.338v-126.507a5.344,5.344,0,0,1,5.338-5.338h288.268a5.344,5.344,0,0,1,5.338,5.338v126.507A5.344,5.344,0,0,1,714.55483,418.02525Z"
                transform="translate(-187.59617 -230.84175)"
                fill="#98be0f"
              />
              <path
                id="b2be1aaf-9241-4aa1-a473-dbb8e8dcff3c-130"
                data-name="Path 154"
                d="M961.55483,618.02525h-109.268a5.344,5.344,0,0,1-5.338-5.338v-17.507a5.344,5.344,0,0,1,5.338-5.338h109.268a5.344,5.344,0,0,1,5.338,5.338v17.507A5.344,5.344,0,0,1,961.55483,618.02525Z"
                transform="translate(-187.59617 -230.84175)"
                fill="#98be0f"
              />
              <path
                d="M314.03171,444.95136C309.32289,441.436,307.9408,434.867,310.945,430.279a9.16549,9.16549,0,0,1,1.00873-1.26115l.301-93.45956,13.89232,2.59364.61035,91.91993c3.165,3.67148,3.80411,9.022,1.24055,12.93683C324.99373,447.59671,318.74087,448.46647,314.03171,444.95136Z"
                transform="translate(-187.59617 -230.84175)"
                fill="#ffb8b8"
              />
              <polygon
                points="198.683 423.301 213.005 423.3 219.819 368.058 198.681 368.059 198.683 423.301"
                fill="#ffb8b8"
              />
              <path
                d="M382.6259,649.46663l28.20547-.00114h.00114a17.9757,17.9757,0,0,1,17.97473,17.97444v.58411l-46.18048.00171Z"
                transform="translate(-187.59617 -230.84175)"
                fill="#2f2e41"
              />
              <polygon
                points="65.506 423.301 79.829 423.3 86.642 368.058 65.504 368.059 65.506 423.301"
                fill="#ffb8b8"
              />
              <path
                d="M249.44924,649.46663l28.20547-.00114h.00114a17.9757,17.9757,0,0,1,17.97473,17.97444v.58411l-46.18048.00171Z"
                transform="translate(-187.59617 -230.84175)"
                fill="#2f2e41"
              />
              <path
                d="M385.44327,638.71294l-1.20044-7.20215a5.70921,5.70921,0,0,1-2.96863-2.38281c-1.28906-2.03662-1.49438-4.90283-.61084-8.52051L371,539l-50.45077-52.34419L288.184,564.72027l-12.81225,61.7749v8.92529l-25.58057,3.28467,1.16406-8.4126a4.8993,4.8993,0,0,1-2.32275-2.06982c-1.46973-2.44629-1.44958-6.2378.05957-11.26807l.06543-.21826-.0835-.751C248.61539,615.45855,249,565,264,540l15.02274-75.90229c-.39014-1.06885-2.31616-7.29248,1.21606-17.80909,3.48609-10.37841,13.23572-27.09814,39.88648-47.81152l.09155-.0708.11353-.02393c.29516-.061,29.68933-5.90478,44.89123,13.97461l.10279.13428v.16944c0,1.229-.02649,29.83007-2.28785,36.17626l36.07288,66.32813c.70239.74414,7.00879,8.02686,4.7688,27.17432l5.82739,65.26806c.66675,1.27295,6.69873,13.26074.05054,18.00635L410.948,633.855Z"
                transform="translate(-187.59617 -230.84175)"
                fill="#2f2e41"
              />
              <path
                d="M325.09708,364.44146c-6.77319,0-15.77417-2.394-21.28394-13.42871l-.10839-.2168,13.574-28.77393A15.77613,15.77613,0,0,1,346.107,334.82671L334.37149,362.96l-.20434.07569A29.34616,29.34616,0,0,1,325.09708,364.44146Z"
                transform="translate(-187.59617 -230.84175)"
                fill="#98be0f"
              />
              <path
                d="M362.69767,421.4898l-42.79212-20.207,5.88208-71.76172,10.72363-13.10645,2.0774-.44482a54.68048,54.68048,0,0,1,28.73022,1.59131l.20362.06787,17.61438,37.57666c.11059.1875,12.81335,22.61474-4.74708,34.439Z"
                transform="translate(-187.59617 -230.84175)"
                fill="#98be0f"
              />
              <path
                d="M421.52665,398.62018a10.52407,10.52407,0,0,0-1.47481.75592l-45.0923-20.62658-1.15678-11.99059-18.32409-.61939-.015,21.426a7.99883,7.99883,0,0,0,5.755,7.68329l54.14828,15.825a10.49557,10.49557,0,1,0,6.15973-12.45358Z"
                transform="translate(-187.59617 -230.84175)"
                fill="#ffb8b8"
              />
              <path
                d="M366.37125,371.876c-5.13831,0-10.93713-1.77686-16.503-7.34278l-.17163-.17138,3.76086-31.5918a15.77621,15.77621,0,0,1,31.3999,3.01416l-2.22009,30.40137-.16992.13623C382.35843,366.40923,375.38175,371.876,366.37125,371.876Z"
                transform="translate(-187.59617 -230.84175)"
                fill="#98be0f"
              />
              <circle
                cx="354.94516"
                cy="277.65335"
                r="28.69259"
                transform="translate(-246.53217 225.0806) rotate(-61.3368)"
                fill="#ffb8b8"
              />
              <path
                d="M384.14676,262.45073c-1.42383-8.28094-8.07129-15.14563-15.99023-17.9544-7.91944-2.80878-16.84961-1.89533-24.60449,1.33917a40.849,40.849,0,0,0-3.78321,1.819c-2.83447-5.40283-9.78369-8.53638-16.13965-8.19818-7.67871.40857-14.61328,4.47149-21.28222,8.30066s-13.8252,7.639-21.51319,7.46069c-13.89306-.32208-24.229-13.20251-37.58837-17.03039a30.0607,30.0607,0,0,0-33.0835,45.881c5.70019-10.21515,19.08643-13.66535,30.70166-12.27472,11.61475,1.39068,22.43994,6.48193,33.81885,9.19385,11.37939,2.712,24.5581,2.59558,33.37207-5.09522,5-4.36237,7.93554-10.59753,12.28808-15.60565,2.94434-3.38751,7.13575-6.24787,11.41846-6.92114a34.65452,34.65452,0,0,0-9.37842,13.91107c-3.43408,9.75689-1.59814,21.47186,5.52588,28.97119,7.63721,8.0401,19.624,10.1828,30.7124,10.05279l.23194-.23577c-3.395-5.08173-6.07422-12.12818-2.33643-16.96326,3.68994-4.77277,10.96729-4.06958,16.61817-6.18152C381.00516,279.97838,385.5701,270.73174,384.14676,262.45073Z"
                transform="translate(-187.59617 -230.84175)"
                fill="#2f2e41"
              />
              <path
                d="M461.59617,669.15825h-273a1,1,0,0,1,0-2h273a1,1,0,1,1,0,2Z"
                transform="translate(-187.59617 -230.84175)"
                fill="#ccc"
              />
              <path
                id="e2582065-92bf-48dc-a28d-04f42179e35f-131"
                data-name="Path 155"
                d="M557.48607,325.21172c-1.25189.004-2.26477,1.6297-2.26228,3.63117.00248,1.99588,1.0139,3.61288,2.26228,3.61682H664.35559c1.2519-.004,2.26477-1.6297,2.26229-3.63116-.00248-1.99588-1.0139-3.61289-2.26229-3.61683Z"
                transform="translate(-187.59617 -230.84175)"
                fill="#fff"
              />
              <path
                id="bb678cb9-7d76-4fbb-a84c-c380d6521528-132"
                data-name="Path 156"
                d="M557.48607,346.21172c-1.25189.004-2.26477,1.6297-2.26228,3.63117.00248,1.99588,1.0139,3.61288,2.26228,3.61682H664.35559c1.2519-.004,2.26477-1.6297,2.26229-3.63116-.00248-1.99588-1.0139-3.61289-2.26229-3.61683Z"
                transform="translate(-187.59617 -230.84175)"
                fill="#fff"
              />
              <path
                id="a9697f3a-b5f3-4f74-8277-57e15506e4dd-133"
                data-name="Path 157"
                d="M557.48607,366.95773c-1.25189.004-2.26477,1.6297-2.26228,3.63116.00248,1.99588,1.0139,3.61289,2.26228,3.61682h45.98612c1.25189-.004,2.26477-1.6297,2.26229-3.63116-.00249-1.99588-1.01391-3.61289-2.26229-3.61682Z"
                transform="translate(-187.59617 -230.84175)"
                fill="#fff"
              />
              <circle cx="315.62762" cy="118.592" r="29" fill="#fff" />
            </svg>
          </div>
        </div>
        <div className="bg-gradient-to-r from-lime-50 to-white p-8">
         {message && (<div className="text-center text-sm font-bold" style={{color: status === "failed" ? "red" : "green"}}>
         {message}{status === "succeeded" && (<p>redirecting to login page in {countdown} seconds...</p>)}</div>)}
          <h2 className="text-center text-3xl font-medium mt-5">
            Let's get you started
          </h2>
          <form className="p-5 mt-3 w-4/5 mx-auto" autoComplete="off"
           method="POST" onSubmit={formik.handleSubmit}>
            <div className="flex flex-col mb-2 w-full lg:w-4/5 mx-auto">
              <label htmlFor="fname" className="font-medium mb-1">
                First Name
              </label>
              <input
                type="text"
                className="px-2 py-2 outline-0 rounded-lg border-2 border-lime-500"
                id="fname"
                name="fname"
                placeholder="First Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.fname}
              />
              <small className="text-rose-700 font-medium ml-2 mt-1">
                {formik.touched.fname && formik.errors.fname}
              </small>
            </div>
            <div className="flex flex-col mb-2 w-full lg:w-4/5 mx-auto">
              <label htmlFor="lname" className="font-medium mb-1">
                Last Name
              </label>
              <input
                type="text"
                className="px-2 py-2 outline-0 rounded-lg border-2 border-lime-500"
                id="lname"
                name="lname"
                placeholder="Last Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lname}
              />
              <small className="text-rose-700 font-medium ml-2 mt-1">
                {formik.touched.lname && formik.errors.lname}
              </small>
            </div>
            <div className="flex flex-col mb-2 w-full lg:w-4/5 mx-auto">
              <label htmlFor="email" className="font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                className="px-2 py-2 outline-0 rounded-lg border-2 border-lime-500"
                id="email"
                name="email"
                placeholder="Email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              <small className="text-rose-700 font-medium ml-2 mt-1">{formik.touched.email && formik.errors.email}</small>
            </div>
            <div className="flex flex-col mb-2 w-full lg:w-4/5 mx-auto">
              <label htmlFor="password" className="font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                className="px-2 py-2 outline-0 rounded-lg border-2 border-lime-500"
                id="password"
                name="password"
                placeholder="Password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              <small className="text-rose-700 font-medium ml-2 mt-1">{formik.touched.password && formik.errors.password}</small>
            </div>
            <div className="flex flex-col mb-2 w-full lg:w-4/5 mx-auto">
              <label htmlFor="Address" className="font-medium mb-1">
                Address
              </label>
              <input
                type="text"
                className="px-2 py-2 outline-0 rounded-lg border-2 border-lime-500"
                id="address"
                name="address"
                placeholder="Street Address"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.address}
              />
              <small className="text-rose-700 font-medium ml-2 mt-1">{formik.touched.address && formik.errors.address}</small>
            </div>
            <div className="flex flex-col mb-2 w-full lg:w-4/5 mx-auto">
              <label htmlFor="city" className="font-medium mb-1">
                City
              </label>
              <input
                type="text"
                className="px-2 py-2 outline-0 rounded-lg border-2 border-lime-500"
                id="city"
                name="city"
                placeholder="City"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.city}
              />
              <small className="text-rose-700 font-medium ml-2 mt-1">{formik.touched.city && formik.errors.city}</small>
            </div>
            <div className="flex flex-col mb-2 w-full lg:w-4/5 mx-auto">
              <label htmlFor="state" className="font-medium mb-1">
                State
              </label>
              <select
                className="px-2 py-2 outline-0 rounded-lg border-2 border-lime-500"
                id="state"
                name="state"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.state}
              >
                <option value="">-- Select your State --</option>
                <option value="Alabama">Alabama</option>
                <option value="Alaska">Alaska</option>
                <option value="Arizona">Arizona</option>
                <option value="Arkansas">Arkansas</option>
                <option value="California">California</option>
                <option value="Colorado">Colorado</option>
                <option value="Connecticut">Connecticut</option>
                <option value="Delaware">Delaware</option>
                <option value="Florida">Florida</option>
                <option value="Georgia">Georgia</option>
                <option value="Hawaii">Hawaii</option>
                <option value="Idaho">Idaho</option>
                <option value="Illinois">Illinois</option>
                <option value="Indiana">Indiana</option>
                <option value="Iowa">Iowa</option>
                <option value="Kansas">Kansas</option>
                <option value="Kentucky">Kentucky</option>
                <option value="Louisiana">Louisiana</option>
                <option value="Maine">Maine</option>
                <option value="Massachusetts">Massachusetts</option>
                <option value="Michigan">Michigan</option>
                <option value="Minnesota">Minnesota</option>
                <option value="Mississippi">Mississippi</option>
                <option value="Missouri">Missouri</option>
                <option value="Montana">Montana</option>
                <option value="Nebraska">Nebraska</option>
                <option value="Nevada">Nevada</option>
                <option value="New Hampshire">New Hampshire</option>
                <option value="New Jersey">New Jersey</option>
                <option value="New Mexico">New Mexico</option>
                <option value="New York">New York</option>
                <option value="North Carolina">North Carolina</option>
                <option value="North Dakota">North Dakota</option>
                <option value="Ohio">Ohio</option>
                <option value="Oklahoma">Oklahoma</option>
                <option value="Oregon">Oregon</option>
                <option value="Pennsylvania">Pennsylvania</option>
                <option value="Rhode Island">Rhode Island</option>
                <option value="South Carolina">South Carolina</option>
                <option value="South Dakota">South Dakota</option>
                <option value="Tennessee">Tennessee</option>
                <option value="Texas">Texas</option>
                <option value="Utah">Utah</option>
                <option value="Vermont">Vermont</option>
                <option value="Virginia">Virginia</option>
                <option value="Washington">Washington</option>
                <option value="West Virginia">west Virginia</option>
                <option value="Wisconsin">Wisconsin</option>
                <option value="Wyoming">Wyoming</option>
              </select>
              <small className="text-rose-700 font-medium ml-2 mt-1">{formik.touched.state && formik.errors.state}</small>
            </div>
            <div className="flex flex-col mb-2 w-full lg:w-4/5 mx-auto">
              <label htmlFor="Zipcode" className="font-medium mb-1">
                Zipcode
              </label>
              <input
                type="number"
                className="px-2 py-2 outline-0 rounded-lg border-2 border-lime-500"
                id="zipcode"
                name="zipcode"
                placeholder="Zipcode"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.zipcode}
              />
              <small className="text-rose-700 font-medium ml-2 mt-1">{formik.touched.zipcode && formik.errors.zipcode}</small>
            </div>
            <div className="w-40 mx-auto mt-8">
              <button
                type="submit"
                className="bg-lime-600 transition ease-in duration-200 text-white hover:text-black hover:bg-lime-500 font-semibold py-3 px-3 rounded-lg"
              >
                Create Account
              </button>
            </div>
          </form>
          <div className="text-center text-lg font-medium">
            <small>
              Already have an account?{" "}
              <Link to="/login" className="underline hover:text-lime-500">
                Login
              </Link>
            </small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
