// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/convert-html-entities

// Intermediate Algorithm Scripting: Convert HTML Entities
// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

// convertHTML("Dolce & Gabbana") should return "Dolce &amp; Gabbana".
// convertHTML("Hamburgers < Pizza < Tacos") should return "Hamburgers &lt; Pizza &lt; Tacos".
// convertHTML("Sixty > twelve") should return "Sixty &gt; twelve".
// convertHTML('Stuff in "quotation marks"') should return "Stuff in &quot;quotation marks&quot;".
// convertHTML("Schindler's List") should return "Schindler&apos;s List".
// convertHTML("<>") should return "&lt;&gt;".
// convertHTML("abc") should return "abc".

function convertHTML(str) {

    const escapeHTML = str => str.replace(/[&<>'"]/g, 
    tag => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&apos;',
        '"': '&quot;'
      }[tag]));
  
      return escapeHTML(str);
  }
  
  convertHTML("Schindler's List");
  