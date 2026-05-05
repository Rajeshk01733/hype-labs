import { motion } from "framer-motion";

interface Step {
  icon: any;
  title: string;
  desc: string;
}

interface Props {
  title: string;
  intro: string;
  description: string;
  steps: Step[];
  images: string[];
}

const Videography: React.FC<Props> = ({
  title,
  intro,
  description,
  steps,
  images,
}) => {
  return (
    <section className="py-24 px-6 md:px-12 bg-black font-lato">
      <div className="max-w-[1600px] mx-auto rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl p-12 md:p-16">
        {/* TOP */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="flex flex-col gap-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                {title}
              </h2>
              <p className="text-gray-400 mb-6 max-w-xl">{intro}</p>
              <p className="text-white text-lg max-w-xl">{description}</p>
            </motion.div>
            {/* IMAGES */}
            <div className="mt-20">
              <div className="grid grid-cols-2 gap-4 max-w-sm">
                {images.map((img, i) => (
                  <motion.img
                    key={i}
                    src={img}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="rounded-lg h-32 w-full object-cover"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8 md:h-[500px] overflow-y-auto hide-scrollbar scroll-smooth">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-4"
              >
                <step.icon className="text-orange-400 mt-1" size={22} />
                <div>
                  <h4 className="font-semibold hover:text-orange-400">
                    {step.title}
                  </h4>
                  <p className="text-gray-400 text-sm">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Videography;
