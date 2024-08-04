export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      blog: {
        Row: {
          created_at: string;
          id: string;
          image_url: string;
          is_premium: boolean;
          is_published: boolean;
          title: string;
        };
        Insert: {
          created_at?: string;
          id?: string;
          image_url: string;
          is_premium?: boolean;
          is_published?: boolean;
          title: string;
        };
        Update: {
          created_at?: string;
          id?: string;
          image_url?: string;
          is_premium?: boolean;
          is_published?: boolean;
          title?: string;
        };
        Relationships: [];
      };
      blog_content: {
        Row: {
          blog_id: string;
          content: string;
          created_at: string;
        };
        Insert: {
          blog_id: string;
          content: string;
          created_at?: string;
        };
        Update: {
          blog_id?: string;
          content?: string;
          created_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "blog_content_blog_id_fkey";
            columns: ["blog_id"];
            isOneToOne: true;
            referencedRelation: "blog";
            referencedColumns: ["id"];
          },
        ];
      };
      users: {
        Row: {
          created_at: string;
          display_name: string;
          email: string;
          id: string;
          image_url: string;
          role: string;
          stripe_customer_id: string | null;
          stripe_subscription_id: string | null;
          subscription_status: boolean;
        };
        Insert: {
          created_at?: string;
          display_name: string;
          email: string;
          id: string;
          image_url: string;
          role?: string;
          stripe_customer_id?: string | null;
          stripe_subscription_id?: string | null;
          subscription_status?: boolean;
        };
        Update: {
          created_at?: string;
          display_name?: string;
          email?: string;
          id?: string;
          image_url?: string;
          role?: string;
          stripe_customer_id?: string | null;
          stripe_subscription_id?: string | null;
          subscription_status?: boolean;
        };
        Relationships: [];
      };
      tags: {
        Row: {
          id: number;
          name: string;
        };
        Insert: {
          id?: number;
          name: string;
        };
        Update: {
          id?: number;
          name?: string;
        };
        Relationships: [];
      };
      categories: {
        Row: {
          id: number;
          name: string;
        };
        Insert: {
          id?: number;
          name: string;
        };
        Update: {
          id?: number;
          name?: string;
        };
        Relationships: [];
      };
      blog_tags: {
        Row: {
          blog_id: string;
          tag_id: number;
        };
        Insert: {
          blog_id: string;
          tag_id: number;
        };
        Update: {
          blog_id?: string;
          tag_id?: number;
        };
        Relationships: [
          {
            foreignKeyName: "blog_tags_blog_id_fkey";
            columns: ["blog_id"];
            isOneToOne: true;
            referencedRelation: "blog";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "blog_tags_tag_id_fkey";
            columns: ["tag_id"];
            isOneToOne: true;
            referencedRelation: "tags";
            referencedColumns: ["id"];
          },
        ];
      };
      blog_categories: {
        Row: {
          blog_id: string;
          category_id: number;
        };
        Insert: {
          blog_id: string;
          category_id: number;
        };
        Update: {
          blog_id?: string;
          category_id?: number;
        };
        Relationships: [
          {
            foreignKeyName: "blog_categories_blog_id_fkey";
            columns: ["blog_id"];
            isOneToOne: true;
            referencedRelation: "blog";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "blog_categories_category_id_fkey";
            columns: ["category_id"];
            isOneToOne: true;
            referencedRelation: "categories";
            referencedColumns: ["id"];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      is_admin: {
        Args: Record<PropertyKey, never>;
        Returns: boolean;
      };
      is_premium: {
        Args: {
          blog_id: string;
        };
        Returns: boolean;
      };
      is_publish: {
        Args: {
          blog_id: string;
        };
        Returns: boolean;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never;
