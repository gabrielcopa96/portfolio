enum section {
   portfolio = 'portfolio',
   admin = 'admin',
}

export interface sectionSliceInterface {
   section: section;
   path: "/portfolio" | "/admin";
}