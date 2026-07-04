import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const isMock = !SUPABASE_URL || !SUPABASE_ANON_KEY;

/**
 * client_queries table schema (create this in your real Supabase project):
 *
 * create table client_queries (
 *   id uuid primary key default gen_random_uuid(),
 *   name text not null,
 *   organization text not null,
 *   email text not null,
 *   investment_tier text not null,
 *   message text,
 *   created_at timestamptz default now()
 * );
 */

// ---- In-memory mock backend (used until real Supabase keys are supplied) ----
const mockUsers = [];
const mockQueries = [];
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const mockClient = {
  auth: {
    async signUp({ email, password, options }) {
      await delay(600);
      if (mockUsers.some((u) => u.email === email)) {
        return { data: null, error: { message: 'An account with this email already exists.' } };
      }
      const user = {
        id: `mock-${mockUsers.length + 1}`,
        email,
        organization: options?.data?.organization ?? '',
        createdAt: new Date().toISOString()
      };
      mockUsers.push({ ...user, password });
      return { data: { user }, error: null };
    },
    async signInWithPassword({ email, password }) {
      await delay(600);
      const match = mockUsers.find((u) => u.email === email && u.password === password);
      if (!match) {
        return { data: null, error: { message: 'Invalid email or password.' } };
      }
      const { password: _pw, ...user } = match;
      return { data: { user }, error: null };
    }
  },
  from(table) {
    return {
      async insert(rows) {
        await delay(500);
        if (table !== 'client_queries') {
          return { data: null, error: { message: `Unknown table: ${table}` } };
        }
        const inserted = rows.map((row, i) => ({
          id: `mock-query-${mockQueries.length + i + 1}`,
          created_at: new Date().toISOString(),
          ...row
        }));
        mockQueries.push(...inserted);
        return { data: inserted, error: null };
      }
    };
  }
};

export const supabase = isMock
  ? mockClient
  : createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
