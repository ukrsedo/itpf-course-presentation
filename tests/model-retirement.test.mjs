import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const assistant=fs.readFileSync('itpf-course-assistant-worker.js','utf8');
const refresher=fs.readFileSync('course-refresher/worker.js','utf8');
for(const [name,src] of [['assistant',assistant],['refresher',refresher]]){
  test(name+' defaults to a non-retiring supported API model',()=>{
    assert.match(src,/OPENAI_MODEL\s*\|\|\s*["']gpt-5[.]6-terra["']/);
    assert.doesNotMatch(src,/OPENAI_MODEL\s*\|\|\s*["']gpt-5-mini["']/);
    assert.match(src,/https:\/\/api[.]openai[.]com\/v1\/responses/);
  });
  test(name+' defaults to low reasoning and normalizes legacy minimal setting',()=>{
    assert.match(src,/OPENAI_REASONING_EFFORT\s*\|\|\s*["']low["']/);
    assert.match(src,/effort\s*===\s*["']minimal["']\s*\?\s*["']low["']/);
    assert.match(src,/gpt-5\[\.\]6/);
  });
  test(name+' retains explicit OPENAI_MODEL override',()=>{
    assert.match(src,/env[.]OPENAI_MODEL\s*\|\|/);
  });
}
test('source retains slide grounding and response retries',()=>{
  assert.match(assistant,/SLIDE CONTENT/);
  assert.match(assistant,/COURSE TOPIC KNOWLEDGE/);
  assert.match(assistant,/callOpenAI\(2400\)/);
});
test('refresher retains course evidence and retries',()=>{
  assert.match(refresher,/COURSE EVIDENCE/);
  assert.match(refresher,/requestAnswer\(2400\)/);
});
