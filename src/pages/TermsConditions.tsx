import React from 'react';
import CallToAction from '../components/common/CallToAction';
import Navigation from '../components/layout/Navigation';
import Footer from '../components/layout/Footer';

const TermsConditions: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navigation currentPage="none" />
      <main className="pt-16 md:pt-24">
        <section className="py-10 px-6 md:px-12 lg:px-24">
          <div className="max-w-5xl mx-auto prose prose-headings:text-black prose-headings:font-bold prose-p:text-gray-700">
            <h1 className="text-4xl mb-6">POQUILLO – TERMS & CONDITIONS</h1>
            
            <h2>1. Introduction</h2>
            <p>
              1.1 These terms and conditions shall govern your use of our website and any services offered by Poquillo.
            </p>
            <p>
              1.2 By using our website or services, you accept these terms and conditions in full; accordingly, if you disagree with these terms and conditions or any part of these terms and conditions, you must not use our website or services.
            </p>
            <p>
              1.3 If you register with our website, submit any material to our website, purchase any services, or use any of our website services, we will ask you to expressly agree to these terms and conditions.
            </p>
            <p>
              1.4 You must be at least 18 years of age to use our website or services; by using our website or agreeing to these terms and conditions, you warrant and represent to us that you are at least 18 years of age.
            </p>

            <h2>2. Services</h2>
            <p>
              2.1 Poquillo LLC offers business coaching, consulting, and strategy services to entrepreneurs and business owners.
            </p>
            <p>
              2.2 The exact nature of the services provided will be as described in the specific service package purchased.
            </p>
            <p>
              2.3 We reserve the right to modify or withdraw any service at any time.
            </p>
            <p>
              2.4 Services are provided on an "as is" and "as available" basis. We make no guarantee of availability, fitness for purpose, or that the services will meet your specific requirements.
            </p>

            <h2>3. Payments and Refunds</h2>
            <p>
              3.1 All payments for our services shall be made in advance unless otherwise agreed in writing.
            </p>
            <p>
              3.2 Prices for services are subject to change at any time, but changes will not affect any services you have already purchased.
            </p>
            <p>
              3.3 Payment processing services for Poquillo LLC are provided by our payment processors, and are subject to their respective terms of service.
            </p>
            <p>
              3.4 Unless explicitly stated otherwise, all sales are final. We do provide a 14-day "cooling off period" during which refunds may be provided at our discretion if you have not substantially consumed the service.
            </p>
            <p>
              3.5 After the cooling off period, no refunds will be provided for any reason, and any outstanding payment installments agreed upon at the time of purchase will remain due.
            </p>

            <h2>4. Intellectual Property Rights</h2>
            <p>
              4.1 All content included on our website and in our services, such as text, graphics, logos, images, as well as the compilation thereof, and any software used on the website, is the property of Poquillo LLC or its suppliers and protected by copyright and other laws.
            </p>
            <p>
              4.2 Our content, materials, and methodology are provided for your personal use only and may not be reproduced, published, transmitted, distributed, displayed, performed, edited, sold, or otherwise exploited for any other purposes without our prior written consent.
            </p>
            <p>
              4.3 You retain any and all of your intellectual property rights to materials you submit as part of our coaching or consulting services.
            </p>

            <h2>5. User Content and Marketing Consent</h2>
            <p>
              5.1 In these terms and conditions, "your content" means all materials (including without limitation text, images, audio, video, etc.) that you submit to us or our website for processing, publication, or storage.
            </p>
            <p>
              5.2 You grant to us a worldwide, irrevocable, non-exclusive, royalty-free license to use, reproduce, adapt, publish, translate and distribute your content in any existing or future media. You also grant to us the right to sub-license these rights.
            </p>
            <p>
              5.3 You warrant and represent that your content will comply with these terms and conditions and that you have the right to make your content available to us for all the purposes specified in the terms.
            </p>
            <p>
              5.4 Your content must not be illegal or unlawful, must not infringe any third party's legal rights, and must not be capable of giving rise to legal action whether against you or us or a third party.
            </p>
            <p>
              5.5 Marketing Communications and Consent:
            </p>
            <ul>
              <li>a) When you provide your email address or contact information through our website, forms, purchases, or content downloads, we may collect and store this information for marketing purposes.</li>
              <li>b) By providing your contact information, you acknowledge that you may receive marketing communications from us, including newsletters, promotional offers, educational content, and announcements.</li>
              <li>c) We implement a "double opt-in" process for our marketing list where possible, requiring you to confirm your subscription.</li>
              <li>d) We respect your communication preferences and provide clear opt-out methods in all marketing messages.</li>
              <li>e) Our marketing practices comply with applicable laws including CAN-SPAM (US), CASL (Canada), and similar regulations.</li>
              <li>f) You have the right to withdraw your marketing consent at any time through methods outlined in our Privacy Policy.</li>
            </ul>

            <h2>6. Warranties and Liability</h2>
            <p>
              6.1 We do not warrant the completeness or accuracy of the information published on this website or provided in our services.
            </p>
            <p>
              6.2 To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website, services, and these terms and conditions.
            </p>
            <p>
              6.3 Nothing in these terms and conditions will limit or exclude our or your liability for fraud, death or personal injury caused by negligence, or any other liability that cannot be limited by law.
            </p>
            <p>
              6.4 Subject to section 6.3, we will not be liable to you in respect of any losses arising out of any event or events beyond our reasonable control, business losses, or any loss of or damage to your data.
            </p>

            <h2>7. Confidentiality</h2>
            <p>
              7.1 We respect your confidential information and expect you to respect the confidential information of other participants in group coaching sessions or programs.
            </p>
            <p>
              7.2 "Confidential Information" means all non-public information that is designated as confidential or that, given the nature of the information or circumstances surrounding its disclosure, reasonably should be understood to be confidential.
            </p>
            <p>
              7.3 You agree not to disclose any Confidential Information of other participants to any third party without express permission.
            </p>

            <h2>8. Testimonials and Reviews</h2>
            <p>
              8.1 By providing a testimonial, review, or case study about our services, you consent to us using your name, likeness, and the content of your review in our marketing materials.
            </p>
            <p>
              8.2 We reserve the right to edit testimonials for clarity, grammar, or length, but will not change the meaning or sentiment of the testimonial.
            </p>

            <h2>9. Service Access and Limitations</h2>
            <p>
              9.1 We do not guarantee that our website or services will be secure or free from bugs or viruses.
            </p>
            <p>
              9.2 We reserve the right to restrict access to some areas of our website, or our entire website, or any of our services, at our discretion.
            </p>
            <p>
              9.3 We cannot guarantee that our services will always be available or uninterrupted. We may suspend, withdraw, discontinue, or change all or any part of our services without notice.
            </p>

            <h2>10. Program Rules and Code of Conduct</h2>
            <p>
              10.1 While participating in our programs, you agree to:
            </p>
            <ul>
              <li>Treat coaches and other participants with respect</li>
              <li>Attend scheduled sessions on time</li>
              <li>Complete agreed-upon action items</li>
              <li>Maintain the confidentiality of materials provided</li>
              <li>Use the services for lawful purposes only</li>
            </ul>
            <p>
              10.2 We reserve the right to terminate your participation in any program if you violate these rules.
            </p>

            <h2>11. Variation</h2>
            <p>
              11.1 We may revise these terms and conditions from time to time.
            </p>
            <p>
              11.2 The revised terms and conditions shall apply to the use of our website and services from the date of publication of the revised terms and conditions on the website.
            </p>

            <h2>12. Assignment</h2>
            <p>
              12.1 You hereby agree that we may assign, transfer, sub-contract or otherwise deal with our rights and/or obligations under these terms and conditions.
            </p>
            <p>
              12.2 You may not without our prior written consent assign, transfer, sub-contract or otherwise deal with any of your rights and/or obligations under these terms and conditions.
            </p>

            <h2>13. Severability</h2>
            <p>
              13.1 If a provision of these terms and conditions is determined by any court or other competent authority to be unlawful and/or unenforceable, the other provisions will continue in effect.
            </p>
            <p>
              13.2 If any unlawful and/or unenforceable provision would be lawful or enforceable if part of it were deleted, that part will be deemed to be deleted, and the rest of the provision will continue in effect.
            </p>

            <h2>14. Law and Jurisdiction</h2>
            <p>
              14.1 These terms and conditions will be governed by and construed in accordance with the laws of Texas, and any disputes relating to these terms and conditions will be subject to the exclusive jurisdiction of the courts of Texas.
            </p>

            <h2>15. Contact Information</h2>
            <p>
              15.1 Poquillo is based in Texas, United States.
            </p>
            <p>
              15.2 You can contact us:
            </p>
            <ul>
              <li>(a) to schedule a conversation: <a href="https://calendly.com/poquillo/30-min" target="_blank" rel="noopener noreferrer">https://calendly.com/poquillo/30-min</a></li>
              <li>(b) through our website: https://poquillo.co</li>
            </ul>

            <h2>16. Blog-Specific Terms</h2>
            <p>
              16.1 <strong>Comments and User-Generated Content</strong>
            </p>
            <ul>
              <li>If you leave comments on our blog, the information you provide (name, email, website, comment content) will be stored in our database</li>
              <li>Comments may be reviewed, edited, or deleted at our sole discretion</li>
              <li>By posting comments, you grant us the right to republish your comments for promotional purposes</li>
              <li>We reserve the right to remove any comments that are offensive, inappropriate, or violate our content guidelines</li>
            </ul>

            <p>
              16.2 <strong>RSS Feeds</strong>
            </p>
            <ul>
              <li>Our blog may offer RSS feeds allowing you to subscribe to content updates</li>
              <li>Information shared through RSS feeds is limited to published content and does not include personal information beyond what appears in the public post</li>
              <li>By subscribing to our RSS feeds, you accept our standard Terms & Conditions</li>
            </ul>

            <p>
              16.3 <strong>Guest Contributors</strong>
            </p>
            <ul>
              <li>If you submit content to our blog as a guest contributor, you retain copyright ownership of your content</li>
              <li>By submitting content, you grant Poquillo a non-exclusive, perpetual, royalty-free license to publish, distribute, and promote your content across our platforms</li>
              <li>Guest contributors are responsible for ensuring their content does not infringe on third-party rights</li>
              <li>We reserve the right to edit guest content for clarity, grammar, or to align with our brand voice</li>
            </ul>

            <p>
              16.4 <strong>Content Monetization</strong>
            </p>
            <ul>
              <li>Our blog may contain affiliate links to products or services we recommend</li>
              <li>We may receive compensation if you purchase products through these links</li>
              <li>All affiliate relationships are disclosed in accordance with FTC guidelines</li>
              <li>Sponsored content will be clearly labeled as such</li>
              <li>We only recommend products or services we believe will provide value to our audience</li>
              <li>Monetization does not influence our editorial integrity or the opinions expressed</li>
            </ul>

            <p><em>Last updated: May 1, 2025</em></p>
            <p>Poquillo</p>
          </div>
        </section>

        <CallToAction
          title="Ready to get clarity in your business?"
          description="Book a call today and let's discuss how we can help you achieve your goals."
          primaryButtonText="Book a Call"
          isExternal={true}
        />
      </main>
      <Footer />
    </>
  );
};

export default TermsConditions;
