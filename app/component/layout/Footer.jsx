import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-blue-100/80 font-sans dark:bg-gray-900">
            <div className="container px-6 py-12 mx-auto">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
                    <div className="sm:col-span-2">
                        <h1 className="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white">Agarwal Package and Movers.</h1>

                        <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                            <div className="flex gap-4 hover:cursor-pointer">
                                <img src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg" width="30" height="30" alt="fb" />
                                <img src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg" width="30" height="30" alt="tw" />
                                <img src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg" width="30" height="30" alt="inst" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <p className="font-semibold text-gray-800 dark:text-white">Quick Link</p>

                        <div className="flex flex-col items-start mt-5 space-y-2">
                            <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Home</p>
                            <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Who We Are</p>
                            <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Our Philosophy</p>
                        </div>
                    </div>

                    <div>
                        <p className="font-semibold text-gray-800 dark:text-white">Industries</p>

                        <div className="flex flex-col items-start mt-5 space-y-2">
                            <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Retail & E-Commerce</p>
                            <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Information Technology</p>
                            <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Finance & Insurance</p>
                        </div>
                    </div>
                </div>

                <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700 h-2" />

                <p className="font-sans p-8 text-start md:text-center md:text-lg md:p-4">© 2023 You Company Inc. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
