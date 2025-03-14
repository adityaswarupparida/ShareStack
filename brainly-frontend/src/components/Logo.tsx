export const Logo = ({
    height,
    width,
    className
}: {
    height: number;
    width: number;
    className: string;
}) => {
    return (
        <div className={`${className}`}>
            <img
                className={`${className}`}
                src="/src/assets/logo.svg"
                alt="Infinite-Brain Logo"
                width={width}
                height={height}
            ></img>
        </div>
    );
}