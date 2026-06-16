import useInView from "./hooks/useInView";
const Section = ({ bg, children }: any) => {
    const { ref, visible } = useInView();

    return (
        <section
        ref={ref}
        className={`h-screen snap-start flex items-center justify-center ${bg}`}
        >
        <div className={visible ? "bounce-in" : "opacity-0"}>
            {children}
        </div>
        </section>
    );
}
export default Section