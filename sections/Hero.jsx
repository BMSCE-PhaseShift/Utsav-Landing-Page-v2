"use client";

const Hero = () => (
	<>
		<section className="w-full h-screen">
			<video
				className="w-full h-full object-cover"
				src="./videoBg.mp4"
				autoPlay
				loop
				muted
				playsInline
				preload="auto"
			/>
		</section>
	</>
);

export default Hero;
