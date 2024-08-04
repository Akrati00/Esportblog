import React from "react";
import {
	GitHubLogoIcon,
	LinkedInLogoIcon,
	DiscordLogoIcon,
} from "@radix-ui/react-icons";

export default function Footer() {
	return (

		<footer className="relative border-t border-b border-[#00d155] bg-[#0c0a09] text-white rounded-t-lg transition duration-300">
			<div className="max-w-7xl py-6 px-6 md:px-10 space-y-12 mx-auto flex justify-between md:items-end flex-col md:flex-row">
				<div className="space-y-10">
					<div className="space-y-2 w-full sm:w-96">
						<h1 className="text-3xl font-bold">Daily Esports</h1>
						<p className="text-gray-200">
							Stay updated with the latest news, tournaments, and strategies in the world of esports. Discover player profiles, game reviews, and industry insights at Esports Blog.
						</p>
					</div>
					<div className="flex items-center gap-4">
						<a href="https://github.com" target="_blank" rel="noopener noreferrer">
							<GitHubLogoIcon className="w-7 h-7 hover:text-gray-300" />
						</a>
						<a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
							<LinkedInLogoIcon className="w-7 h-7 hover:text-gray-300" />
						</a>
						<a href="https://discord.com" target="_blank" rel="noopener noreferrer">
							<DiscordLogoIcon className="w-7 h-7 hover:text-gray-300" />
						</a>
					</div>
				</div>

				<div className="space-y-2">
					<h2 className="text-lg font-semibold">Quick Links</h2>
					<ul className="space-y-1 text-gray-200">
						<li><a href="/about" className="hover:text-gray-300">About Us</a></li>
						<li><a href="/contact" className="hover:text-gray-300">Contact</a></li>
						<li><a href="/privacy" className="hover:text-gray-300">Privacy Policy</a></li>
						<li><a href="/terms" className="hover:text-gray-300">Terms of Service</a></li>
					</ul>
				</div>

				<p className="text-sm text-gray-200">
					&copy; 2024 Esports Blog. All rights reserved.
				</p>
			</div>
		</footer>
	);
}
