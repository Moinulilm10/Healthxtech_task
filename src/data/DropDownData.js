export const dropdownData = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Products",
    icon: true,
    submenu: [
      {
        title: "Daily",
        path: "/products/Daily",
      },
      {
        title: "Luxury",
        path: "/products/Luxury",
      },
      {
        title: "Comfortable",
        path: "/products/Comfortable",
      },
    ],
  },
  {
    title: "Categories",
    icon: true,
    submenu: [
      {
        title: "Fashion Collection",
        submenu: [
          {
            title: "Mens Clothing Collections",
            submenu: [
              {
                title: "T-Shirts",
                path: "/categories/fashion-collection/mens-clothing-collections/t-shirts",
              },
              {
                title: "Pants",
                path: "/categories/fashion-collection/mens-clothing-collections/pants",
              },
            ],
          },
          {
            title: "Women Clothing Collections",
            submenu: [
              {
                title: "Cloth one",
                path: "/categories/fashion collection",
              },
              {
                title: "Cloth two",
                path: "/categories/fashion collection",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Pages",
    icon: true,
    submenu: [
      {
        title: "Newsletter",
        path: "/pages/Newsletter",
      },
    ],
  },
  {
    title: "Campaign",
    path: "/campaign",
  },
  {
    title: "Offer",
    path: "/offer",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "Review",
    path: "/review",
  },
  {
    title: "Flash Sale",
    path: "/flash-sale",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];
