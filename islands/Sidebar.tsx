/** @jsx h */
import { tw } from "@twind";
import { h } from "preact";

export default function Sidebar() {
	return (
		<div class={tw`flex flex-col justify-between h-screen bg-white border-r`}>
			<div class={tw`px-4 py-6`}>
				<div class={tw`flex w-32 h-14 justify-center items-center`}>
					<svg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'>
						<g
							id='Layer_1'
							transform='matrix(0.056801, 0, 0, 0.056801, 0.493611, 4.194728)'
							style=''>
							<g
								id='g-1'
								transform='matrix(0.675191, -0.737644, 0.737643, 0.675191, -35.512608, 255.871216)'>
								<path
									d='M393.481,222.291 C434.215,218.437 473.756,217.798 508.686,229.573 C509.354,225.113 510.023,220.655 510.692,216.196 C504.616,213.297 496.869,210.733 489.958,210.511 C480.594,198.248 481.764,181.806 472.4,169.544 C443.761,67.319 375.337,8.298 291.569,3.317 C202.743,-1.965 97.745,49.355 43.838,23.569 C94.622,176.956 250.563,258.985 464.374,177.57 C470.617,186.265 470.338,199.809 476.581,208.504 C452.249,207.539 423.902,207.91 399.57,209.955 C397.541,214.067 395.512,218.179 393.481,222.291'
									fill='#5EB245'></path>
								<path
									d='M464.346,169.348 C440.146,85.36 382.234,16.415 291.112,10.997 C216.923,6.585 117.929,49.827 56.461,35.937 C125.497,213.335 326.195,12.227 464.346,169.348'
									fill='#87C047'></path>
								<path
									d='M134.701,173.692 C156.964,133.796 203.86,106.305 258.113,106.305 C309.702,106.305 354.634,131.163 378.063,167.907 C386.621,181.329 395.168,191.986 406.408,203.256 C412.088,208.954 415.642,217.073 415.642,226.084 C415.642,235.095 412.088,243.214 406.408,248.911 C395.168,260.183 386.621,270.839 378.063,284.261 C354.634,321.004 309.702,345.862 258.113,345.862 C203.86,345.862 156.964,318.373 134.701,278.476 C127.12,264.89 117.472,254.995 104.079,247.077 C95.755,242.156 90.422,234.581 90.422,226.084 C90.422,217.586 95.755,210.01 104.079,205.091 C117.473,197.173 127.119,187.278 134.701,173.692'
									fill='#ECCD26'></path>
								<path
									d='M134.701,173.692 C156.964,133.796 203.86,106.305 258.113,106.305 C309.702,106.305 354.634,131.163 378.063,167.907 C385.545,179.641 393.017,189.259 402.288,199.025 C396.114,243.021 334.822,277.572 260.111,277.572 C183.332,277.572 120.725,241.084 117.548,195.353 C124.359,189.306 129.938,182.229 134.701,173.692'
									fill='#FBDA20'></path>
								<path
									d='M222.743,118.221 C253.202,111.242 277.895,120.443 277.895,138.771 C277.895,157.1 253.202,177.615 222.743,184.594 C192.283,191.573 167.591,182.373 167.591,164.043 C167.591,145.715 192.283,125.199 222.743,118.221'
									fill='#FEEF85'></path>
							</g>
						</g>
					</svg>
					<span class={tw`ml-3 text-lg font-bold text-[#5EB245]`}>ZITRONE</span>
				</div>

				<nav class={tw`flex flex-col mt-6 space-y-1`}>
					<a
						href='/application'
						class={tw`flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg`}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							height='24'
							viewBox='0 0 24 24'
							width='24'>
							<path d='M0 0h24v24H0z' fill='none' />
							<path d='M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z' />
						</svg>

						<span class={tw`ml-3 text-sm font-medium`}> Events </span>
					</a>

					<details class={tw`group`}>
						<summary
							class={tw`flex items-center px-4 py-2 text-gray-500 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700`}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								height='24'
								viewBox='0 0 24 24'
								width='24'>
								<path d='M0 0h24v24H0z' fill='none' />
								<path d='M11.99 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm3.61 6.34c1.07 0 1.93.86 1.93 1.93 0 1.07-.86 1.93-1.93 1.93-1.07 0-1.93-.86-1.93-1.93-.01-1.07.86-1.93 1.93-1.93zm-6-1.58c1.3 0 2.36 1.06 2.36 2.36 0 1.3-1.06 2.36-2.36 2.36s-2.36-1.06-2.36-2.36c0-1.31 1.05-2.36 2.36-2.36zm0 9.13v3.75c-2.4-.75-4.3-2.6-5.14-4.96 1.05-1.12 3.67-1.69 5.14-1.69.53 0 1.2.08 1.9.22-1.64.87-1.9 2.02-1.9 2.68zM11.99 20c-.27 0-.53-.01-.79-.04v-4.07c0-1.42 2.94-2.13 4.4-2.13 1.07 0 2.92.39 3.84 1.15-1.17 2.97-4.06 5.09-7.45 5.09z' />
							</svg>

							<span class={tw`ml-3 text-sm font-medium`}> DAOs </span>

							<span
								class={tw`ml-auto transition duration-300 shrink-0 group-open:-rotate-180`}>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									class={tw`w-5 h-5`}
									viewBox='0 0 20 20'
									fill='currentColor'>
									<path
										fill-rule='evenodd'
										d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
										clip-rule='evenodd'
									/>
								</svg>
							</span>
						</summary>

						<nav class={tw`mt-1.5 ml-8 flex flex-col`}>
							<a
								href='/application/daos'
								class={tw`flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700`}>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									height='24'
									viewBox='0 0 24 24'
									width='24'>
									<path d='M0 0h24v24H0V0z' fill='none' />
									<path d='M13.35 20.13c-.76.69-1.93.69-2.69-.01l-.11-.1C5.3 15.27 1.87 12.16 2 8.28c.06-1.7.93-3.33 2.34-4.29 2.64-1.8 5.9-.96 7.66 1.1 1.76-2.06 5.02-2.91 7.66-1.1 1.41.96 2.28 2.59 2.34 4.29.14 3.88-3.3 6.99-8.55 11.76l-.1.09z' />
								</svg>

								<span class={tw`ml-3 text-sm font-medium`}> Favorites </span>
							</a>

							<a
								href=''
								class={tw`flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700`}>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									enable-background='new 0 0 24 24'
									height='24'
									viewBox='0 0 24 24'
									width='24'>
									<rect fill='none' height='24' width='24' />
									<path d='M9,4c-4.42,0-8,3.58-8,8c0,4.42,3.58,8,8,8s8-3.58,8-8C17,7.58,13.42,4,9,4z M9,15.5c-0.55,0-1-0.45-1-1v-4H6.75 C6.34,10.5,6,10.16,6,9.75S6.34,9,6.75,9h4.5C11.66,9,12,9.34,12,9.75s-0.34,0.75-0.75,0.75H10v4C10,15.05,9.55,15.5,9,15.5z M20.25,3.75L22,4.54c0.39,0.18,0.39,0.73,0,0.91l-1.75,0.79L19.46,8c-0.18,0.39-0.73,0.39-0.91,0l-0.79-1.75L16,5.46 c-0.39-0.18-0.39-0.73,0-0.91l1.75-0.79L18.54,2c0.18-0.39,0.73-0.39,0.91,0L20.25,3.75z M20.25,17.75L22,18.54 c0.39,0.18,0.39,0.73,0,0.91l-1.75,0.79L19.46,22c-0.18,0.39-0.73,0.39-0.91,0l-0.79-1.75L16,19.46c-0.39-0.18-0.39-0.73,0-0.91 l1.75-0.79L18.54,16c0.18-0.39,0.73-0.39,0.91,0L20.25,17.75z' />
								</svg>

								<span class={tw`ml-3 text-sm font-medium`}> Add DAO </span>
							</a>
						</nav>
					</details>
					<a
						href=''
						class={tw`flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700`}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							height='24'
							viewBox='0 0 24 24'
							width='24'>
							<path d='M0 0h24v24H0V0z' fill='none' />
							<path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1-8h-2V7h2v2z' />
						</svg>

						<span class={tw`ml-3 text-sm font-medium`}> Help </span>
					</a>
				</nav>
			</div>

			<div class={tw`sticky inset-x-0 bottom-0 border-t border-gray-100`}>
				<a
					href=''
					class={tw`flex items-center p-4 bg-white hover:bg-gray-50 shrink-0`}>
					<img
						class={tw`object-cover w-10 h-10 rounded-full`}
						src='https://www.hyperui.dev/photos/man-4.jpeg'
						alt='Simon Lewis'
					/>

					<div class={tw`ml-1.5`}>
						<p class={tw`text-xs`}>
							<strong class={tw`block font-medium`}>Simon Lewis</strong>

							<span> simonlewis@fakemail.com </span>
						</p>
					</div>
				</a>
			</div>
		</div>
	);
}
