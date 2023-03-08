import 'zx/globals';
import { getReleaseNotes } from './utils/getReleaseNotes';

(async () => {
  const { releaseNotes } = await getReleaseNotes(
    '0.0.5',
    'feature/tag_max_20230307',
  );
  console.log(99999);
  console.log(releaseNotes);
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
