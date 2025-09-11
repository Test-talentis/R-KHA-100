type TQuickLinks = {
    text: string;
    href: string
}

const quickLinks: TQuickLinks[] = [
    { text: 'My Account', href: '/account' },
    { text: 'CartProduct', href: '/cart' },
    { text: 'Register', href: '/register' },
    { text: 'Wishlist', href: '/wishlist' },
  ];

export default quickLinks;