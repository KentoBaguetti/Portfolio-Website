"use client";
import React from "react";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import TypeWriter from "typewriter-effect";

const cardClass =
	"flex flex-col flex-auto justify-center items-center border-solid border-4 border-gray-200 rounded-4xl shadow-2xl w-full max-w-md mx-8";
const mdCardClass =
	"md:flex md:flex-row md:flex-auto md:justify-center md:items-center md:border-solid md:border-4 md:border-gray-200 md:rounded-4xl md:shadow-2xl md:max-w-2xl";

export default function Hero() {
	return (
		<Tilt
			tiltReverse={true}
			tiltMaxAngleX={12}
			tiltMaxAngleY={12}
			transitionSpeed={1000}
			perspective={1000}
			gyroscope={true}
			trackOnWindow={true}
			className="flex flex-auto justify-center items-center h-screen w-screen"
		>
			<div className={`${cardClass} ${mdCardClass}`}>
				<div className="m-3">
					<Image
						src="/ken.jpeg"
						width={275}
						height={275}
						alt="Image of Kentaro Barnes"
						className="rounded-3xl opacity-100"
					/>
				</div>
				<div className="m-3 text-gray-200">
					<p className=" text-xl text-center md:text-2xl md:text-left">
						Hi, I&#39;m
					</p>
					<p className=" text-3xl text-center md:text-6xl font-bold md:text-left">
						Kentaro Barnes
					</p>
					<div className="text-xl text-center w-[290] lg:text-2xl md:text-left">
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
