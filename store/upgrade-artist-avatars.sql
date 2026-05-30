-- Upgrade artist avatar URL quality from ?w=200 to ?w=1600&q=90&auto=format&fit=crop
-- Run in Supabase Studio → SQL editor

-- 1. Artists table
UPDATE artists
SET avatar = REPLACE(avatar, '?w=200', '?w=1600&q=90&auto=format&fit=crop')
WHERE avatar LIKE '%images.unsplash.com%?w=200';

-- 2. Songs table (denormalized artist_avatar)
UPDATE songs
SET artist_avatar = REPLACE(artist_avatar, '?w=200', '?w=1600&q=90&auto=format&fit=crop')
WHERE artist_avatar LIKE '%images.unsplash.com%?w=200';

-- Verify
SELECT id, name, avatar FROM artists ORDER BY id;
SELECT DISTINCT artist_id, artist_name, artist_avatar FROM songs ORDER BY artist_id;
