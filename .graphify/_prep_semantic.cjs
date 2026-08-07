const fs = require('fs');
const { prepareSemanticDetection } = require('/opt/homebrew/lib/node_modules/graphifyy');

(async () => {
  const detect = JSON.parse(fs.readFileSync('.graphify/.graphify_detect.json', 'utf-8'));
  const analysis = fs.existsSync('.graphify/.graphify_analysis.json')
    ? JSON.parse(fs.readFileSync('.graphify/.graphify_analysis.json', 'utf-8'))
    : null;

  const { detection: semanticDetect, transcriptPaths, pdfArtifacts } = await prepareSemanticDetection(detect, {
    transcriptOutputDir: '.graphify/transcripts',
    pdfOutputDir: '.graphify/converted/pdf',
    godNodes: (analysis && analysis.gods) || [],
  });

  fs.writeFileSync('.graphify/.graphify_detect_semantic.json', JSON.stringify(semanticDetect, null, 2));
  fs.writeFileSync('.graphify/.graphify_transcripts.json', JSON.stringify(transcriptPaths, null, 2));
  fs.writeFileSync('.graphify/.graphify_pdf_ocr.json', JSON.stringify(pdfArtifacts, null, 2));
  console.log('Prepared semantic inputs: ' + transcriptPaths.length + ' transcript(s), ' + pdfArtifacts.filter((item) => item.markdownPath).length + ' PDF sidecar(s)');
})().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
});
