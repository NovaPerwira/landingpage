// This file simulates API calls to fetch dynamic data
// In a real application, these would be actual API calls to a database

// Blog Posts
export async function getBlogPosts(limit?: number) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300))

  const posts = [
    {
      slug: "the-rise-of-artificial-intelligence-in-healthcare",
      title: "The Rise of Artificial Intelligence in Healthcare",
      excerpt:
        "Artificial Intelligence (AI) has emerged as a transformative force in the healthcare industry, reshaping patient care, diagnostics, and research.",
      coverImage: "/images/blog/ai-healthcare.jpg",
      date: "April 15, 2023",
      category: "Healthcare",
      readingTime: 8,
      author: "Dr. Emily Chen",
      likes: "24.5k",
      views: "52k",
      comments: "20k",
    },
    {
      slug: "quantum-computing-breakthrough",
      title: "Major Breakthrough in Quantum Computing",
      excerpt:
        "Scientists have achieved a significant milestone in quantum computing, bringing us closer to practical quantum applications.",
      coverImage: "/images/blog/quantum-computing.jpg",
      date: "March 22, 2023",
      category: "Technology",
      readingTime: 6,
      author: "Dr. Robert Miller",
      likes: "18.2k",
      views: "43k",
      comments: "15k",
    },
    {
      slug: "ethical-considerations-in-ai",
      title: "Ethical Considerations in AI Development",
      excerpt:
        "As AI becomes more integrated into our daily lives, the ethical implications of these technologies require careful consideration.",
      coverImage: "/images/blog/ai-ethics.jpg",
      date: "February 10, 2023",
      category: "AI Ethics",
      readingTime: 7,
      author: "Sarah Johnson",
      likes: "15.7k",
      views: "38k",
      comments: "22k",
    },
    {
      slug: "future-of-telemedicine",
      title: "The Future of Telemedicine Post-Pandemic",
      excerpt: "Telemedicine adoption surged during the pandemic, but how will it evolve in the coming years?",
      coverImage: "/images/blog/telemedicine.jpg",
      date: "January 28, 2023",
      category: "Healthcare",
      readingTime: 5,
      author: "Dr. Michael Wong",
      likes: "12.3k",
      views: "31k",
      comments: "9k",
    },
    {
      slug: "blockchain-in-healthcare",
      title: "Blockchain Applications in Healthcare",
      excerpt:
        "Blockchain technology offers promising solutions for healthcare data management and security challenges.",
      coverImage: "/images/blog/blockchain-healthcare.jpg",
      date: "December 15, 2022",
      category: "Technology",
      readingTime: 9,
      author: "Alex Thompson",
      likes: "10.8k",
      views: "27k",
      comments: "8k",
    },
    {
      slug: "ai-drug-discovery",
      title: "AI-Powered Drug Discovery and Development",
      excerpt:
        "Artificial intelligence is revolutionizing the pharmaceutical industry by accelerating drug discovery and development processes.",
      coverImage: "/images/blog/ai-drug-discovery.jpg",
      date: "November 5, 2022",
      category: "Research",
      readingTime: 10,
      author: "Dr. Jennifer Lee",
      likes: "19.4k",
      views: "45k",
      comments: "17k",
    },
  ]

  return limit ? posts.slice(0, limit) : posts
}

// Blog Categories
export async function getBlogCategories() {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 200))

  return [
    { name: "Healthcare", slug: "healthcare" },
    { name: "Technology", slug: "technology" },
    { name: "AI Ethics", slug: "ai-ethics" },
    { name: "Research", slug: "research" },
    { name: "Quantum Computing", slug: "quantum-computing" },
    { name: "Blockchain", slug: "blockchain" },
  ]
}

// Single Blog Post
export async function getBlogPost(slug: string) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  const posts = await getBlogPosts()
  const post = posts.find((post) => post.slug === slug)

  if (!post) return null

  // Add additional content for the full post
  return {
    ...post,
    introduction:
      "Artificial Intelligence (AI) has emerged as a transformative force in the healthcare industry, reshaping patient care, diagnostics, and research. In this blog post, we explore the profound impact of AI in healthcare, from  and research. In this blog post, we explore the profound impact of AI in healthcare, from revolutionizing diagnostic accuracy to enhancing patient outcomes.",
    content:
      "Artificial Intelligence (AI) has permeated virtually every aspect of our lives, and healthcare is no exception. The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes and the efficiency of the healthcare system. In this blog post, we will delve into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and address the ethical considerations surrounding this revolutionary technology.",
    conclusion:
      "As AI continues to evolve, its integration into healthcare systems will only deepen, offering unprecedented opportunities to improve patient care, streamline operations, and advance medical research. However, it is crucial that we approach this technology with careful consideration of ethical implications, data privacy, and the irreplaceable human element in healthcare. By striking the right balance, AI can truly revolutionize healthcare for the benefit of all.",
    sections: [
      {
        id: "ai-diagnostic-imaging",
        title: "AI in Diagnostic Imaging",
        content:
          "One of the most prominent applications of AI in healthcare is in diagnostic imaging. AI algorithms have demonstrated remarkable proficiency in interpreting medical images such as X-rays, MRIs, and CT scans. They can identify patterns and anomalies that might be missed by human eyes, potentially leading to earlier and more accurate diagnoses. For instance, AI systems have shown impressive results in detecting lung nodules in chest X-rays, identifying early signs of diabetic retinopathy in eye scans, and spotting subtle indicators of breast cancer in mammograms.",
      },
      {
        id: "predictive-analytics",
        title: "Predictive Analytics and Disease Prevention",
        content:
          "AI-powered predictive analytics is transforming how healthcare providers approach disease prevention and management. By analyzing vast amounts of patient data, AI can identify individuals at high risk for specific conditions, enabling proactive interventions before symptoms manifest. This approach is particularly valuable for chronic diseases like diabetes, heart disease, and certain cancers, where early detection and intervention can significantly improve outcomes and reduce healthcare costs.",
      },
      {
        id: "personalized-treatment",
        title: "Personalized Treatment Plans",
        content:
          "AI is revolutionizing treatment planning by enabling truly personalized approaches based on individual patient data. By analyzing a patient's genetic information, medical history, lifestyle factors, and treatment responses, AI algorithms can recommend tailored treatment protocols with higher efficacy and fewer side effects. This precision medicine approach is particularly promising in oncology, where AI can help identify the most effective therapies based on a tumor's genetic profile.",
      },
      {
        id: "drug-discovery",
        title: "Drug Discovery and Research",
        content:
          "The pharmaceutical industry is leveraging AI to accelerate drug discovery and development processes. AI algorithms can analyze vast chemical and biological datasets to identify potential drug candidates, predict their properties, and optimize molecular structures. This capability significantly reduces the time and cost associated with bringing new medications to market. Additionally, AI is being used to identify new applications for existing drugs, a process known as drug repurposing, which can further expedite treatment availability.",
      },
      {
        id: "telemedicine",
        title: "AI in Telemedicine",
        content:
          "The integration of AI with telemedicine platforms has expanded access to healthcare services, particularly for patients in remote or underserved areas. AI-powered chatbots and virtual assistants can conduct initial patient screenings, answer common medical questions, and direct patients to appropriate care resources. Furthermore, AI can enhance remote monitoring capabilities by analyzing data from wearable devices and alerting healthcare providers to concerning trends that may require intervention.",
      },
      {
        id: "ethical-considerations",
        title: "Ethical Considerations",
        content:
          "As AI becomes increasingly embedded in healthcare systems, important ethical questions arise regarding data privacy, algorithm transparency, and potential biases. Healthcare AI systems are only as good as the data they're trained on, and if these datasets contain biases, the resulting algorithms may perpetuate or even amplify these biases in their recommendations. Additionally, questions about liability, informed consent, and the appropriate balance between human and AI decision-making must be carefully addressed to ensure that AI enhances rather than compromises patient care.",
      },
    ],
  }
}

// Related Posts
export async function getRelatedPosts(currentSlug: string) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300))

  const allPosts = await getBlogPosts()
  return allPosts.filter((post) => post.slug !== currentSlug).slice(0, 3)
}

// Portfolio Projects
export async function getPortfolioProjects() {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300))

  return [
    {
      slug: "ai-diagnostic-platform",
      title: "AI-Powered Diagnostic Platform",
      description:
        "An advanced diagnostic platform using machine learning to improve accuracy and speed of medical diagnoses.",
      coverImage: "/images/portfolio/ai-diagnostic.jpg",
      category: "Healthcare",
    },
    {
      slug: "quantum-encryption-system",
      title: "Quantum Encryption System",
      description: "A cutting-edge encryption system leveraging quantum computing principles for unbreakable security.",
      coverImage: "/images/portfolio/quantum-encryption.jpg",
      category: "Quantum Computing",
    },
    {
      slug: "autonomous-surgical-robot",
      title: "Autonomous Surgical Robot",
      description: "A precision surgical robot with AI-guided capabilities for minimally invasive procedures.",
      coverImage: "/images/portfolio/surgical-robot.jpg",
      category: "Robotics",
    },
    {
      slug: "predictive-healthcare-analytics",
      title: "Predictive Healthcare Analytics",
      description: "A data analytics platform that predicts patient outcomes and recommends preventive measures.",
      coverImage: "/images/portfolio/predictive-analytics.jpg",
      category: "AI & Machine Learning",
    },
    {
      slug: "blockchain-medical-records",
      title: "Blockchain Medical Records System",
      description: "A secure, decentralized system for managing patient medical records using blockchain technology.",
      coverImage: "/images/portfolio/blockchain-records.jpg",
      category: "Blockchain",
    },
    {
      slug: "telemedicine-platform",
      title: "Advanced Telemedicine Platform",
      description:
        "A comprehensive telemedicine solution with AI-powered diagnostics and remote monitoring capabilities.",
      coverImage: "/images/portfolio/telemedicine.jpg",
      category: "Healthcare",
    },
  ]
}

// Services
export async function getServices() {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300))

  return [
    {
      slug: "ai-machine-learning",
      title: "AI & Machine Learning",
      description:
        "Leverage the power of artificial intelligence and machine learning to transform your business operations and decision-making processes.",
      icon: "🤖",
    },
    {
      slug: "healthcare-technology",
      title: "Healthcare Technology",
      description:
        "Innovative healthcare solutions that improve patient outcomes, streamline operations, and enhance the overall quality of care.",
      icon: "🏥",
    },
    {
      slug: "quantum-computing",
      title: "Quantum Computing",
      description:
        "Cutting-edge quantum computing solutions for complex problem-solving and data analysis beyond the capabilities of classical computing.",
      icon: "⚛️",
    },
    {
      slug: "cybersecurity",
      title: "Cybersecurity",
      description:
        "Comprehensive security solutions to protect your digital assets, sensitive data, and infrastructure from evolving cyber threats.",
      icon: "🔒",
    },
    {
      slug: "blockchain-solutions",
      title: "Blockchain Solutions",
      description:
        "Secure, transparent, and efficient blockchain implementations for various industries including finance, healthcare, and supply chain.",
      icon: "🔗",
    },
    {
      slug: "data-analytics",
      title: "Data Analytics & Insights",
      description:
        "Transform raw data into actionable insights with our advanced analytics solutions, helping you make data-driven decisions.",
      icon: "📊",
    },
  ]
}

// Pricing Plans
export async function getPricingPlans() {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300))

  return [
    {
      title: "Basic",
      price: "$19",
      description: "Perfect for individuals and small teams.",
      features: ["Access to core features", "Up to 5 team members", "Community support"],
      buttonText: "Get Started",
      buttonVariant: "default",
      popular: false,
    },
    {
      title: "Standard",
      price: "$59",
      description: "Ideal for growing businesses.",
      features: ["All Basic features", "Up to 20 team members", "Priority support", "Advanced analytics"],
      buttonText: "Get Started",
      buttonVariant: "default",
      popular: true,
    },
    {
      title: "Premium",
      price: "$99",
      description: "For established businesses with complex needs.",
      features: ["All Standard features", "Unlimited team members", "24/7 dedicated support", "Custom integrations"],
      buttonText: "Contact Us",
      buttonVariant: "outline",
      popular: false,
    },
  ]
}

// Testimonials
export async function getTestimonials() {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300))

  return [
    {
      quote:
        "Nova Tech has been instrumental in transforming our business. Their AI solutions have significantly improved our efficiency and decision-making.",
      author: "John Smith",
      role: "CEO, Tech Solutions Inc.",
      rating: 5,
    },
    {
      quote:
        "We are extremely satisfied with the services provided by Nova Tech. Their team is highly skilled and dedicated to delivering exceptional results.",
      author: "Emily Johnson",
      role: "Marketing Director, Global Corp.",
      rating: 4,
    },
    {
      quote:
        "Nova Tech's innovative approach and cutting-edge technology have helped us stay ahead of the competition. We highly recommend their services.",
      author: "David Brown",
      role: "CTO, Innovation Labs Ltd.",
      rating: 5,
    },
    {
      quote:
        "The support and guidance we received from Nova Tech were invaluable. They truly understand our business needs and provide tailored solutions.",
      author: "Sarah Williams",
      role: "Operations Manager, Enterprise Co.",
      rating: 4,
    },
    {
      quote:
        "We have been working with Nova Tech for several years and have always been impressed with their professionalism and expertise.",
      author: "Michael Davis",
      role: "Finance Director, Venture Group.",
      rating: 5,
    },
    {
      quote:
        "Nova Tech's solutions have helped us streamline our processes and reduce costs. We are very happy with the results.",
      author: "Linda Rodriguez",
      role: "HR Manager, Staffing Solutions.",
      rating: 4,
    },
  ]
}

// Timeline Items
export async function getTimelineItems() {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300))

  return [
    {
      title: "Founded Nova Tech",
      description:
        "Established Nova Tech with a vision to revolutionize the healthcare industry through innovative technology solutions.",
      imageSrc: "/images/business-person.png",
      imageAlt: "Business Person",
      imagePosition: "left",
    },
    {
      title: "Launched AI Diagnostic Platform",
      description:
        "Developed and launched an AI-powered diagnostic platform that improves the accuracy and speed of medical diagnoses.",
      imageSrc: "/images/product-camera.png",
      imageAlt: "Product Camera",
      imagePosition: "right",
    },
    {
      title: "Secured Series A Funding",
      description:
        "Successfully secured Series A funding to expand our research and development efforts and scale our operations.",
      imagePosition: "none",
    },
    {
      title: "Expanded Global Operations",
      description:
        "Expanded our global operations to serve clients in North America, Europe, and Asia, solidifying our position as a leading technology provider.",
      imageSrc: "/images/astronaut.png",
      imageAlt: "Astronaut",
      imagePosition: "left",
    },
  ]
}
