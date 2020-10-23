export const useClick = (onClick) => {
    const element = useRef();
    useEffect(() => {
        if (element.current) {
            element.current.addEventListener("mouseenter", onClick);
        }
        return () => {
            if (element.current) {
                element.current.removeEventListener("mouseenter", onClick);
            }
        };
    }, []);
    return element;
};
