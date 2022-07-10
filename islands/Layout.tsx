/** @jsx h */
/** @jsxFrag Fragment */
import { ComponentChildren, Fragment, h } from "preact";
import { tw } from "@twind";
import Sidebar from "./Sidebar.tsx";

export type Props = {
	children: ComponentChildren;
	title?: string;
	name?: string;
	description?: string;
};

export default function Container({ children }: Props) {
	return (
		<>
			<div style={{ minHeight: "100vh" }}>
				<main class={tw`grid grid-cols-4 gap-4`}>
					<Sidebar />
					<div id='container' class={tw`col-span-3`}>
						{children}
					</div>
				</main>
			</div>
		</>
	);
}
