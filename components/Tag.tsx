import React from "react";

interface Props {
    tech: string
}

const Tag: React.FC<Props> = ({tech}): JSX.Element => {
    return (
    <div className="bg-white px-2 p-1 rounded-xl mr-4">
        {tech}
    </div>
    )
}

export default Tag