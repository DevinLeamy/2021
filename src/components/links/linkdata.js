const LinkData = [
  {
    name: "Effects of caffeine on sleep",
    url: "https://journals.sagepub.com/doi/pdf/10.1177/07487304211013995"
  },
  {
    name: "Makefile quick-reference",
    url: "http://web.mit.edu/gnu/doc/html/make_toc.html"
  }
];

LinkData.sort((l1, l2) => l1.name > l2.name? 1 : -1) 

export { LinkData };
