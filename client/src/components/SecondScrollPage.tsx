"use client";
import About from "./About";
import Experience from "./Experience";

export default function SecondScrollPage() {
	return (
		<div className="min-h-screen flex flex-col justify-center items-center px-4 gap-8">
			<div className="w-full">
				<About />
			</div>
			<div className="w-full">
				<Experience />
			</div>
		</div>
	);
}
