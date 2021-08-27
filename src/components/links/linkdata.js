const LinkData = [
  {
    name: "Effects of caffeine on sleep",
    url: "https://journals.sagepub.com/doi/pdf/10.1177/07487304211013995"
  },
  {
    name: "Makefile quick-reference",
    url: "http://web.mit.edu/gnu/doc/html/make_toc.html"
  },
  {
    name: "Learn OpenGL",
    url: "https://learnopengl.com/"
  },
  {
    name: "OS Development Wiki",
    url: "https://wiki.osdev.org/Expanded_Main_Page"
  },
  {
    name: "Amethyst window manager",
    url: "https://ianyh.com/amethyst/"
  },
  {
    name: "TEDx - Peter Sage on Improvement",
    url: "https://www.youtube.com/watch?v=v1ojZKWfShQ"
  }
];

LinkData.sort((l1, l2) => l1.name > l2.name? 1 : -1) 

export { LinkData };
