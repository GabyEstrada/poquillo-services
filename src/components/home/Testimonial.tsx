
import React from 'react';

const Testimonial = () => {
  return (
    <section className="py-16 bg-pink-50 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          From Overwhelm to "I've Got This!"
        </h2>
        
        <div className="bg-white p-8 md:p-12 shadow-sm">
          <div className="mb-6 text-5xl text-pink-200">"</div>
          <p className="text-xl text-gray-700 mb-8">
            Thank you so much, Gaby, for everything you do. I'm so grateful my mom shared your information with me. You've been such a blessing—thank you!
          </p>
          <div className="flex items-center justify-center">
            <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
            <div className="text-left">
              <div className="font-bold">Dr. Whitley C.</div>
              <div className="text-gray-500">Vital Family Chiropractic</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
