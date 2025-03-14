export const Tag = ({ tags }:{
    tags: string;
}) => {
    return <span className="bg-purple-200 text-purple-500 rounded-2xl p-1 text-xs mr-2">
        #{tags}
    </span>
}