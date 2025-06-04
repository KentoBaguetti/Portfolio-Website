"use client";
import React from "react";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import TypeWriter from "typewriter-effect";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const cardClass =
	"flex flex-col flex-auto justify-center items-center border-solid border-4 dark:border-gray-200 border-zinc-900/80 rounded-4xl shadow-2xl w-full max-w-md px-2 dark:text-gray-200";
const mdCardClass =
	"md:flex md:flex-row md:flex-auto md:justify-center md:items-center md:border-solid md:border-4 dark:md:border-gray-200 md:rounded-4xl md:shadow-2xl md:max-w-2xl";

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
			className="flex flex-auto justify-center items-center h-screen w-full"
		>
			<div className={`${cardClass} ${mdCardClass}`}>
				<div className="m-3">
					<Image
						src="/ken.jpeg"
						width={275}
						height={275}
						priority={true}
						alt="Image of Kentaro Barnes"
						className="rounded-3xl opacity-100"
						loading="eager"
						quality={80} 
						placeholder="blur" 
						blurDataURL="data:image/jpeg;base64,..."
					/>
				</div>
				<div className="m-3 w-[275px]">
					<p className="text-xl text-center md:text-2xl md:text-left">
						Hi, I&#39;m
					</p>
					<p className="text-3xl text-center md:text-6xl font-bold md:text-left">
						Kentaro Barnes
					</p>
					<div className="text-xl text-center w-[290px] lg:text-xl md:text-left">
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
					<div className="flex flex-row items-center justify-center md:justify-start md:flex md:flex-row md:mt-2">
						<a
							href="https://www.github.com/KentoBaguetti"
							target="_blank"
							rel="noopener noreferrer"
							className="mx-2 hover:scale-125"
						>
							<FaGithub size={30} />
						</a>
						<a
							href="https://www.linkedin.com/in/barneskentaro/"
							target="_blank"
							rel="noopener noreferrer"
							className="mx-2 hover:scale-125"
						>
							<FaLinkedin size={30} />
						</a>
						<a
							href="mailto:kentaro.barnes5@gmail.com"
							target="_blank"
							rel="noopener noreferrer"
							className="mx-2 hover:scale-125"
						>
							<MdEmail size={30} />
						</a>
					</div>
				</div>
			</div>
		</Tilt>
	);
}
