
// Import icons (Replace these paths with your actual image paths)


const FeaturesSection = () => {
  const features = [
    {
      icon: 'https://glorianoor.com/public/storage/images/static/fast-delivery.png',
      title: "Fast & Secure Delivery",
      description: "Tell about your service.",
    },
    {
      icon: 'https://glorianoor.com/public/storage/images/static/returns.png',
      title: "2 Days Return Policy",
      description: "No question ask.",
    },
    {
      icon: 'https://glorianoor.com/public/storage/images/static/guarantee-certificate.png',
      title: "Money Back Guarantee",
      description: "Within 5 business days",
    },
    {
      icon: 'https://glorianoor.com/public/storage/images/static/24-hours-support.png',
      title: "24 X 7 Service",
      description: "Online service for customer",
    },
  ];

  return (
    <div className="grid grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-4 justify-around bg-white ">
      {features.map((feature, index) => (
        <Feature
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
};

export default FeaturesSection;

const Feature = ({ icon, title, description }) => {
    return (
      <div className="flex items-center space-x-4 p-4">
        <img src={icon} alt={title} className="w-12 h-12" />
        <div>
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    );
  };