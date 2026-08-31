export type { Database, UserRole, Json } from "./database";

export interface Post {
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
  categories?: PostCategory[];
  author?: Profile;
}

export interface PostCategory {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  sort_order: number;
}

export interface Profile {
  id: string;
  email: string;
  full_name: string | null;
  avatar_url: string | null;
  bio: string | null;
  is_active: boolean;
}

export interface LibraryItem {
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
  category?: LibraryCategory;
}

export interface LibraryCategory {
  id: string;
  name: string;
  slug: string;
  sort_order: number;
}

export interface Publication {
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
  author?: Profile;
}

export interface Event {
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
}

export interface Invitation {
  id: string;
  email: string;
  token: string;
  invited_by: string;
  expires_at: string;
  used_at: string | null;
  created_at: string;
}

export interface ContactMessage {
  id: string;
  full_name: string;
  email: string;
  subject: string;
  message: string;
  is_read: boolean;
  created_at: string;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  author_id: string;
  is_pinned: boolean;
  created_at: string;
  author?: Profile;
}

export interface SiteSetting {
  id: string;
  key: string;
  value: Record<string, unknown>;
}

export interface AuditLog {
  id: string;
  user_id: string;
  action: string;
  entity_type: string;
  entity_id: string | null;
  details: Record<string, unknown> | null;
  created_at: string;
  user?: Profile;
}
