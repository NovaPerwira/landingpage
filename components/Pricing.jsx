import React from "react";

const plans = [
  {
    name: "Basic",
    price: "$0",
    features: [
      "20,000+ PNGs & SVGs graphics",
      "Access to all static stock images",
      "Unlimited projects",
      "Limited sharing",
      "Upload custom fonts & icons",
      "Basic icon editor",
    ],
    button: "Get Started Free",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$25",
    features: [
      "20,000+ PNGs & SVGs graphics",
      "Access to all static stock images",
      "Unlimited projects",
      "Unlimited sharing",
      "Upload custom fonts & icons",
      "Advanced icon editor",
      "Multiple exports options",
      "Import & export design systems",
      "Priority support",
      "Create teams to collaborate on designs",
    ],
    button: "Get StartPro",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "$100",
    features: [
      "20,000+ PNGs & SVGs graphics",
      "Access to all static stock images",
      "Unlimited projects",
      "Unlimited sharing",
      "Upload custom fonts & icons",
      "Advanced icon editor",
      "Multiple exports options",
      "Import & export design systems",
      "Team management tools",
      "Create teams to collaborate on designs",
    ],
    button: "Get Start Now",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section className="py-12 px-4 md:px-12 lg:px-20 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">Powerful features for <span className="text-blue-600">powerful creators</span></h2>
        <p className="text-gray-600">Choose a plan that’s right for you</p>
      </div>
      <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`w-full max-w-sm border rounded-xl shadow-md p-6 transition-transform transform hover:scale-105 ${
              plan.highlighted ? "bg-blue-600 text-white" : "bg-white text-gray-900"
            }`}
          >
            <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
            <p className="text-3xl font-bold mb-4">{plan.price}<span className="text-base font-normal">/month</span></p>
            <ul className="space-y-2 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-2 text-green-500">✔</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button
              className={`w-full py-2 rounded-lg font-semibold transition-colors duration-300 ${
                plan.highlighted
                  ? "bg-white text-blue-600 hover:bg-gray-200"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              {plan.button}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
