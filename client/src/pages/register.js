/* import { ChangeEvent, FormEvent, useState } from "react";
import { Layout } from "../components/layout";
import "../index.css";

const Register = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <Layout>
      <div className=" mt-12 h-[30rem] flex flex-col  items-center">
        <form
          onSubmit={(e) => onSubmit(e)}
          className="bg-white rounded mt-12 flex flex-col items-center w-[30rem]"
        >
          <h2 className="block text-gray-700 text-2xl font-bold m-4">
            Register
          </h2>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-1"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              autoComplete={"off"}
              required
              onChange={(e) => onChange(e)}
              value={values.username}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="password"
              placeholder="password"
              required
              onChange={(e) => onChange(e)}
              value={values.password}
            />
          </div>

          <div className="mb-4">
            <button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
 */

import { ChangeEvent, FormEvent, useState } from "react";
import { Layout } from "../components/layout";
import "../index.css";

const Register = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <Layout>
      <div className=" mt-12 h-[30rem] flex flex-col  items-center">
        <form
          onSubmit={(e) => onSubmit(e)}
          className="bg-white rounded mt-12 flex flex-col items-center w-[30rem]"
        >
          <h2 className="block text-gray-700 text-2xl font-bold m-4">
            Register
          </h2>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-1"
              htmlFor="username"
            >
              Username
            </label>
            <input
              onChange={(e) => onChange(e)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="username"
              id="username"
              name="username"
              placeholder="Username"
              autoComplete={"off"}
              required
              value={values.username}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-1"
              htmlFor="password"
            >
              password
            </label>
            <input
              onChange={(e) => onChange(e)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              id="password"
              name="password"
              placeholder="password"
              autoComplete={"off"}
              required
              value={values.password}
            />
          </div>


          

          <div className="mb-4">
            <button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
