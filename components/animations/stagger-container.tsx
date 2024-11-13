import { motion } from 'framer-motion';

export function StaggerContainer({ 
  children,
  delay = 0,
  className = "",
}: { 
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
            delayChildren: delay
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}