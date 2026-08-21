import { jsPDF } from 'jspdf';
import fs from 'fs';
import path from 'path';

function generateResume() {
  // Create standard US Letter / A4 portrait PDF (210 x 297 mm)
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'pt',
    format: 'letter' // 612 x 792 pt
  });

  const pageWidth = 612;
  const pageHeight = 792;
  const leftMargin = 38;
  const rightMargin = 574; // 612 - 38
  const contentWidth = rightMargin - leftMargin;

  let y = 38;

  // Header - Name
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(0, 0, 0);
  doc.text('GADOT, SHEM ANDRE I.', pageWidth / 2, y, { align: 'center' });

  // Title
  y += 18;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
  doc.setTextColor(30, 30, 30);
  doc.text('Video Editor / Motion Graphics Designer', pageWidth / 2, y, { align: 'center' });

  // Contact Info Line 1
  y += 14;
  doc.setFontSize(9.5);
  doc.setTextColor(50, 50, 50);
  doc.text('gadot.shem@gmail.com | +63 935 028 2793', pageWidth / 2, y, { align: 'center' });

  // Contact Info Line 2
  y += 13;
  doc.text('Iligan City, Philippines 9200 | https://gadotshem-portfolio.vercel.app', pageWidth / 2, y, { align: 'center' });

  // Section divider helper
  const drawSectionHeader = (title: string, topY: number) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11.5);
    doc.setTextColor(0, 0, 0);
    doc.text(title, leftMargin, topY);
    
    doc.setDrawColor(0, 0, 0);
    doc.setLineWidth(0.75);
    doc.line(leftMargin, topY + 4, rightMargin, topY + 4);
    return topY + 16;
  };

  // --- SUMMARY ---
  y += 16;
  y = drawSectionHeader('SUMMARY', y);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.2);
  doc.setTextColor(30, 30, 30);
  const summaryText = 'Lead Motion Designer and Video Editor with over 5 years of hands-on experience in Adobe Premiere Pro, After Effects, and Photoshop. Specialized in crafting SaaS explainers, Clean graphics and typography for social media, branded content, and music videos. Comfortable working solo or collaboratively within a team to deliver clean, engaging, and on-brand results.';
  const splitSummary = doc.splitTextToSize(summaryText, contentWidth);
  doc.text(splitSummary, leftMargin, y, { lineHeightFactor: 1.35 });
  y += splitSummary.length * 12.5 + 6;

  // --- TECHNICAL SKILLS ---
  y = drawSectionHeader('TECHNICAL SKILLS', y);
  
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(20, 20, 20);
  
  // Bullet items on single line
  const skillsLine = '•  Cinematic Direction   •  Motion Design   •  Sound Design   •  Color Grading   •  Kinetic Typography';
  doc.text(skillsLine, leftMargin + 6, y);
  y += 16;

  // --- RECENT PROFESSIONAL EXPERIENCE ---
  y = drawSectionHeader('RECENT PROFESSIONAL EXPERIENCE', y);

  // Experience 1: KITATRACKER
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  doc.text('KITATRACKER | Lead Motion Designer', leftMargin, y);
  doc.text('June 2026', rightMargin, y, { align: 'right' });
  y += 13;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(30, 30, 30);

  const exp1Bullets = [
    'Directing end-to-end visual design: Motion graphics, kinetic typography, and visual storytelling for a B2B SaaS platform product launch',
    'Establishing video design systems: Building a scalable, brand-aligned visual pipeline to streamline the future production of product demo videos and feature rollouts.',
    'Utilizing advanced Adobe After Effects and Premiere Pro workflows to translate software mechanics into accessible marketing content.'
  ];

  for (const b of exp1Bullets) {
    const splitB = doc.splitTextToSize(b, contentWidth - 16);
    doc.text('•', leftMargin + 10, y);
    doc.text(splitB, leftMargin + 20, y, { lineHeightFactor: 1.3 });
    y += splitB.length * 11.5 + 3;
  }
  y += 4;

  // Experience 2: WAFFLES AND WHATNOT
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  doc.text('WAFFLES AND WHATNOT | Lead Motion Designer', leftMargin, y);
  doc.text('March 2026 - May 2026', rightMargin, y, { align: 'right' });
  y += 13;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(30, 30, 30);

  const exp2Bullets = [
    'Part of a team in creating an 8-chapter course, with over 80 long-form videos for WAWN University, focusing on core values, operational methods, accounting, and restaurant management.',
    'Utilized AI-Tools for asset generation, voiceovers, and b-rolls',
    'Created Animations and Typography for presentations and formula-focused scenes.'
  ];

  for (const b of exp2Bullets) {
    const splitB = doc.splitTextToSize(b, contentWidth - 16);
    doc.text('•', leftMargin + 10, y);
    doc.text(splitB, leftMargin + 20, y, { lineHeightFactor: 1.3 });
    y += splitB.length * 11.5 + 3;
  }
  y += 4;

  // Experience 3: VONUBABY
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  doc.text('VONUBABY | Lead Video Editor', leftMargin, y);
  doc.text('November 2025 - January 2026', rightMargin, y, { align: 'right' });
  y += 13;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(30, 30, 30);

  const exp3Bullets = [
    'Edited high-performing ads for Meta optimized to gain retention, site-visits and revenue.',
    'Designed graphics and images for Google PMAX and Amazon listings.',
    'Integrated the use of AI-tools such as Sora 2 and Nanobanana to generate 3D visuals and images for brand assets and B-roll'
  ];

  for (const b of exp3Bullets) {
    const splitB = doc.splitTextToSize(b, contentWidth - 16);
    doc.text('•', leftMargin + 10, y);
    doc.text(splitB, leftMargin + 20, y, { lineHeightFactor: 1.3 });
    y += splitB.length * 11.5 + 3;
  }
  y += 4;

  // Experience 4: BRANDED AND BUILT
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  doc.text('BRANDED AND BUILT | Lead Motion Designer', leftMargin, y);
  doc.text('July 2025 - October 2025', rightMargin, y, { align: 'right' });
  y += 13;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(30, 30, 30);

  const exp4Bullets = [
    'Boosted viewer retention by 20% by creating animated explainers that capture audience’s attention',
    'Created social media lower thirds that increased subscriber count by 10% per video',
    'Designed YouTube outros that drove 15% increase in engagement on various social media platforms'
  ];

  for (const b of exp4Bullets) {
    const splitB = doc.splitTextToSize(b, contentWidth - 16);
    doc.text('•', leftMargin + 10, y);
    doc.text(splitB, leftMargin + 20, y, { lineHeightFactor: 1.3 });
    y += splitB.length * 11.5 + 3;
  }
  y += 4;

  // --- SOFTWARES ---
  y = drawSectionHeader('SOFTWARES', y);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(20, 20, 20);
  const softwaresLine = '•  Adobe Premiere Pro   •  Adobe After Effects   •  Adobe Photoshop   •  Figma';
  doc.text(softwaresLine, leftMargin + 6, y);
  y += 16;

  // --- EDUCATION ---
  y = drawSectionHeader('EDUCATION', y);
  
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  doc.text('Undergraduate', leftMargin, y);
  doc.text('2021-2024', rightMargin, y, { align: 'right' });
  y += 13;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(30, 30, 30);
  doc.text('Mindanao State University - Iligan Institute of Technology', leftMargin, y);
  doc.text('Iligan City Philippines', rightMargin, y, { align: 'right' });
  y += 13;

  doc.text('Civil Engineering', leftMargin, y);
  y += 16;

  // --- LANGUAGES ---
  y = drawSectionHeader('LANGUAGES', y);
  
  const langs = [
    { lang: 'English', level: 'C2' },
    { lang: 'Filipino', level: 'Native' },
    { lang: 'Cebuano', level: 'Native' }
  ];

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(30, 30, 30);

  for (const l of langs) {
    doc.text(l.lang, leftMargin, y);
    doc.text(l.level, rightMargin, y, { align: 'right' });
    y += 13.5;
  }

  const outputDir = path.resolve('public');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  const outputPath = path.join(outputDir, 'Shem_Andre_Gadot_Resume.pdf');
  const buffer = Buffer.from(doc.output('arraybuffer'));
  fs.writeFileSync(outputPath, buffer);
  console.log(`Generated resume PDF successfully at ${outputPath}, size: ${buffer.length} bytes`);
}

generateResume();
