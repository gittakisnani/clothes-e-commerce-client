export const setPageTitle = (title: string) => {
    document.title = title;
}

export const handleMetaTags = (keywords='', desc='') => {
    const metaDesc = document.querySelector('meta[name=description]')
    const metaKeywords = document.querySelector('meta[name=keywords]')
    metaDesc?.setAttribute('content', desc)
    metaKeywords?.setAttribute('content', keywords)
}