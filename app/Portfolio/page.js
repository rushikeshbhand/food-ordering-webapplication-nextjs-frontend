import React from 'react'

export default function Portfolio() {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
                    Our popular foods
                </h1>
                <p className="mt-4 text-center text-gray-500 dark:text-gray-300">
                    Refresh with our crisp salads, featuring a variety of fresh greens and Sandwich               </p>
                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
                    {portfolioItems.map((item, index) => (
                        <div key={index} className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
                            style={{ backgroundImage: `url(${item.image})` }}>
                            <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                                <h2 className="mt-4 text-xl font-semibold text-white capitalize">{item.title}</h2>
                                <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase">{item.category}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

const portfolioItems = [
    {
        image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/egg-cress-club-sandwich-9d415c2.jpg?quality=90&resize=440,400",
        title: "Sandwich",
        category: "Our sandwiches are a customer favorite, with over 30 varieties to choose from, each made with fresh ingredients and gourmet breads."
    },
    {
        image: "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?cs=srgb&dl=pexels-harry-dona-2338407.jpg&fm=jpg",
        title: "Chicken",
        category: "Our chicken dishes are the top sellers in the non-veg category, featuring more than 40 different recipes ranging from classic grilled to exotic spiced varieties."
    },
    {
        image: "https://spicecravings.com/wp-content/uploads/2020/12/Paneer-kathi-Roll-Featured-1.jpg",
        title: "Paneer Roll:",
        category: "Paneer rolls are our most popular item in the veg category, offering over 50 unique flavors that showcase the versatility of paneer in delicious wraps."
    }
];

