const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-center">
            Privacy Policy
          </h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              At SmeBhawan, we are committed to protecting the privacy and security of our clients, partners, and website visitors. This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal and business-related information in compliance with applicable data protection laws.
            </p>
            
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">Information We Collect</h2>
              <p className="text-gray-700 mb-3">We may collect the following types of information to facilitate our services:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Business Contact Details</li>
                <li>Transaction Data</li>
                <li>Website Usage Data</li>
                <li>Communications</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">How We Use Your Information</h2>
              <p className="text-gray-700 mb-3">Your data is used solely for legitimate business purposes, including:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Providing procurement and supply chain services</li>
                <li>Processing orders and ensuring timely delivery</li>
                <li>Improving customer support and communication</li>
                <li>Enhancing our website and service offerings</li>
                <li>Complying with legal and regulatory obligations</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">Data Security & Confidentiality</h2>
              <p className="text-gray-700">
                We implement industry-standard security measures to protect your information from unauthorized access, misuse, or disclosure. Access to sensitive data is restricted to authorized personnel only.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">Your Rights</h2>
              <p className="text-gray-700 mb-3">You have the right to:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Access, correct, or delete your personal data.</li>
              </ul>
              <p className="text-gray-700 mt-3">
                To exercise these rights, contact us at <a href="tel:+918617219004" className="text-primary hover:underline">+91 8617219004</a>
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">Updates to This Policy</h2>
              <p className="text-gray-700">
                We may revise this policy periodically. The latest version will always be posted on our website with the effective date.
              </p>
            </div>
            
            <div>
              <p className="text-gray-700 mb-2">For questions or concerns regarding your privacy, please contact:</p>
              <p className="text-lg font-semibold text-primary">
                📞 <a href="tel:+8617219004" className="hover:underline">+86 172 1900 4</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;