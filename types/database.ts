export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type UserRole = "SUPER_ADMIN" | "ADMIN" | "EDITOR" | "MODERATOR" | "MEMBER";

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          email: string;
          full_name: string | null;
          avatar_url: string | null;
          bio: string | null;
          is_active: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          email: string;
          full_name?: string | null;
          avatar_url?: string | null;
          bio?: string | null;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          full_name?: string | null;
          avatar_url?: string | null;
          bio?: string | null;
          is_active?: boolean;
          updated_at?: string;
        };
      };
      roles: {
        Row: {
          id: string;
          name: UserRole;
          description: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: UserRole;
          description?: string | null;
        };
        Update: {
          name?: UserRole;
          description?: string | null;
        };
      };
      user_roles: {
        Row: {
          id: string;
          user_id: string;
          role_id: string;
          assigned_by: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          role_id: string;
          assigned_by?: string | null;
        };
        Update: {
          user_id?: string;
          role_id?: string;
          assigned_by?: string | null;
        };
      };
      invitations: {
        Row: {
          id: string;
          email: string;
          token: string;
          invited_by: string;
          expires_at: string;
          used_at: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          email: string;
          token: string;
          invited_by: string;
          expires_at: string;
          used_at?: string | null;
        };
        Update: {
          used_at?: string | null;
        };
      };
      posts: {
        Row: {
          id: string;
          title: string;
          slug: string;
          excerpt: string | null;
          content: string | null;
          cover_image: string | null;
          author_id: string;
          is_published: boolean;
          is_members_only: boolean;
          reading_time: number | null;
          published_at: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          slug: string;
          excerpt?: string | null;
          content?: string | null;
          cover_image?: string | null;
          author_id: string;
          is_published?: boolean;
          is_members_only?: boolean;
          reading_time?: number | null;
          published_at?: string | null;
        };
        Update: {
          title?: string;
          slug?: string;
          excerpt?: string | null;
          content?: string | null;
          cover_image?: string | null;
          is_published?: boolean;
          is_members_only?: boolean;
          reading_time?: number | null;
          published_at?: string | null;
          updated_at?: string;
        };
      };
      post_categories: {
        Row: {
          id: string;
          name: string;
          slug: string;
          description: string | null;
          sort_order: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          slug: string;
          description?: string | null;
          sort_order?: number;
        };
        Update: {
          name?: string;
          slug?: string;
          description?: string | null;
          sort_order?: number;
        };
      };
      post_category_relations: {
        Row: {
          post_id: string;
          category_id: string;
        };
        Insert: {
          post_id: string;
          category_id: string;
        };
        Update: {
          post_id?: string;
          category_id?: string;
        };
      };
      library_items: {
        Row: {
          id: string;
          title: string;
          author_name: string;
          description: string | null;
          cover_image: string | null;
          category_id: string | null;
          language: string;
          pdf_url: string | null;
          external_url: string | null;
          is_published: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          author_name: string;
          description?: string | null;
          cover_image?: string | null;
          category_id?: string | null;
          language?: string;
          pdf_url?: string | null;
          external_url?: string | null;
          is_published?: boolean;
        };
        Update: {
          title?: string;
          author_name?: string;
          description?: string | null;
          cover_image?: string | null;
          category_id?: string | null;
          language?: string;
          pdf_url?: string | null;
          external_url?: string | null;
          is_published?: boolean;
          updated_at?: string;
        };
      };
      library_categories: {
        Row: {
          id: string;
          name: string;
          slug: string;
          sort_order: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          slug: string;
          sort_order?: number;
        };
        Update: {
          name?: string;
          slug?: string;
          sort_order?: number;
        };
      };
      publications: {
        Row: {
          id: string;
          title: string;
          slug: string;
          description: string | null;
          cover_image: string | null;
          pdf_url: string | null;
          type: string;
          author_id: string;
          is_published: boolean;
          published_at: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          slug: string;
          description?: string | null;
          cover_image?: string | null;
          pdf_url?: string | null;
          type?: string;
          author_id: string;
          is_published?: boolean;
          published_at?: string | null;
        };
        Update: {
          title?: string;
          slug?: string;
          description?: string | null;
          cover_image?: string | null;
          pdf_url?: string | null;
          type?: string;
          is_published?: boolean;
          published_at?: string | null;
          updated_at?: string;
        };
      };
      events: {
        Row: {
          id: string;
          title: string;
          slug: string;
          description: string | null;
          cover_image: string | null;
          event_type: string;
          event_date: string;
          event_time: string | null;
          location: string | null;
          is_online: boolean;
          online_url: string | null;
          registration_url: string | null;
          capacity: number | null;
          is_members_only: boolean;
          is_published: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          slug: string;
          description?: string | null;
          cover_image?: string | null;
          event_type?: string;
          event_date: string;
          event_time?: string | null;
          location?: string | null;
          is_online?: boolean;
          online_url?: string | null;
          registration_url?: string | null;
          capacity?: number | null;
          is_members_only?: boolean;
          is_published?: boolean;
        };
        Update: {
          title?: string;
          slug?: string;
          description?: string | null;
          cover_image?: string | null;
          event_type?: string;
          event_date?: string;
          event_time?: string | null;
          location?: string | null;
          is_online?: boolean;
          online_url?: string | null;
          registration_url?: string | null;
          capacity?: number | null;
          is_members_only?: boolean;
          is_published?: boolean;
          updated_at?: string;
        };
      };
      event_registrations: {
        Row: {
          id: string;
          event_id: string;
          user_id: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          event_id: string;
          user_id: string;
        };
        Update: {};
      };
      favorites: {
        Row: {
          id: string;
          user_id: string;
          item_type: string;
          item_id: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          item_type: string;
          item_id: string;
        };
        Update: {};
      };
      announcements: {
        Row: {
          id: string;
          title: string;
          content: string;
          author_id: string;
          is_pinned: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          content: string;
          author_id: string;
          is_pinned?: boolean;
        };
        Update: {
          title?: string;
          content?: string;
          is_pinned?: boolean;
          updated_at?: string;
        };
      };
      pages: {
        Row: {
          id: string;
          slug: string;
          title: string;
          content: string | null;
          meta_description: string | null;
          is_published: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          slug: string;
          title: string;
          content?: string | null;
          meta_description?: string | null;
          is_published?: boolean;
        };
        Update: {
          slug?: string;
          title?: string;
          content?: string | null;
          meta_description?: string | null;
          is_published?: boolean;
          updated_at?: string;
        };
      };
      site_settings: {
        Row: {
          id: string;
          key: string;
          value: Json;
          updated_at: string;
        };
        Insert: {
          id?: string;
          key: string;
          value: Json;
        };
        Update: {
          key?: string;
          value?: Json;
          updated_at?: string;
        };
      };
      contact_messages: {
        Row: {
          id: string;
          full_name: string;
          email: string;
          subject: string;
          message: string;
          is_read: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          full_name: string;
          email: string;
          subject: string;
          message: string;
          is_read?: boolean;
        };
        Update: {
          is_read?: boolean;
        };
      };
      audit_logs: {
        Row: {
          id: string;
          user_id: string;
          action: string;
          entity_type: string;
          entity_id: string | null;
          details: Json | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          action: string;
          entity_type: string;
          entity_id?: string | null;
          details?: Json | null;
        };
        Update: {};
      };
      notifications: {
        Row: {
          id: string;
          user_id: string;
          title: string;
          message: string;
          type: string;
          is_read: boolean;
          link: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          title: string;
          message: string;
          type?: string;
          is_read?: boolean;
          link?: string | null;
        };
        Update: {
          is_read?: boolean;
        };
      };
    };
    Views: {};
    Functions: {};
    Enums: {};
  };
}
