-- ============================================================
-- Saha Malzeme Takip - Supabase Tablo Şeması
-- Bu SQL'i Supabase Dashboard > SQL Editor'da çalıştırın
-- ============================================================

-- ─── Alet Modülü ────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS alet_items (
  id TEXT PRIMARY KEY,
  data JSONB NOT NULL DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE alet_items DISABLE ROW LEVEL SECURITY;

-- ─── Saha Modülü ────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS saha_panels (
  id TEXT PRIMARY KEY,
  data JSONB NOT NULL DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE saha_panels DISABLE ROW LEVEL SECURITY;

CREATE TABLE IF NOT EXISTS saha_lines (
  id TEXT PRIMARY KEY,
  data JSONB NOT NULL DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE saha_lines DISABLE ROW LEVEL SECURITY;

CREATE TABLE IF NOT EXISTS saha_sockets (
  id TEXT PRIMARY KEY,
  data JSONB NOT NULL DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE saha_sockets DISABLE ROW LEVEL SECURITY;

CREATE TABLE IF NOT EXISTS saha_settings (
  key TEXT PRIMARY KEY,
  value TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE saha_settings DISABLE ROW LEVEL SECURITY;

-- ─── Rapor Modülü ───────────────────────────────────────────
CREATE TABLE IF NOT EXISTS rapor_entries (
  id TEXT PRIMARY KEY,
  data JSONB NOT NULL DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE rapor_entries DISABLE ROW LEVEL SECURITY;

CREATE TABLE IF NOT EXISTS rapor_ekipler (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE rapor_ekipler DISABLE ROW LEVEL SECURITY;

-- ─── Geçici Modülü ──────────────────────────────────────────
CREATE TABLE IF NOT EXISTS gecici_lib (
  id TEXT PRIMARY KEY,
  data JSONB NOT NULL DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE gecici_lib DISABLE ROW LEVEL SECURITY;

CREATE TABLE IF NOT EXISTS gecici_moves (
  id TEXT PRIMARY KEY,
  data JSONB NOT NULL DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE gecici_moves DISABLE ROW LEVEL SECURITY;

CREATE TABLE IF NOT EXISTS gecici_orders (
  id TEXT PRIMARY KEY,
  data JSONB NOT NULL DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE gecici_orders DISABLE ROW LEVEL SECURITY;

-- ─── Proje Modülü ───────────────────────────────────────────
CREATE TABLE IF NOT EXISTS proje_buildings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  code TEXT NOT NULL UNIQUE,
  sort_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE proje_buildings DISABLE ROW LEVEL SECURITY;

CREATE TABLE IF NOT EXISTS proje_sections (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  sort_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE proje_sections DISABLE ROW LEVEL SECURITY;

CREATE TABLE IF NOT EXISTS proje_sartnames (
  id TEXT PRIMARY KEY,
  data JSONB NOT NULL DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE proje_sartnames DISABLE ROW LEVEL SECURITY;

CREATE TABLE IF NOT EXISTS proje_materials (
  id TEXT PRIMARY KEY,
  data JSONB NOT NULL DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE proje_materials DISABLE ROW LEVEL SECURITY;

CREATE TABLE IF NOT EXISTS proje_specs (
  id TEXT PRIMARY KEY,
  data JSONB NOT NULL DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE proje_specs DISABLE ROW LEVEL SECURITY;

CREATE TABLE IF NOT EXISTS proje_items (
  id TEXT PRIMARY KEY,
  data JSONB NOT NULL DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE proje_items DISABLE ROW LEVEL SECURITY;

CREATE TABLE IF NOT EXISTS proje_orders (
  id TEXT PRIMARY KEY,
  data JSONB NOT NULL DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE proje_orders DISABLE ROW LEVEL SECURITY;

-- ─── Denetim Kaydı ──────────────────────────────────────────
CREATE TABLE IF NOT EXISTS audit_log (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  data JSONB NOT NULL DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE audit_log DISABLE ROW LEVEL SECURITY;

-- ─── Uygulama Ayarları (migration flags vs) ─────────────────
CREATE TABLE IF NOT EXISTS app_settings (
  key TEXT PRIMARY KEY,
  value JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE app_settings DISABLE ROW LEVEL SECURITY;
