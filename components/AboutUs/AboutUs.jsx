import Image from 'next/image';
// import aboutImage from '../public/image.png'; // Assuming the image is placed in the public folder

const AboutUs = () => {
  return (
    <section className="py-16 px-8 lg:px-32 bg-white">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        {/* Image Section */}
        <div className="relative">
          <div className="border-4 border-red-600">
            {/* <Image src={aboutImage} alt="About Us" layout="responsive" /> */}
          </div>
        </div>

        {/* Text Section */}
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-gray-900">About Us</h2>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Quality Over Quantity</h3>
            <p className="text-gray-600">
              In the digital realm, we as Digital Media Africa, our strong emphasis is on always delivering exceptional value to consumers through impactful and targeted messaging.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Meaningful Engagement</h3>
            <p className="text-gray-600">
              By focusing on crafting meaningful and engaging content, we aim to cut through the clutter of information overload and effectively capture the attention of our client's target audience.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Digital Minimalism</h3>
            <p className="text-gray-600">
              Our strategy aligns perfectly with the growing trend of digital minimalism, which prioritizes simplicity, clarity, and intentionality in digital engagement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
