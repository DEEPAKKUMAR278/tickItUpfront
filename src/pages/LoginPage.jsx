import { useForm } from "react-hook-form";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { useQuery, useMutation } from '@tanstack/react-query';
import { useEffect } from "react";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
 const loginUser=useMutation({
  mutationFn:async ({userName,password})=>{
      const resp=await axios.post('/api/v1/users/login',{
        userName:userName,
        password
      })
      return resp.data.data.user;
  },
  onSuccess:(data)=>{
    localStorage.setItem("user",JSON.stringify(data));
    navigate("../");
  },
  onError:(error)=>{
    console.log(error);
    alert("Login failed: invalid user credentials");
  }
})
  const navigate=useNavigate();
  const onSubmit = (data) => {
    loginUser.mutate(data);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-sm border border-gray-100 p-8">

        {/* Header */}
        <h1 className="text-2xl font-semibold text-gray-900 mb-1">Welcome back</h1>
        <p className="text-sm text-gray-400 mb-6">Sign in to your account</p>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">

          <Input
            label="Username"
            name="userName"
            placeholder="john_doe"
            required
            error={errors.userName}
            {...register("userName", {
              required: "Username is required",
            })}
          />

          <Input
            label="Password"
            name="password"
            type="password"
            placeholder="Enter your password"
            required
            error={errors.password}
            {...register("password", {
              required: "Password is required",
            })}
          />

          <button
            type="submit"
            className="w-full mt-2 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-md hover:bg-gray-700 transition-colors"
          >
            Sign In
          </button>

        </form>

        {/* Footer */}
        <div className=" flex justify-center gap-2">
          <p className="text-sm text-center text-gray-400 mt-6"></p>
            Don't have an account?{" "}
            <p onClick={()=>{navigate("../auth/register")}} className="text-gray-900 cursor-pointer font-medium hover:underline">
              Register
            </p>
      </div>
      </div>
    </div>
  );
}