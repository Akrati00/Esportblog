"use client";


import React from "react";

import LoginForm from "./LoginForm";
import { useUser } from "@/lib/store/user";
import Profile  from "@/components/nav/profile"; 
import Link from "next/link";

export default function Navbar(){
	const user = useUser((state) => state.user);
	console.log(user);
	return (
	<nav className="flex items-center justify-between">
		<div className=" group">
           <Link href="/" className="text-2xl font-bold" >
		      Esport Blogs
		   </Link>
		   <div className=" h-1 w-0 group-hover:w-full transition-all bg-green-500"></div>
		</div>
		{user?.id ? <Profile/> : <LoginForm />}
	</nav>
);
}