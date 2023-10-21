import Link from "next/link"

const Title = ({children, pathTo}) => {
    return (
        <Link href={pathTo} >
            <h1>{children}</h1>
        </Link>
    );
};

export default Title;