/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Card from "../../components/card.tsx";
import Container from "../../islands/Layout.tsx";

export default function Home() {
	const btn = tw`inline-block px-12 py-3 text-sm font-medium text-white bg-[#87C047] border border-[#87C047] rounded-full hover:bg-transparent hover:text-[#87C047] focus:outline-none focus:ring`;
	return (
		<Container>
			<div>
				<div class={tw`p-4 sm:items-center sm:justify-end flex`}>
					<button class={btn}>Connect</button>
				</div>
				<div class={tw`p-4 sm:items-center sm:justify-center flex`}>
					<Card start={0} />
				</div>
			</div>
		</Container>
	);
}
