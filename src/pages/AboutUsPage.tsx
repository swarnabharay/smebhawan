const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            About Us
          </h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              At SmeBhawan, we are committed to upholding the highest standards of transparency, efficiency, and trust—core principles that guide our mission to deliver exceptional value to our clients. Through strategic supply chain optimization, we enable businesses to reduce operational costs, enhance productivity, and achieve scalable growth. Additionally, we collaborate with government-certified quality testing centers and logistics providers in India, supporting them to improve financial sustainability and operational excellence.
            </p>
            
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              Partner with SmeBhawan for a smarter, faster, and more cost-effective procurement solution tailored to your business needs.
            </p>
            
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
              Contact Us Today to explore how we can contribute to your business growth.
            </p>
            
            <div className="text-lg md:text-xl font-semibold text-primary">
              📞 Phone: <a href="tel:+918617219004" className="hover:underline">+91 86 172 1900 4</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;