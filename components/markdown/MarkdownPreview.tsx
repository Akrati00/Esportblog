import React from 'react';
import Markdown from "react-markdown";
import cn from 'classnames';

export default function MarkdownPreview(
    {content,
     className,
    
 }:{
    content:string;
    className?:string;

}){
    return ( <Markdown className={cn("space-y-6", className)}
        components={{h1:({node, ...props}) => {
        return <h1 {...props} className="text-3xl font-bold" />;
    },
    h2:({node, ...props}) => {
        return <h1 {...props} className="text-2xl font-bold" />;
    },
    h3:({node, ...props}) => {
        return <h1 {...props} className="text-xl font-bold" />;
    },
    }}>
        {content}
    </Markdown>
    
);
}