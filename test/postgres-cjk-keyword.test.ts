import { describe, expect, test } from 'bun:test';
import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../src/core/postgres-engine.ts', import.meta.url), 'utf8');

describe('PostgresEngine CJK keyword fallback', () => {
  test('routes CJK keyword and chunk searches away from english FTS', () => {
    expect(source).toContain("import { hasCJK, escapeLikePattern } from './cjk.ts'");
    expect(source).toContain('if (hasCJK(query))');
    expect(source).toContain('private async _searchKeywordCJK');
    expect(source).toContain("cc.chunk_text ILIKE '%' || $1 || '%' ESCAPE '\\\\'");
    expect(source).toContain('POSITION(LOWER($2) IN LOWER(cc.chunk_text))');
  });

  test('keeps source, visibility, and slug filters on the fallback path', () => {
    expect(source).toContain('p.source_id = ANY');
    expect(source).toContain('p.source_id = $');
    expect(source).toContain('p.slug != ALL');
    expect(source).toContain('buildVisibilityClause');
    expect(source).toContain('buildHardExcludeClause');
  });
});
