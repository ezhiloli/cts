export default function decorate(block) {
  // Get all rows
  const rows = [...block.children];
  
  rows.forEach((row) => {
    const cells = [...row.children];
    
    // Process each cell to wrap content appropriately
    cells.forEach((cell) => {
      // Add specific classes based on content type
      const picture = cell.querySelector('picture');
      const p = cell.querySelector('p');
      
      if (picture) {
        cell.classList.add('header-logo');
      } else if (p) {
        const text = p.textContent.trim();
        if (text === 'Nav') {
          cell.classList.add('nav-toggle');
        } else {
          // These are navigation items
          cell.classList.add('nav-item');
        }
      }
    });
  });
}