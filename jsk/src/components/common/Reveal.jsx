import {motion} from 'framer-motion';
export default function Reveal({children,className=''}){
  return <motion.div className={className} initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'-60px'}} transition={{duration:.45}}>{children}</motion.div>;
}
export const Heading=({title,sub,id})=>(
  <div className="mb-10 max-w-2xl"><span className="mb-3 block h-1 w-12 rounded bg-saffron"/><h2 id={id} className="text-2xl font-bold text-navy sm:text-4xl">{title}</h2>{sub&&<p className="mt-3 text-lg">{sub}</p>}</div>
);
