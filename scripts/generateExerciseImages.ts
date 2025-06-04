import fs from 'fs';
import path from 'path';

const jsonPath = path.resolve(__dirname, '../assets/data/exercises.json');
const outputPath = path.resolve(__dirname, '../utils/exerciseImages.ts');
const imagesBasePath = '../assets/images';

const raw = fs.readFileSync(jsonPath, 'utf-8');
const data = JSON.parse(raw);

const outputLines: string[] = [];
outputLines.push('export const exerciseImages: Record<string, any[]> = {');

data.forEach((exercise: any) => {
  const id = exercise.id;
  const imagePaths = exercise.images || [];

  if (!id || !imagePaths.length) return;

  const requires = imagePaths.map((img: any) => `require('${imagesBasePath}/${img}')`).join(', ');

  outputLines.push(`  "${id}": [${requires}],`);
});

outputLines.push('};');

fs.writeFileSync(outputPath, outputLines.join('\n'));
console.log('✅ exerciseImages.ts generated.');
