import React, { useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import { FolderTree, Settings, Play, Terminal } from 'lucide-react';
import { translateRuToEn } from './translator';

export default function ProCode() {
  const [code, setCode] = useState("// Пиши код на русском тут\nфунция старт() {\n  вывод('Привет мир');\n}");
  const [lang, setLang] = useState('javascript');

  const handleEditorChange = (value) => {
    const translated = translateRuToEn(value);
    setCode(translated);
  };

  return (
    <div style={{ display: 'flex', height: '100vh', background: '#1e1e1e', color: '#fff', fontFamily: 'sans-serif' }}>
      <div style={{ width: '50px', background: '#333', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px' }}>
        <FolderTree size={24} style={{ marginBottom: '20px' }} />
        <Settings size={24} />
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <header style={{ padding: '10px', background: '#252526', display: 'flex', justifyContent: 'space-between' }}>
          <span>ProCode IDE - v1.0</span>
          <button style={{ background: '#0e639c', color: 'white', border: 'none', padding: '5px 15px', cursor: 'pointer' }}>
            <Play size={14} /> RUN
          </button>
        </header>
        <Editor
          height="80vh"
          theme="vs-dark"
          language={lang}
          value={code}
          onChange={handleEditorChange}
          options={{ fontSize: 14, minimap: { enabled: true } }}
        />
        <div style={{ height: '20vh', background: '#1e1e1e', borderTop: '1px solid #333', padding: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', opacity: 0.7 }}><Terminal size={14} /> Output</div>
          <pre style={{ color: '#4ec9b0' }}>[System] ProCode Translator Active. Russian input detected...</pre>
        </div>
      </div>
    </div>
  );
}