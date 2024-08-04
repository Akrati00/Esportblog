export type ITag = {
        id: number;
        name: string;
    };
    
    export type ICategory = {
        id: number;
        name: string;
    };
    
    export type IBlogDetail = {
        created_at: string;
        id: string;
        image_url: string;
        is_premium: boolean;
        is_published: boolean;
        title: string;
        blog_content: {
            blog_id: string;
            content: string;
            created_at: string;
        } | null;
        tags: ITag[];
        categories: ICategory[];
    } | null;
    
    export type IBlog = {
        created_at: string;
        id: string;
        image_url: string;
        is_premium: boolean;
        is_published: boolean;
        title: string;
        tags: ITag[];
        categories: ICategory[];
    } | null;
    
    export type Iuser = {
        created_at: string;
        display_name: string;
        email: string;
        id: string;
        image_url: string;
        role: string;
        stripe_customer_id: string | null;
        stripe_subscription_id: string | null;
        subscription_status: boolean;
    } | null;
    