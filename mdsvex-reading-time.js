// https://github.com/pngwn/MDsveX/issues/455#issuecomment-1336534743

import { visit } from 'unist-util-visit';
import getReadingTime from 'reading-time';

export default function readingTime(options = { wordsPerMinute: 200 }) {
  return (tree, file) => {
    let text = '';
    visit(tree, ['text', 'code'], (node) => {
      text += node.value;
    });

    const readingStats = getReadingTime(text, options);
    file.data.fm = { ...file.data.fm, readingStats };
    // console.log(file.data);
    // visit(tree, ['yaml'], (node) => {
    //   node.value +=
    //     `\nreadingTime: ${readingStats.minutes}\n` + `wordsCount: ${readingStats.words}\n`;
    //   console.log(node);
    // });
    // visit(tree, ['yaml', 'toml'], (node) => {
    //   node.value +=
    //     `\nreadingTime: ${readingStats.minutes}\n` + `wordsCount: ${readingStats.words}`;
    //   // console.log(node);
    // });
  };
}