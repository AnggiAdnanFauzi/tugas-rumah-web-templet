const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src', 'components');

function replaceImports(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceImports(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      let changed = false;
      // Button
      if (content.includes("from './common/Button'") || content.includes("from '../common/Button'")) {
        content = content.replace(/import\s+\{\s*Button\s*\}\s+from\s+['"]\.\/common\/Button['"];?/g, "import { Button } from './ui/button';");
        content = content.replace(/import\s+\{\s*Button\s*\}\s+from\s+['"]\.\.\/common\/Button['"];?/g, "import { Button } from '../ui/button';");
        changed = true;
      }
      // Badge
      if (content.includes("from './common/Badge'") || content.includes("from '../common/Badge'")) {
        content = content.replace(/import\s+\{\s*Badge\s*\}\s+from\s+['"]\.\/common\/Badge['"];?/g, "import { Badge } from './ui/badge';");
        content = content.replace(/import\s+\{\s*Badge\s*\}\s+from\s+['"]\.\.\/common\/Badge['"];?/g, "import { Badge } from '../ui/badge';");
        changed = true;
      }
      // Card
      if (content.includes("from './common/Card'") || content.includes("from '../common/Card'")) {
        content = content.replace(/import\s+\{([^}]+)\}\s+from\s+['"]\.\/common\/Card['"];?/g, "import {} from './ui/card';");
        content = content.replace(/import\s+\{([^}]+)\}\s+from\s+['"]\.\.\/common\/Card['"];?/g, "import {} from '../ui/card';");
        changed = true;
      }
      
      if (changed) {
        fs.writeFileSync(fullPath, content);
      }
    }
  }
}

replaceImports(srcDir);
