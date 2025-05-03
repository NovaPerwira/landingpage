import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const steps = [
  {
    title: "Consultation & Planning",
    description:
      "We discuss your goals, needs, and vision to create a tailored strategy for your website. We ensure clear communication and understanding before development begins.",
  },
  {
    title: "Design & Prototyping",
    description:
      "We create wireframes and prototypes that align with your branding and user experience goals. Feedback is integrated early to avoid costly changes later.",
  },
  {
    title: "Development & Implementation",
    description:
      "Our developers bring your vision to life using clean code and scalable architecture, with a focus on performance, accessibility, and modern tech stacks.",
  },
  {
    title: "Testing & Optimization",
    description:
      "We rigorously test functionality, performance, and responsiveness. Our QA ensures your site works seamlessly across devices and browsers.",
  },
  {
    title: "Launch & Support",
    description:
      "We deploy your site with best practices and provide ongoing maintenance, performance monitoring, and support so you can scale with confidence.",
  },
];

const ProcessStep = ({ step, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.4 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: index * 0.1 },
      });
    } else {
      controls.start({
        opacity: 0,
        y: -30,
        transition: { duration: 0.6 },
      });
    }
  }, [inView, controls, index]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{ opacity: 0, y: 30 }}
      className="relative pl-16 mb-20"
    >
      <div className="absolute left-5 top-2 w-4 h-4 bg-black rounded-full z-10 shadow-md" />
      <h4 className="text-2xl font-semibold mb-3 text-gray-800">{step.title}</h4>
      <p className="text-base text-gray-600 max-w-2xl">{step.description}</p>
    </motion.div>
  );
};

const ProcessSection = () => {
  return (
    <section className="w-full py-32 bg-gray-50">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-2 text-gray-800">Effortless Process</h2>
          <p className="text-lg text-gray-500">Continous Supply</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-black shadow-[0_0_8px_rgba(0,0,0,0.5)] z-0" />
          {steps.map((step, index) => (
            <ProcessStep key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
