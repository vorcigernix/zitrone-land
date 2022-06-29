/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Counter from "../islands/Counter.tsx";

export default function Home() {
	return (
		<main>
			<header class={tw`text-white bg-gray-900`}>
				<div
					class={tw`max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8`}>
					<div class={tw`sm:justify-between sm:items-center sm:flex`}>
						<div class={tw`text-center sm:text-left flex fůex-row`}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								class='text-green-300'
								width='44'
								height='44'
								viewBox='0 0 24 24'
								stroke-width='1.5'
								stroke='currentColor'
								fill='none'
								stroke-linecap='round'
								stroke-linejoin='round'>
								<path stroke='none' d='M0 0h24v24H0z' fill='none' />
								<path d='M17.536 3.393c3.905 3.906 3.905 10.237 0 14.143c-3.906 3.905 -10.237 3.905 -14.143 0l14.143 -14.143' />
								<path d='M5.868 15.06a6.5 6.5 0 0 0 9.193 -9.192' />
								<path d='M10.464 10.464l4.597 4.597' />
								<path d='M10.464 10.464v6.364' />
								<path d='M10.464 10.464h6.364' />
							</svg>
							<h1 class={tw`text-2xl font-bold text-green-300 sm:text-3xl`}>
								Zitrone
							</h1>
						</div>

						<div
							class={tw`flex flex-col gap-4 mt-4 sm:flex-row sm:mt-0 sm:items-center`}>
							<a
								href='https://zitrone.vercel.app'
								class={tw`inline-flex items-center justify-center px-5 py-3 text-gray-500 transition border border-gray-200 rounded-lg bg-white hover:text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring`}>
								<span class={tw`text-sm font-medium`}> Application </span>

								<svg
									xmlns='http://www.w3.org/2000/svg'
									class={tw`w-4 h-4 ml-1.5' `}
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
									stroke-width='2'>
									<path
										stroke-linecap='round'
										stroke-linejoin='round'
										d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
									/>
								</svg>
							</a>
						</div>
					</div>
				</div>
			</header>
			<section class={tw`text-white bg-gray-900`} id='hero'>
				<div
					class={tw`max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex`}>
					<div class={tw`max-w-3xl mx-auto text-center`}>
						<h1
							class={tw`text-3xl font-extrabold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-green-300 via-green-500 to-purple-600`}>
							DAO Scheduling
							<span class={tw`block`}>Made Easy.</span>
						</h1>

						<p class={tw`max-w-xl mx-auto mt-4 sm:leading-relaxed sm:text-xl`}>
							Our tool helps DAOs schedule member only events, stay organized,
							and increase community engagement.
						</p>

						<div class={tw`flex flex-wrap justify-center gap-4 mt-8`}>
							<a
								href='#get-started'
								class={tw`block w-full px-12 py-3 text-sm font-medium text-white bg-green-600 border border-green-600 rounded sm:w-auto active:text-opacity-75 hover:bg-transparent hover:text-white focus:outline-none focus:ring`}>
								Get Started
							</a>

							<a
								href='#features'
								class={tw`block w-full px-12 py-3 text-sm font-medium text-white border border-green-300 rounded sm:w-auto hover:bg-green-600 active:bg-blue-500 focus:outline-none focus:ring`}>
								Features
							</a>
						</div>
					</div>
				</div>
			</section>
			<section class={tw`text-white bg-gray-900`} id='features'>
				<div class={tw`max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8`}>
					<div class={tw`max-w-lg mx-auto text-center`}>
						<h2 class={tw`text-3xl font-bold sm:text-4xl`}>Features</h2>

						<p class={tw`mt-4 text-gray-300`}>
							Features that make DAO organization easy.
						</p>
					</div>

					<div
						class={tw`grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3`}>
						<a
							href='https://zitrone.vercel.app/'
							class={tw`block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-green-200 hover:border-green-200`}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								class={tw`w-10 h-10 text-green-500`}
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'>
								<path
									stroke-linecap='round'
									stroke-linejoin='round'
									d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
								/>
							</svg>

							<h3 class={tw`mt-4 text-xl font-bold text-white`}>Meetings</h3>

							<p class={tw`mt-1 text-sm text-gray-300`}>
								With Zitrone you won't spam your members, only those with the
								appropriate token/qualifications will see the meeting.
							</p>
						</a>

						<a
							href='https://zitrone.vercel.app/'
							class={tw`block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-green-200 hover:border-green-200`}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								class={tw`w-10 h-10 text-green-500`}
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'>
								<path
									stroke-linecap='round'
									stroke-linejoin='round'
									d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
								/>
							</svg>

							<h3 class={tw`mt-4 text-xl font-bold text-white`}>Events</h3>

							<p class={tw`mt-1 text-sm text-gray-300`}>
								Put the next event you'll attend or host on Zitrone so your
								community can easily manage their schedule in one place.
							</p>
						</a>

						<a
							href='https://zitrone.vercel.app/'
							class={tw`block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-green-200 hover:border-green-200`}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								class={tw`w-10 h-10 text-green-500`}
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'>
								<path
									stroke-linecap='round'
									stroke-linejoin='round'
									d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
								/>
							</svg>

							<h3 class={tw`mt-4 text-xl font-bold text-white`}>Voting</h3>

							<p class={tw`mt-1 text-sm text-gray-300`}>
								Easy token gated scheduling means you'll get more members to see
								and show up when your DAO holds an important vote.
							</p>
						</a>
					</div>

					<div class={tw`mt-12 text-center hidden`}>
						<a
							class={tw`inline-flex items-center px-8 py-3 mt-8 text-white bg-green-600 border border-green-600 rounded hover:bg-transparent active:text-green-500 focus:outline-none focus:ring`}>
							<span class={tw`text-sm font-medium`}> Get Started </span>

							<svg
								class={tw`w-5 h-5 ml-3`}
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'>
								<path
									stroke-linecap='round'
									stroke-linejoin='round'
									stroke-width='2'
									d='M17 8l4 4m0 0l-4 4m4-4H3'
								/>
							</svg>
						</a>
					</div>
				</div>
			</section>

			<aside class={tw`p-12 bg-gray-900 sm:p-16 lg:p-24`}>
				<div class={tw`max-w-xl mx-auto text-center`}>
					<p class={tw`mt-2 text-3xl font-bold text-white sm:text-4xl`}>
						Join the team
					</p>
					<p class={tw`text-sm font-medium text-gray-300`}>
						Become a part of the DAO and get access to the DAO's Discord server.
					</p>
					<div
						class={tw`flex flex-wrap justify-center gap-4 mt-8`}
						id='get-started'>
						<a
							href='https://discord.gg/2grJYtCG'
							class={tw`block w-full px-12 py-3 text-sm font-medium text-white bg-green-600 border border-green-600 rounded sm:w-auto active:text-opacity-75 hover:bg-transparent hover:text-white focus:outline-none focus:ring`}>
							Join Team
						</a>

						<a
							href='https://zitrone.vercel.app/'
							class={tw`block w-full px-12 py-3 text-sm font-medium text-white border border-green-300 rounded sm:w-auto hover:bg-green-600 active:bg-blue-500 focus:outline-none focus:ring`}>
							Try Beta
						</a>
					</div>
				</div>
			</aside>
		</main>
	);
}
