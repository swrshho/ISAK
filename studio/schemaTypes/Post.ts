export default {
    name: 'post',
    title: 'Blog Post',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'banner',
            title: 'Header Banner',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'body',
            title: 'Body Paragraph',
            type: 'text',
        }
    ]
}