import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex px-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-3">
        {/* Left */}
        <div className="flex-1">
          <Link
            to="/"
            className="text-4xl font-bold dark:text-white"
          >
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Imam's
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga rerum sapiente nihil magni aliquam inventore quis praesentium distinctio blanditiis quam quae illo temporibus pariatur numquam maiores dicta, atque eius iusto.
          </p>
        </div>

        {/* right */}
        <div className="flex-1">
          <form className="flex flex-col gap-3">
            <div>
              <Label value="Your username" />
              <TextInput type="text" placeholder="Username" id="username" />
            </div>
            <div>
              <Label value="Your email" />
              <TextInput type="text" placeholder="name@company.com" id="email" />
            </div>
            <div>
              <Label value="Your password" />
              <TextInput type="password" placeholder="Password" id="password" />
            </div>
            <Button gradientDuoTone='purpleToPink' type="submit">Sign Up</Button>
          </form>
          <div className="flex gap-3 text-sm mt-5">
            <span>Have an account?</span>
            <Link to="/sign-in" className="text-blue-500">Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
