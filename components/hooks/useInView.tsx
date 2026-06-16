import { useEffect, useRef, useState } from "react";

const  useInView=() =>{
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
    }, { threshold: 0.6 });

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}
export default useInView