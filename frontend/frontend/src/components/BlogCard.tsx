import { Link } from "react-router-dom";

interface BlogCardProps {
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
    id: number;
}

export const BlogCard = ({
    id,
    authorName,
    title,
    content,
    publishedDate
}: BlogCardProps) => {
    return (
        <Link to={`/blog/${id}`} className="block mb-4">
            <div className="p-4 border-b border-gray-200 pb-4 w-screen max-w-screen-md cursor-pointer">
                <div className="flex items-center">
                    <Avatar name={authorName} />
                    <div className="font-light pl-2 text-sm">{authorName}</div>
                    <div className="pl-3"> <Circle /></div>
                   
                    <div className="pl-1 text-gray-500 text-sm">{publishedDate}</div>
                </div>
                <div className="text-xl font-semibold pt-2">{title}</div>
                <div className="text-md font-thin">{content.slice(0, 100) + "..."}</div>
                <div className="text-gray-500 text-sm font-thin pt-4">{`${Math.ceil(content.length / 100)} minute(s) read`}</div>
            </div>
        </Link>
    );
};

export function Circle() {
    return <div className="h-1 w-1 rounded-full bg-gray-500"></div>;
}

export function Avatar({ name, size = "small" }: { name: string; size?: "small" | "big" }) {
    return (
        <div className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-600 rounded-full ${size === "small" ? "w-6 h-6" : "w-10 h-10"}`}>
            <span className={`${size === "small" ? "text-xs" : "text-md"} font-light text-gray-600 dark:text-gray-300`}>
                {name[0]}
            </span>
        </div>
    );
}
