"use client";

const Hero = () => (
	<>
		<section className="w-full h-screen">
			<video
				className="w-full h-full object-cover"
				src="./videoBg.mp4"
				autoplay
				loop
				muted
				playsinline
			/>
		</section>
	</>
);

export default Hero;
