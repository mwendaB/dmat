import React from "react";

function OurServices() {
    return (
        <div className="flex flex-col justify-center max-w-[1400px] mx-auto  px-16 max-md:px-5">
            {/* Header */}
            <div>

                <div className="w-[400px] mx-auto relative font-bold text-center">


                    <div className="text-5xl w-[400px] font-bold text-center text-neutral-900 max-md:max-w-full max-md:text-4xl">
                        Our Services
                        <div className="flex items-center justify-start absolute left-12">

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="120"
                                height="4"
                                viewBox="0 0 120 4"
                                fill="none"
                            >
                                <path d="M2 2H118" stroke="#B00010" strokeWidth="4" strokeLinecap="round" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* SVG Line */}
            </div>

            {/* Service Cards */}
            <div className="flex flex-wrap gap-8 items-end mt-8 w-full max-md:max-w-full">
                <div className="flex flex-col flex-1 shrink p-4 rounded-lg basis-0 min-w-[240px]">
                    <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/68e0f70eaa1ddad07ddfb14316b93b072f9f377b04bac6ea2eea235ed2e9b1ca?width=100 100w"
                        className="object-contain w-16 aspect-square"
                    />
                    <div className="flex flex-col mt-8 w-full">
                        <div className="text-3xl font-semibold leading-8 text-neutral-900">
                            Strategy Development
                        </div>
                        <div className="mt-4 text-base leading-6 text-black">
                            Focused on measurable impact, driving interaction, and building ROAS (ROI)-focused projects.
                        </div>
                    </div>
                </div>

                <div className="flex flex-col flex-1 shrink p-4 rounded-lg basis-0 min-w-[240px]">
                    <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9d9228bd6def0d2ce5828e797f51f59ef272108d82b76c757658e2da5968a4e5?width=100 100w"
                        className="object-contain w-16 aspect-square"
                    />
                    <div className="flex flex-col mt-8 w-full">
                        <div className="text-3xl font-semibold leading-8 text-neutral-900">
                            Media Buying
                        </div>
                        <div className="mt-4 text-base leading-6 text-black">
                            Innovative and experienced in developing and deploying digital strategies for brands across Africa, larger EMEA and the Islands.
                        </div>
                    </div>
                </div>

                <div className="flex flex-col flex-1 shrink p-4 rounded-lg basis-0 min-w-[240px]">
                    <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d87493ca22f5eecd9897cd4b6d695ad0a088c12da429df6e842d35e813f1a4a0?width=100 100w"
                        className="object-contain w-16 aspect-square"
                    />
                    <div className="flex flex-col mt-8 w-full">
                        <div className="text-3xl font-semibold leading-8 text-neutral-900">
                            Marketing Training
                        </div>
                        <div className="mt-4 text-base leading-6 text-black">
                            Offers comprehensive digital marketing training, equipping individuals with practical skills for success in the dynamic digital landscape.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurServices;
