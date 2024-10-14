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
        <div className="space-y-8 ">
          <div className="w-[400px]  relative font-bold text-start">


            <div className="text-5xl w-[400px] font-bold text-start text-neutral-900 max-md:max-w-full max-md:text-4xl ">
              About Us
              <div className="flex items-center justify-start absolute ">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="120"
                  height="4"
                  viewBox="0 0 120 4"
                  fill="none"
                >
                  <path d="M2 2H118" stroke="#B00010" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Quality Over Quantity</h3>
            <p className="text-gray-600">
              In the digital realm, we as Digital Media Africa, our strong emphasis is on always delivering exceptional value to consumers through impactful and targeted messaging.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Meaningful Engagement</h3>
            <p className="text-gray-600">
              By focusing on crafting meaningful and engaging content, we aim to cut through the clutter of information overload and effectively capture the attention of our client&apos;s target audience.
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
