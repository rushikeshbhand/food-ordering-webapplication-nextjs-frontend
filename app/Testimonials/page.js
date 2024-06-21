import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const Testimonial = () => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container flex flex-col gap-10 items-center px-4 py-12 mx-auto xl:flex-row">
                <div className="flex justify-center xl:w-1/2">
                    <Image
                        className="h-80 w-80 sm:w-[28rem] sm:h-[28rem] lg:w-50px lg:h-auto lex-shrink-0 object-cover rounded-full"
                        src="https://static.vecteezy.com/system/resources/previews/023/809/530/non_2x/a-flying-burger-with-all-the-layers-ai-generative-free-photo.jpg"
                        alt="Testimonial Image"
                        width={320}
                        height={320}
                        layout="responsive"
                    />
                </div>

                <div className="flex flex-col items-center mt-6 xl:items-start xl:w-1/2 xl:mt-0">
                    <h2 className="text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
                     Your Favorite Meals, Just a Click Away – Fast, Fresh, and Flavorful!
                    </h2>

                    <p className="block max-w-2xl mt-4 text-gray-500 dark:text-gray-300">
                    Click Below To Get Your Deliciously Convenient: Quality Food Delivered Straight to Your Door! In This Monsoon Seasoon We Are Providing Some Amazing Offers Dont Forget Get Benifit Of That Offers!
                    </p>

                    <div className="mt-6 sm:-mx-2">
                        <Link
                            href="/ShowProducts"
                            className="inline-flex items-center justify-center w-full px-4 py-2.5 mt-4 text-sm text-white transition-colors duration-300 bg-blue-600 rounded-lg shadow sm:w-auto sm:mx-2 sm:mt-0 hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                        >
                            <span className="mx-2">Get Your Favourite Food</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
