/** @jsx h */
import { tw } from "@twind";
import { h } from "preact";

interface CardProps {
	start: number;
}
export default function Card(props: CardProps) {
    return(
        <a
        class={tw`relative block p-8 overflow-hidden border border-gray-100 rounded-lg max-w-lg mx-auto`}
        href=''>
        <span
            class={tw`absolute inset-x-0 bottom-0 h-2  bg-gradient-to-r from-yellow-300 to-[#5EB245]`}></span>

        <div class={tw`justify-between sm:flex`}>
            <div>
                <h5 class={tw`text-xl font-bold text-gray-900`}>
                    Building a SaaS product as a software developer
                </h5>
                <p class={tw`mt-1 text-xs font-medium text-gray-600`}>
                    By John Doe
                </p>
            </div>

            <div class={tw`flex-shrink-0 hidden ml-3 sm:block`}>
                <img
                    class={tw`object-cover w-16 h-16 rounded-lg shadow-sm`}
                    src='https://www.hyperui.dev/photos/man-5.jpeg'
                    alt=''
                />
            </div>
        </div>

        <div class={tw`mt-4 sm:pr-8`}>
            <p class={tw`text-sm text-gray-500`}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. At
                velit illum provident a, ipsa maiores deleniti consectetur nobis
                et eaque.
            </p>
        </div>

        <dl class={tw`flex mt-6`}>
            <div class={tw`flex flex-col-reverse`}>
                <dt class={tw`text-sm font-medium text-gray-600`}>Published</dt>
                <dd class={tw`text-xs text-gray-500`}>31st June, 2021</dd>
            </div>

            <div class={tw`flex flex-col-reverse ml-3 sm:ml-6`}>
                <dt class={tw`text-sm font-medium text-gray-600`}>
                    Reading time
                </dt>
                <dd class={tw`text-xs text-gray-500`}>3 minute</dd>
            </div>
        </dl>
    </a>

    )

}
