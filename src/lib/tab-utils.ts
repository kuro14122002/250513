/**
 * Sets up navigation tab functionality similar to the provided static JavaScript
 */
export const setupTabFunctionality = () => {
  // Wait for DOM to be fully loaded
  const tabs = document.querySelectorAll('.tab');
  const tabContents = document.querySelectorAll('.tab-content');

  if (tabs.length > 0 && tabContents.length > 0) {
    tabs.forEach(tab => {
      tab.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = (tab as HTMLElement).getAttribute('data-tab') + '-content';
        const targetContent = document.getElementById(targetId);

        if (targetContent) {
          // Update active state for tab
          tabs.forEach(t => t.classList.remove('active'));
          tab.classList.add('active');

          // Hide all tab content and show target content
          tabContents.forEach(content => {
            (content as HTMLElement).style.display = 'none';
          });
          targetContent.style.display = 'block';
        } else {
          console.warn(`Tab content not found for id: ${targetId}`);
        }
      });
    });

    // Activate default tab (if has 'active' class in HTML)
    const activeTab = document.querySelector('.tab.active');
    if (activeTab) {
      const activeTabId = (activeTab as HTMLElement).getAttribute('data-tab') + '-content';
      const activeContent = document.getElementById(activeTabId);
      if (activeContent) {
        tabContents.forEach(content => {
          (content as HTMLElement).style.display = 'none';
        });
        activeContent.style.display = 'block';
      }
    } else if (tabs.length > 0) {
      // If no tab is active, activate the first tab
      tabs[0].classList.add('active');
      const firstTabId = (tabs[0] as HTMLElement).getAttribute('data-tab') + '-content';
      const firstContent = document.getElementById(firstTabId);
      if (firstContent) {
        tabContents.forEach(content => { 
          (content as HTMLElement).style.display = 'none'; 
        });
        firstContent.style.display = 'block';
      }
    }
  }
};

/**
 * Sets up smooth scrolling for navigation links
 */
export const setupSmoothScrolling = () => {
  const navLinks = document.querySelectorAll('.main-nav a');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = (link as HTMLAnchorElement).getAttribute('href');
      // Only process links starting with # and not just #
      if (href && href.startsWith('#') && href.length > 1) {
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          e.preventDefault(); // Prevent default behavior only when target exists
          const header = document.querySelector('header');
          const headerOffset = header ? header.offsetHeight : 80; // Dynamically get header height
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });
};

/**
 * Animates counter elements with numeric values
 */
export const setupCounterAnimation = () => {
  const statNumbers = document.querySelectorAll('.stat-number');
  let countersAnimated = false;

  // Function to animate counters
  const animateCounters = () => {
    if (countersAnimated) return;
    countersAnimated = true;

    statNumbers.forEach(statNumber => {
      const originalValueString = (statNumber as HTMLElement).dataset.targetValue || statNumber.textContent || '0';
      
      if (!(statNumber as HTMLElement).dataset.targetValue) {
        (statNumber as HTMLElement).dataset.targetValue = originalValueString;
      }

      let valueStringForParsing = originalValueString.trim();
      let suffix = '';
      
      if (valueStringForParsing.endsWith('%')) {
        suffix = '%';
        valueStringForParsing = valueStringForParsing.slice(0, -1).trim();
      } else if (valueStringForParsing.endsWith(' ha')) {
        suffix = ' ha';
        valueStringForParsing = valueStringForParsing.slice(0, -3).trim();
      }

      valueStringForParsing = valueStringForParsing.replace(/,/g, '.');
      const target = parseFloat(valueStringForParsing) || 0;

      let fractionDigits = 0;
      if (valueStringForParsing.includes('.')) {
        fractionDigits = valueStringForParsing.split('.')[1]?.length || 0;
      }

      const duration = 1500;
      const frameDuration = 1000 / 60;
      const totalFrames = Math.round(duration / frameDuration);
      let frame = 0;
      let currentCount = 0;

      statNumber.textContent = '0' + suffix;

      const counterInterval = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        currentCount = target * progress;

        if (frame >= totalFrames) {
          const finalFormatted = target.toLocaleString(undefined, {
            minimumFractionDigits: fractionDigits,
            maximumFractionDigits: fractionDigits
          });
          statNumber.textContent = finalFormatted + suffix;
          clearInterval(counterInterval);
        } else {
          const displayCount = Math.round(currentCount);
          statNumber.textContent = displayCount.toLocaleString(undefined, { 
            maximumFractionDigits: 0 
          }) + suffix;
        }
      }, frameDuration);
    });
  };

  // Set up Intersection Observer for counter animation
  const statisticsSection = document.querySelector('.statistics');
  
  if ('IntersectionObserver' in window && statisticsSection) {
    const observer = new IntersectionObserver((entries, observerInstance) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters();
          observerInstance.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.2
    });
    
    observer.observe(statisticsSection);
  } else {
    // Fallback if IntersectionObserver not supported
    animateCounters();
  }
};

// Combined setup function
export const initializeDsezaScripts = () => {
  document.addEventListener('DOMContentLoaded', () => {
    setupTabFunctionality();
    setupSmoothScrolling();
    setupCounterAnimation();
  });
};

export default initializeDsezaScripts; 