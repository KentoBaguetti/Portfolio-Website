// biome-ignore lint/style/useImportType: <explanation>
import React from "react";
import { useRef, useEffect, useState } from "react";

const FadeSection: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [isVisible, setVisible] = useState(false);
	const domRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					setVisible(true);
				}
			}
		});

		if (domRef.current) {
			observer.observe(domRef.current);
		}

		return () => {
			if (domRef.current) {
				observer.unobserve(domRef.current);
			}
		};
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
