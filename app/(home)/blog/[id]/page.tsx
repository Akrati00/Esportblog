import { IBlog, IBlogDetail } from '@/lib/types';
import React from 'react';
import Image from "next/image";
import BlogContent from './components/BlogContent';
import Script from 'next/script';

import { createClient } from '@supabase/supabase-js';

export async function generateStaticParams(){
    const {data:blog}= (await fetch(`${process.env.SITE_URL}/api/blog?id=*`).then((res) => res.json()));
    return blog;
}

export async function generateMetadata({params}:{params:{id:string}}){
    const {data:blog}= (await fetch(`${process.env.SITE_URL}/api/blog?id=${params.id}`).then((res) => res.json())) as {data: IBlog};

    return {
        title:blog?.title,
        authors:{
            name:"Esport Blog"
        },
        openGraph:{
            title:blog?.title,
            url:`${process.env.PROD_URL}/blog/${params.id}`,
            siteName:"Esports blog",
            images:[
                {
                    url: blog?.image_url,
                },
            ],
            type:"website"
        },
        keywords:['Esports',"Sports Blog"],
        description: blog?.description || "Default description here" 
    }
}

export default async function Page({ params }: { params: { id: string } }) {
    let blog: IBlog | null = null;
    try {
        const response = await fetch(`${process.env.SITE_URL}/api/blog?id=${params.id}`);
        const result = await response.json();
        blog = result.data;
    } catch (error) {
        console.error("Failed to fetch blog:", error);
    }

    if (!blog?.id) {
        return <h1>Not found</h1>;
    }

    const pageUrl = `${process.env.PROD_URL}/blog/${params.id}`;
    const pageTitle = blog.title;

    return (
        <div className="max-w-5xl mx-auto min-h-screen pt-10 space-y-10">
            <div className="sm:px-10 space-y-5">
                <h1 className="text-3xl font-bold">{blog.title}</h1>
                <p className="text-sm text-gray-400">{new Date(blog.created_at || "").toDateString()}</p>
            </div>

            <div className="w-full h-96 relative">
                <Image 
                    priority
                    src={blog.image_url || "/"}
                    alt="cover"
                    fill
                    className="object-cover object-center rounded-md border"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>

            <BlogContent blogId={blog.id} />

            <div
              id="cusdis_thread"
              data-host="https://cusdis.com"
              data-app-id="69d68d15-cbfe-42d1-a655-731d7509f4e5"
              data-page-id={params.id}
              data-page-url={`http://localhost:3000/blog/${params.id}`}
              data-page-title={pageTitle}
            ></div>

            <Script
                src="/custom-cusdis.js"
                strategy="afterInteractive"
            />
        </div>
    );
}
