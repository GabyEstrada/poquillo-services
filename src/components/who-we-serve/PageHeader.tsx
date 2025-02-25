
import React from 'react';

const PageHeader = () => {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Who <span className="text-pink-500">We Serve</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Poquillo is for ambitious women entrepreneurs ready to transform business confusion into confident action.
        </p>
      </div>
    </section>
  );
};

export default PageHeader;
