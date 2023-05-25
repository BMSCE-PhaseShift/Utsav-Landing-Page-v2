import cat1 from "../sponlogos/cat1.json";
import cat2 from "../sponlogos/cat2.json";
import cat3 from "../sponlogos/cat3.json";
import cat4 from "../sponlogos/cat4.json";
import cat5 from "../sponlogos/cat5.json";
import { SponsorText } from "../components";

const Sponsors = () => {
	return (
		<div
			className="wrapper bg-blue pb-100"
			style={{
				backgroundImage:
					"linear-gradient(to top, rgba(96, 130, 182,0) 0%,rgba(96, 130, 182,0.1) 50%,rgba(96, 130, 182,0.2) 100%)",
			}}
		>
			<div className="container text-center mx-auto text-white font-bold">
				<div className="flex flex-col justify-center">
					{cat1.map((item, index) => (
						<div
							key={"spon" + index}
							className="flex flex-col justify-center col-12 mb-[16px]"
						>
							<br />
							{/* <h1>{item["name"]}</h1> */}
							<SponsorText
								title={<>{item["name"]}</>}
								textStyles="text-center cinzel-font text-hp-yellow"
							/>
							<a href={item["link"]} target="_blank" rel="noreferrer">
								<div className="flex justify-center">
									<img
										src={"/logos/cat 1/" + item["src"]}
										className="w-64"
										height="auto"
									></img>
								</div>
							</a>
						</div>
					))}
				</div>
				<br />
				<br />
				<SponsorText
					title={<>Technical Sponsors</>}
					textStyles="text-center cinzel-font text-hp-yellow"
				/>
				{/* <h2>Technicalol Sponsors</h2> */}
				<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
					{Object.keys(cat2).map((item, index) => (
						<div
							key={"spon" + index}
							//   className="basis-1/2 col-4 col-md-auto text-center flex md:flex-col justify-center"
							//   className="basis-1/2"
						>
							<br />
							<a href={cat2[item]} target="_blank" rel="noreferrer">
								<img
									src={"/logos/cat 2/" + item}
									className="w-32"
									height="auto"
								></img>
							</a>
						</div>
					))}
				</div>

				<br />
				<br />
				<SponsorText
					title={<>Central Sponsors</>}
					textStyles="text-center cinzel-font text-hp-yellow"
				/>
				{/* <h2>Central Sponsors</h2> */}
				<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center">
					{Object.keys(cat3).map((item, index) => (
						<div
							key={"spon" + index}
							//   className="col-4 col-md-6 text-center flex md:flex-col justify-center"
						>
							<br />
							<a href={cat3[item]} target="_blank" rel="noreferrer">
								<img
									src={"/logos/cat 3/" + item}
									className="max-w-32 max-h-32"
								></img>
							</a>
						</div>
					))}
				</div>

				<br />
				<br />
				<SponsorText
					title={<>Event Sponsors</>}
					textStyles="text-center cinzel-font text-hp-yellow"
				/>
				{/* <h2>Event Sponsors</h2> */}
				<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 justify-items-center">
					{Object.keys(cat4).map((item, index) => (
						<div
							key={"spon" + index}
							//   className="col-12 col-md-auto text-center flex md:flex-col justify-center"
						>
							<br />
							<a href={cat4[item]} target="_blank" rel="noreferrer">
								<img
									src={"/logos/cat 4/" + item}
									className="max-w-32 max-h-32"
								></img>
							</a>
						</div>
					))}

					{cat5.map((item, index) => (
						<div
							vkey={"spon" + index}
							// className="col-12 col-md-auto text-center flex md:flex-col justify-center"
						>
							<br />
							<img
								src={"/logos/cat 5/" + item}
								className="max-w-32 max-h-32"
							></img>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Sponsors;
