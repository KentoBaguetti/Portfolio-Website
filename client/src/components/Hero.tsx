"use client";
import React from "react";
import Image from "next/image";
import Tilt from "react-parallax-tilt";

export default function Hero() {
	return (
		<Tilt
			tiltReverse={true}
			tiltMaxAngleX={10}
			tiltMaxAngleY={10}
			transitionSpeed={1000}
			perspective={1000}
			className="mx-auto my-auto"
		>
			<div className="flex flex-row flex-auto justify-center items-center bg-gray-800 rounded-4xl">
				<div className="m-3">
					<Image
						src="/ken.jpeg"
						width={250}
						height={250}
						alt="Image of Kentaro Barnes"
						className="rounded-4xl opacity-100"
					/>
				</div>
				<div className="m-3 text-6xl font-bold">Kentaro Barnes</div>
			</div>
		</Tilt>
	);
}
