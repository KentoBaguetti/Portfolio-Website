import React, { useRef, useEffect, useState } from "react";

const FadeSection = ({ children }) => {
	const [isVisible, setVisible] = useState(false);
	const domRef = useRef();

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					setVisible(true);
				}
			}
		});

		observer.observe(domRef.current);

		return () => observer.unobserve(domRef.current);
	}, []);

	return (
		<div
			ref={domRef}
			className={`fade-section ${isVisible ? "is-visible" : ""}`}
		>
			{children}
		</div>
	);
};

export default FadeSection;
