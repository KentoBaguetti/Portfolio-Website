"use client";
import React from "react";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import TypeWriter from "typewriter-effect";

export default function Hero() {
	return (
		<Tilt
			tiltReverse={true}
			tiltMaxAngleX={10}
			tiltMaxAngleY={10}
			transitionSpeed={1000}
			perspective={1000}
			gyroscope={false}
			trackOnWindow={true}
			className="flex flex-auto justify-center items-center h-screen w-screen"
		>
			<div className="flex flex-row flex-auto justify-center items-center border-solid border-4 border-gray-200 rounded-4xl shadow-2xl max-w-1/3">
				<div className="m-3">
					<Image
						src="/ken.jpeg"
						width={275}
						height={275}
						alt="Image of Kentaro Barnes"
						className="rounded-4xl opacity-100"
					/>
				</div>
				<div className="m-3 text-gray-200">
					<p className="text-2xl">Hi, I&#39;m</p>
					<p className="text-6xl font-bold">Kentaro Barnes</p>
					<div className="text-2xl">
						<TypeWriter
							options={{
								strings: [
									"Computer Science Student . . .",
									"Software Engineer . . .",
								],
								autoStart: true,
								loop: true,
								deleteSpeed: 20,
								delay: 60,
							}}
						/>
					</div>
				</div>
			</div>
		</Tilt>
	);
}
