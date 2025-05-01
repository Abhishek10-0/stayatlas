import { CheckCircle, Globe, Shield, Headset } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ListLandingPage() {
return (
    <div className="flex flex-col items-center bg-white text-gray-800">
        {/* Hero Section */}
        <section className="w-full h-[80vh] bg-gradient-to-br from-green-900 to-green-700 flex flex-col justify-center items-center text-center p-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">List Your Property for Free</h1>
            <p className="text-lg md:text-2xl text-green-100 mb-6">Reach millions of travelers with Stay Atlas</p>
            <Link to="/list-your-property">
                <button className="px-6 py-3 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 focus:outline-none">
                    List Your Property Now
                </button>
            </Link>
        </section>

        {/* Why List With Us Section */}
        <section className="py-16 px-8 max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
                { Icon: Globe, title: "Wider Reach", desc: "Showcase your property to a global audience." },
                { Icon: Shield, title: "Secure & Simple", desc: "Fast registration with secure management tools." },
                { Icon: CheckCircle, title: "Full Control", desc: "Manage your listings, rates, and availability." },
                { Icon: Headset, title: "24/7 Support", desc: "We're here whenever you need assistance." },
            ].map(({ Icon, title, desc }, idx) => (
                <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center text-center bg-white p-6 rounded-xl shadow-md"
                >
                    <Icon className="h-12 w-12 text-green-800 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{title}</h3>
                    <p className="text-gray-600">{desc}</p>
                </motion.div>
            ))}
        </section>

        {/* How It Works Section */}
        <section className="bg-green-50 w-full py-20 px-8 text-center">
            <h2 className="text-3xl font-bold mb-12 text-green-900">How It Works</h2>
            <div className="flex flex-col md:flex-row justify-center gap-12">
                {[
                    { step: "1", title: "Sign Up", desc: "Create your free account easily." },
                    { step: "2", title: "Add Your Property", desc: "Enter details and upload beautiful photos." },
                    { step: "3", title: "Start Earning", desc: "Go live and welcome your first guests!" },
                ].map(({ step, title, desc }, idx) => (
                    <motion.div
                        key={idx}
                        whileHover={{ y: -10 }}
                        className="flex flex-col items-center max-w-xs"
                    >
                        <div className="bg-green-800 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-4">
                            {step}
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{title}</h3>
                        <p className="text-gray-700">{desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>

        {/* Final CTA */}
        <section className="w-full py-16 bg-green-900 text-center text-white">
        <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
        <Link to="/list-your-property">
          <button className="px-8 py-4 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 focus:outline-none">
            List Your Property Now
          </button>
        </Link>
      </section>

    </div>
);
}
