import { IBlog, IBlogDetail } from '@/lib/types';
import React from 'react';
import Image from "next/image";
import BlogContent from './components/BlogContent';
import Script from 'next/script';

import { createClient } from '@supabase/supabase-js';

const supabase = createClient('https://urxwxscupryaljaxqpcc.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVyeHd4c2N1cHJ5YWxqYXhxcGNjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIxOTIyMTcsImV4cCI6MjAzNzc2ODIxN30.niE1rxErHOyhiphHwQHnN0Lmtv1tRMZx_ReIzlzc_CM');

async function getBlogDetail(blogId: string): Promise<IBlogDetail | null> {
    const { data: blog, error: blogError } = await supabase
        .from('blog')
        .select('*, blog_content(*), blog_tags(*), tags(*), blog_categories(*), categories(*)')
        .eq('id', blogId)
        .single();

    if (blogError) {
        console.error(blogError);
        return null;
    }

    const tags = blog.blog_tags.map((item: any) => item.tags);
    const categories = blog.blog_categories.map((item: any) => item.categories);

    return {
        ...blog,
        tags,
        categories,
    };
}
async function addTagToBlog(blogId: string, tagId: number) {
    const { error } = await supabase
        .from('blog_tags')
        .insert([{ blog_id: blogId, tag_id: tagId }]);

    if (error) {
        console.error(error);
    }
}

async function addCategoryToBlog(blogId: string, categoryId: number) {
    const { error } = await supabase
        .from('blog_categories')
        .insert([{ blog_id: blogId, category_id: categoryId }]);

    if (error) {
        console.error(error);
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

    const pageUrl = `${process.env.SITE_URL}/blog/${params.id}`;
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
          data-page-title="Blog Post Title"
          
        ></div>
     
     
            <Script
                src="/custom-cusdis.js"
                strategy="afterInteractive"
            />
        </div>
    );
    // c35ca739-0c3f-4308-8196-200b32d0f971
}