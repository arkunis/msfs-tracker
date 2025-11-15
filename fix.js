const fs = require('fs');
const path = require('path');

const files = [
  'app/auth/login/page.tsx',
  'app/company/browse/page.tsx',
  'app/company/create/page.tsx',
  'app/company/[id]/page.tsx',
  'app/components/CreateMissionForm.tsx',
  'app/components/LiveMap.tsx',
  'app/components/NotificationBell.tsx',
  'app/dashboard/page.tsx',
  'app/missions/[id]/page.tsx',
  'app/profile/page.tsx',
  'app/auth/link-launcher/page.tsx'
];

files.forEach(filePath => {
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  Fichier non trouvé: ${filePath}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  
  // Remplacer l'import
  if (!content.includes("import { getSupabaseBrowser }")) {
    content = content.replace(
      /import { createClient } from '@supabase\/supabase-js';/,
      "import { getSupabaseBrowser } from '@/lib/supabase';"
    );
  }

  // Remplacer la déclaration au top-level
  content = content.replace(
    /const supabase = createClient\(\s*process\.env\.NEXT_PUBLIC_SUPABASE_URL!?,\s*process\.env\.NEXT_PUBLIC_SUPABASE_ANON_KEY!?\s*\);/g,
    ''
  );

  // Ajouter le hook dans le composant (après les useState)
  if (!content.includes('const supabase = getSupabaseBrowser()')) {
    // Trouver la première ligne avec useState ou useEffect
    content = content.replace(
      /(export default function \w+\([^)]*\) \{[\s\S]*?)(const \[|useEffect)/,
      '$1const supabase = getSupabaseBrowser();\n    $2'
    );
  }

  fs.writeFileSync(filePath, content);
  console.log(`✅ Corrigé: ${filePath}`);
});

console.log('\n🎉 Tous les fichiers ont été corrigés !');