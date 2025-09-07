import { useEffect } from 'react';
import { motion, stagger, useAnimate } from 'framer-motion';

interface TextGenerateEffectProps {
  words: string; // The text to animate
  className?: string; // Optional CSS class for styling
}

export const TextGenerateEffect: React.FC<TextGenerateEffectProps> = ({
  words,
  className = '',
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(' ');
  useEffect(() => {
    animate(
      'span',
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              // change here if idx is greater than 3, change the text color to #CBACF9
              className={` ${
                idx > 1 ? 'text-[#c74c4a]' : 'dark:text-white text-white'
              } opacity-0`}
            >
              {word}{' '}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={`font-bold ${className}`}>
      {/* mt-4 to my-4 */}
      <div className="my-4">
        {/* remove  text-2xl from the original */}
        <div className="text-black leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
