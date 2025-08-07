const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Contact Us
          </h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              At SmeBhawan, we specialize in procuring high-quality raw materials and delivering them to SMBs in India and abroad. Our end-to-end supply chain solutions ensure cost efficiency, reliability, and superior product quality for your business.
            </p>
            
            <div className="text-lg md:text-xl font-semibold text-primary mb-6">
              📞 Call Us: <a href="tel:+918617219004" className="hover:underline">+91-8617219004</a>
            </div>
            
            <p className="text-xl text-gray-600 font-medium">
              Let's simplify your procurement process—reach out today!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;